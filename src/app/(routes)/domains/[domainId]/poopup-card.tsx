import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { PoopupCardContent } from "./poopup-card-content";

export const PoopupCard = () => {
    return (
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>Poopups</CardTitle>
                <CardDescription>
                    Manage all your poopups of the domain here.
                </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
                <PoopupCardContent />
            </CardContent>
        </Card>
    );
};
