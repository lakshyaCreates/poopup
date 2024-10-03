"use server";

import { redirect } from "next/navigation";

import { signIn } from "@/auth";

export async function signinUserAction() {
    await signIn("google", { redirect: true, redirectTo: "/dashboard" });
}
