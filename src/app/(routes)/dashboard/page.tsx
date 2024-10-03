import { redirect } from "next/navigation";

import { getDbUser } from "@/drizzle/utils/get-db-user";

import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

import { AddDomainButton } from "./add-domain-button";
import { auth } from "@/auth";

export default async function DashboardPage() {
    return (
        <Wrapper className="py-4">
            <div className="flex w-full flex-col gap-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <AddDomainButton />
                </div>
                <Separator />
            </div>
        </Wrapper>
    );
}
