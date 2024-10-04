import db from "..";
import { domains, poopups, settings } from "../schema";
import { asc, eq } from "drizzle-orm";

export async function getDomain(domainId: string) {
    const response = await db
        .select()
        .from(domains)
        .where(eq(domains.id, domainId));

    const domain = response[0];

    const settingsResponse = await db
        .select()
        .from(settings)
        .where(eq(settings.domainId, domainId))
        .then((res) => res[0]);

    const poopupsResponse = await db
        .select()
        .from(poopups)
        .where(eq(poopups.domainId, domainId))
        .orderBy(asc(poopups.order));

    return { domain, settings: settingsResponse, poopups: poopupsResponse };
}
