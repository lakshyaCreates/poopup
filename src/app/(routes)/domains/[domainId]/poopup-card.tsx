import { Poopups } from "@/drizzle/schema";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { PoopupCardContent } from "./poopup-card-content";

export const PoopupCard = ({ poopups }: { poopups: Poopups[] }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Poopups</CardTitle>
                <CardDescription>
                    Manage all your poopups of the domain here.
                </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
                <PoopupCardContent poopups={poopups} />
            </CardContent>
        </Card>
    );
};
