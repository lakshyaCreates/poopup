"use server";

import { revalidatePath } from "next/cache";

import db from "..";
import { poopups } from "../schema";
import { eq } from "drizzle-orm";

export async function updatePoopup(data: {
    id: string;
    title: string;
    time: string;
    description: string;
    domainId: string;
}) {
    const response = await db
        .update(poopups)
        .set({
            title: data.title,
            time: data.time,
            description: data.description,
        })
        .where(eq(poopups.id, data.id))
        .returning();

    revalidatePath(`/domains/${data.domainId}`);

    return response[0];
}
