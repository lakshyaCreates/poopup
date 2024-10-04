"use server";

import db from "..";
import { settings } from "../schema";
import { eq } from "drizzle-orm";

export async function updateSettings(data: {
    id: string;
    startAt: number;
    hideAfter: number;
    endAt: number;
}) {
    const response = await db
        .update(settings)
        .set({
            startAt: data.startAt,
            hideAfter: data.hideAfter,
            endAt: data.endAt,
        })
        .where(eq(settings.id, data.id))
        .returning({ updatedId: settings.id });

    return response[0];
}
