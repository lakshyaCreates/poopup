import Link from "next/link";

import { getAllDomains } from "@/drizzle/utils/get-all-domains";

export const ShowAllDomains = async () => {
    const domains = await getAllDomains();

    return (
        <div className="flex w-full flex-wrap items-center justify-center gap-2 md:justify-start">
            {domains.map((domain, index) => {
                return (
                    <div
                        key={domain.id}
                        className="flex w-64 flex-col items-start justify-center rounded-lg border border-border bg-gradient-to-br from-accent/40 to-accent/50 px-4 py-3 lg:w-96"
                    >
                        <Link
                            href={`/domains/${domain.id}`}
                            className="text-lg font-semibold tracking-tight md:text-xl"
                        >
                            {domain.url}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
