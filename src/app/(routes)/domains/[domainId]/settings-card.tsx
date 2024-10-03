import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { SettingsForm } from "./settings-form";

export const SettingsCard = () => {
    return (
        <Card className="w-1/3">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                    Configure the settings for your domain.
                </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
                <SettingsForm />
            </CardContent>
        </Card>
    );
};
