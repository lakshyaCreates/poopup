"use server";

import { revalidatePath } from "next/cache";

import db from "..";
import { domains, settings } from "../schema";

import { getDbUser } from "./get-db-user";

export async function addDomain(url: string) {
    const dbUser = await getDbUser();

    const response = await db
        .insert(domains)
        .values({
            url,
            userId: dbUser.id,
        })
        .returning();

    if (!response[0].id) throw new Error("Failed to add domain");

    try {
        await db.insert(settings).values({
            startAt: 0,
            hideAfter: 50,
            endAt: 150,
            domainId: response[0].id,
        });
        revalidatePath("/domains", "layout");
    } catch (error) {
        console.log(error);
    }

    return response[0];
}
