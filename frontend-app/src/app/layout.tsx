'use client';
import { Navbar } from '@/components/navbar';
import { Providers } from '@/redux/provider';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const nunito = Nunito_Sans({
    weight: ['300', '600', '800'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={nunito.className} suppressHydrationWarning={true}>
            <body>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Navbar />
                    <div className="px-8 sm:px-20 max-w-[1920px] m-auto mt-40 sm:48 pb-20 ">
                        <Providers>{children}</Providers>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
