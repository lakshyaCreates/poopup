import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { AdapterUser } from "@auth/core/adapters";
import { getTableColumns } from "drizzle-orm";
import db from "@/drizzle";
import * as schema from "@/drizzle/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: {
        ...DrizzleAdapter(db, {
            accountsTable: schema.accounts,
            usersTable: schema.users,
            authenticatorsTable: schema.authenticators,
            sessionsTable: schema.sessions,
            verificationTokensTable: schema.verificationTokens,
        }),
        async createUser(data: AdapterUser) {
            const { id, ...insertData } = data;
            const hasDefaultId = getTableColumns(schema.users)["id"][
                "hasDefault"
            ];

            return db
                .insert(schema.users)
                .values(hasDefaultId ? insertData : { ...insertData, id })
                .returning()
                .then((res) => res[0]);
        },
        
    },
    session: { strategy: "database"},   
    providers: [Google],
})