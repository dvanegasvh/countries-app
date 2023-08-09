import { Navbar } from '@/components/navbar';
import './globals.css';
import { Providers } from '@/redux/provider';
import { Nunito_Sans } from 'next/font/google';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};
const nunito = Nunito_Sans({
    weight: ['300', '600', '800'],
    subsets: ['latin'],
    display: 'swap',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${nunito.className} bg-light-gray max-w-[2560px] m-auto`}>
            <body>
                <Navbar />
                <div className="px-8 sm:px-20">
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
