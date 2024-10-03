import Link from "next/link";

import { SigninButton } from "../signin-button";
import { SignoutButton } from "../signout-button";

import { auth } from "@/auth";

export const Nav = async () => {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="flex items-center gap-x-4">
            {user ? (
                <>
                    <p className="font-bold text-foreground">{user.name}</p>
                    <ul className="flex items-center gap-x-4">
                        {appLinks.map((link, index) => {
                            const { text, href } = link;

                            return (
                                <li
                                    key={index}
                                    className="font-medium text-muted-foreground transition-colors duration-200 ease-in hover:text-foreground"
                                >
                                    <Link href={href}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <SignoutButton />
                </>
            ) : (
                <>
                    <ul className="flex items-center gap-x-4">
                        {marketingLinks.map((link, index) => {
                            const { text, href } = link;

                            return (
                                <li
                                    key={index}
                                    className="font-medium text-muted-foreground transition-colors duration-200 ease-in hover:text-foreground"
                                >
                                    <Link href={href}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <SigninButton />
                </>
            )}
        </div>
    );
};

const marketingLinks = [
    {
        text: "Features",
        href: "/features",
    },
    {
        text: "Pricing",
        href: "/pricing",
    },
    {
        text: "Docs",
        href: "/docs",
    },
    {
        text: "Blog",
        href: "/blog",
    },
];

const appLinks = [
    {
        text: "Dashboard",
        href: "/dashboard",
    },
    {
        text: "Websites",
        href: "/websites",
    },
];
