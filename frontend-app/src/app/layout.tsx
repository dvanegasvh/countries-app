'use client';
import { Navbar } from '@/components/navbar';
import { Providers } from '@/redux/provider';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { LayoutContainer } from '@/components/layout-container';
import './globals.css';

const nunito = Nunito_Sans({
    weight: ['300', '600', '800'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={nunito.className} suppressHydrationWarning={true}>
            <head>
                <meta charSet="utf-8" />
                <meta name="description" content="A simple project to showcase my skills" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Countries challenge</title>
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Providers>
                        <Navbar />
                        <LayoutContainer>{children}</LayoutContainer>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
