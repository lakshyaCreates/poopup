import type { User as DefaultUser } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

import { users } from "@/drizzle/schema";

declare module "next-auth" {
    interface User extends DefaultUser {
        emailVerified: (typeof users.$inferSelect)["emailVerified"];
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefautJWT {
        id: (typeof users.$inferSelect)["id"];
    }
}