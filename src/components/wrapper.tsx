export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto w-full max-w-sm px-4 sm:max-w-xl sm:px-6 md:max-w-3xl lg:max-w-5xl lg:px-8 xl:max-w-7xl">
            {children}
        </div>
    );
};
