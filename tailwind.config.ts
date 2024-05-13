
function withOpacity(variableName: string) {
  return ({ opacityValue }: {opacityValue?: string}) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: withOpacity("--primary-50"),
          100: withOpacity("--primary-100"),
          200: withOpacity("--primary-200"),
          300: withOpacity("--primary-300"),
          400: withOpacity("--primary-400"),
          500: withOpacity("--primary-500"),
          600: withOpacity("--primary-600"),
          700: withOpacity("--primary-700"),
          900: withOpacity("--primary-900"),
          800: withOpacity("--primary-800"),
        },
        secondary: {
          50: withOpacity("--secondary-50"),
          100: withOpacity("--secondary-100"),
          200: withOpacity("--secondary-200"),
          300: withOpacity("--secondary-300"),
          400: withOpacity("--secondary-400"),
          500: withOpacity("--secondary-500"),
          600: withOpacity("--secondary-600"),
          700: withOpacity("--secondary-700"),
          900: withOpacity("--secondary-900"),
          800: withOpacity("--secondary-800"),
        },
        accent: {
          50: withOpacity("--accent-50"),
          100: withOpacity("--accent-100"),
          200: withOpacity("--accent-200"),
          300: withOpacity("--accent-300"),
          400: withOpacity("--accent-400"),
          500: withOpacity("--accent-500"),
          600: withOpacity("--accent-600"),
          700: withOpacity("--accent-700"),
          900: withOpacity("--accent-900"),
          800: withOpacity("--accent-800"),
        },
        black: {
          b0: withOpacity("--black-b0"),
          b10: withOpacity("--black-b10"),
          b20: withOpacity("--black-b20"),
          b30: withOpacity("--black-b30"),
          b40: withOpacity("--black-b40"),
          b50: withOpacity("--black-b50"),
          b60: withOpacity("--black-b60"),
          b70: withOpacity("--black-b70"),
          b80: withOpacity("--black-b80"),
          b90: withOpacity("--black-b90"),
          b100: withOpacity("--black-b100"),
          b200: withOpacity("--black-b200"),
          b300: withOpacity("--black-b300"),
          b400: withOpacity("--black-b400"),
          b500: withOpacity("--black-b500"),
          b600: withOpacity("--black-b600"),
          b700: withOpacity("--black-b700"),
          b800: withOpacity("--black-b800"),
          b900: withOpacity("--black-b900"),
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        overpass: ['var(--overpass)'],
      },
      fontSize: {
        lg: ['19px', '1.5'],
        xl: ['23px', '1.5'],
        '2xl': ['28px', '1.3'],
        '3xl': ['33px', '1.2'],
        '4xl': ['40px', '1.2'],
        '5xl': ['48px', '1.2'],
      },
      lineHeight: {
        'body': '1.2'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}