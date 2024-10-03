"use server";

import db from "..";
import { users } from "../schema";
import { eq } from "drizzle-orm";

import { getAuthUser } from "@/helpers/get-auth-user";

export async function getDbUser() {
    const user = await getAuthUser();
    const userId = user?.id;

    const response = await db.select().from(users).where(eq(users.id, userId!));

    return response[0];
}
