import { RxLink2 } from "react-icons/rx";

import { getDomain } from "@/drizzle/utils/get-domain";

import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

import { PoopupCard } from "./poopup-card";
import { SettingsCard } from "./settings-card";

export default async function DomainPage({
    params,
}: {
    params: { domainId: string };
}) {
    const domainId = params.domainId;
    const { domain, settings, poopups } = await getDomain(domainId);

    return (
        <Wrapper className="space-y-8 py-8">
            <div className="space-y-2">
                <h3 className="flex items-center text-2xl font-semibold tracking-tight">
                    <RxLink2 className="mr-1.5 size-6 text-muted-foreground" />
                    {domain.url}
                </h3>
                <Separator />
            </div>
            <div className="flex h-full w-full items-start justify-between gap-x-8">
                <SettingsCard settings={settings} />
                <PoopupCard poopups={poopups} />
            </div>
        </Wrapper>
    );
}
