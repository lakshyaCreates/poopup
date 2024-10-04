"use server";

import { revalidatePath } from "next/cache";

import db from "..";
import { poopups } from "../schema";
import { eq } from "drizzle-orm";

export async function newPoopup(domainId: string) {
    const allPoopups = await db
        .select({
            order: poopups.order,
        })
        .from(poopups)
        .where(eq(poopups.domainId, domainId));

    const lastOrder = allPoopups.length;

    const response = await db
        .insert(poopups)
        .values({
            title: "",
            description: "",
            imageUrl: "",
            time: "",
            order: lastOrder + 1,
            domainId,
        })
        .returning();

    revalidatePath(`/domains/${domainId}`, "layout");

    return response[0];
}
