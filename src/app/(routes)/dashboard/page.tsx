import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

import { AddWebsiteButton } from "./add-website-button";

export default function DashboardPage() {
    return (
        <Wrapper className="py-4">
            <div className="flex w-full flex-col gap-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <AddWebsiteButton />
                </div>
                <Separator />
            </div>
        </Wrapper>
    );
}
