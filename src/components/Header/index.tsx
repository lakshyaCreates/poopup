import Link from "next/link";

import { Wrapper } from "../wrapper";

import { Nav } from "./nav";

export const Header = () => {
    return (
        <header className="fixed left-0 top-0 flex h-20 w-full items-center border-b border-border bg-background shadow-sm">
            <Wrapper>
                <div className="flex items-center justify-between">
                    {/* TODO: Add a dropdown menu for the logo like Vercel */}
                    <Link
                        href={"/"}
                        className="text-3xl font-bold tracking-tighter"
                    >
                        Poopup
                    </Link>
                    <Nav />
                </div>
            </Wrapper>
        </header>
    );
};
