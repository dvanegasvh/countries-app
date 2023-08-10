import { useTheme } from 'next-themes';
import { DarkModeIcon } from '../icons';
import { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <nav className="shadow-md py-10 sm:py-6 mb-5 sm:mb-20 fixed w-full top-0 bg-light-gray dark:bg-dark-blue-dark z-50 ">
            <div className="px-8 sm:px-20 flex justify-between max-w-[1920px] m-auto">
                <div>
                    <h1 className="text-[16px] sm:text-[28px] font-bold">Where in the world?</h1>
                </div>
                <div
                    className="flex items-center gap-x-3 cursor-pointer"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    <DarkModeIcon className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px] -mt-[4px]" />
                    <span className="text-[14px] sm:text-[18px] font-semibold">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </div>
            </div>
        </nav>
    );
};
