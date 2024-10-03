"use client";

import { Button } from "./ui/button";
import { signoutUserAction } from "@/actions/signout-user-action";

export const SignoutButton = () => {
    return (
        <form action={signoutUserAction}>
            <Button type="submit" size={"sm"} variant={"destructive"}>
                Sign out
            </Button>
        </form>
    );
};
