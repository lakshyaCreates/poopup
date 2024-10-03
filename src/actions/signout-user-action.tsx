"use server";

import { signOut } from "@/auth";

export async function signoutUserAction() {
    await signOut({ redirect: true, redirectTo: "/" });
}
