import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

import { AddDomainButton } from "./add-domain-button";
import { ShowAllDomains } from "./show-all-domains";

export default async function DashboardPage() {
    return (
        <Wrapper className="py-4">
            <div className="flex w-full flex-col gap-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Domains</h1>
                    <AddDomainButton />
                </div>
                <Separator />
                <Suspense fallback={<div>Loading...</div>}>
                    <ShowAllDomains />
                </Suspense>
            </div>
        </Wrapper>
    );
}
