"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface FormSchema {
  email?: string;
  password?: string;
  repPassword?: string;
}

export default function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        setSubmitting(true);
        try {
          signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/u/dashboard",
          });
        } catch (err) {
          console.log(err);
          setSubmitting(false);
        }
      }}
      validate={(values) => {
        const errors: FormSchema = {};
        if (!values.email) {
          errors.email = "Required field";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required field";
        }
        return errors;
      }}
    >
      <Form className="flex flex-col gap-[6px]">
        <label htmlFor="email" className="font-medium" style={{ color: "#0F172A" }}>
          Email
        </label>
        <Field type="email" name="email" as={Input} placeholder="Email" />
        <ErrorMessage name="email" component="span" className="text-red-600 text-sm" />
        <label htmlFor="password" className="font-medium mt-[6px]" style={{ color: "#0F172A" }}>
          Password
        </label>
        <Field type="password" name="password" as={Input} placeholder="Password" />
        <ErrorMessage name="password" component="span" className="text-red-600 text-sm" />
        <Button type="submit" variant={"primary"} className="mt-[6px] w-full">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
