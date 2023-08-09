import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: 'hsl(0, 0%, 100%)',
                dark: {
                    'blue-dark': 'hsl(209, 23%, 22%)',
                    'blue-darkness': 'hsl(207, 26%, 17%)',
                },
                light: {
                    'blue-dark': ' hsl(200, 15%, 8%)',
                    'gray-dark': 'hsl(0, 0%, 52%)',
                    gray: 'hsl(0, 0%, 98%)',
                },
            },
            screens: {
                xs: { max: '767px' },
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            boxShadow: {
                button: '0.0625rem 0.125rem 0.3125rem 0 rgba(69, 68, 68, 0.5);',
            },
        },
    },
    plugins: [],
};
export default config;
