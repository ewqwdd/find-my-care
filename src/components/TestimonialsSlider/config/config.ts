import { ReactNode } from "react";

export interface ITestimonial {
    content: string
    rate: 1 | 2 | 3 | 4 | 5
    name: string
    role: string
    icon: string
}

export const testimonialsList: ITestimonial[] = [
    {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit dolor, consequat quis nisi vel, feugiat suscipit sem. Aenean fringilla gravida arcu pretium facilisis. Nunc sed sapien sit.`,
        icon: '/',
        name: 'John Smith',
        rate: 5,
        role: 'Customer'
    },
    {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit dolor, consequat quis nisi vel, feugiat suscipit sem. Aenean fringilla gravida arcu pretium facilisis. Nunc sed sapien sit.`,
        icon: '/',
        name: 'John Smith',
        rate: 5,
        role: 'Customer'
    },
    {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit dolor, consequat quis nisi vel, feugiat suscipit sem. Aenean fringilla gravida arcu pretium facilisis. Nunc sed sapien sit.`,
        icon: '/',
        name: 'John Smith',
        rate: 5,
        role: 'Customer'
    }
] 