"use client";

import { BsLamp } from "react-icons/bs";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export const ThemeToggleButton = () => {
    const { setTheme, theme } = useTheme();
    return (
        <Button
            variant={"outline"}
            size={"sm"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative overflow-hidden"
        >
            <BsLamp className="size-4" />
        </Button>
    );
};
