"use server";

import { revalidatePath } from "next/cache";

import db from "..";
import { poopups } from "../schema";
import { eq } from "drizzle-orm";

export async function deletePoopup(data: { id: string; domainId: string }) {
    const response = await db
        .delete(poopups)
        .where(eq(poopups.id, data.id))
        .returning();

    revalidatePath(`/domains/${data.domainId}`, "layout");

    return response[0];
}
