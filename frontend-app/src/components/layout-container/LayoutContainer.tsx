export const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <main className="px-8 sm:px-20 max-w-[1920px] m-auto mt-40 sm:48 pb-20">{children}</main>;
};
