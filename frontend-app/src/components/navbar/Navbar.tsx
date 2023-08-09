import { DarkModeIcon } from '../icons';

export const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between px-8 sm:px-20 shadow-md py-10 sm:py-6 mb-5 sm:mb-20">
            <div>
                <h1 className="text-[16px] sm:text-[28px] font-bold">Where in the world?</h1>
            </div>
            <div className="flex items-center gap-x-3 ">
                <DarkModeIcon className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px] -mt-[4px]" />
                <span className="text-[14px] sm:text-[18px] font-semibold">Dark Mode</span>
            </div>
        </nav>
    );
};
