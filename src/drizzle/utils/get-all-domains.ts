import db from "..";
import { domains } from "../schema";
import { eq } from "drizzle-orm";

import { getDbUser } from "./get-db-user";

export async function getAllDomains() {
    const dbUser = await getDbUser();

    const response = await db
        .select()
        .from(domains)
        .where(eq(domains.userId, dbUser.id));

    return response;
}
