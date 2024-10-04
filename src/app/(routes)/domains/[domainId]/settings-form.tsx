"use client";

import { EditIcon, XSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { revalidatePath } from "next/cache";
import { usePathname } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Settings } from "@/drizzle/schema";
import { updateSettings } from "@/drizzle/utils/update-settings";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    startAt: z.coerce.number().int().min(50).max(10000),
    hideAfter: z.coerce.number().int().min(50).max(10000),
    endAt: z.coerce.number().int().min(50).max(10000),
});

export const SettingsForm = ({ settings }: { settings: Settings }) => {
    const [disabled, setDisabled] = useState(false);
    const [state, setState] = useState<"edit" | "update">("edit");

    useEffect(() => {
        if (state === "update") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [state, disabled]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            startAt: settings.startAt!,
            hideAfter: settings.hideAfter!,
            endAt: settings.endAt!,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const data = {
            id: settings.id,
            startAt: values.startAt,
            hideAfter: values.hideAfter,
            endAt: values.endAt,
        };
        const response = await updateSettings(data);

        if (response) {
            toast.success(`Updated Id - ${response.updatedId}`);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="startAt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start At (ms)</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    type="number"
                                    placeholder="100"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hideAfter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>HIde after (ms)</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    type="number"
                                    placeholder="100"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endAt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>End At (ms)</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    type="number"
                                    placeholder="100"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center gap-x-2">
                    <Button
                        disabled={disabled}
                        type="submit"
                        size={"sm"}
                        className="w-full"
                    >
                        Update
                    </Button>
                    <Button
                        onClick={() => {
                            if (state === "edit") {
                                setState("update");
                            } else {
                                setState("edit");
                            }
                        }}
                        type="button"
                        size={"sm"}
                        variant={"outline"}
                        className="text-muted-foreground"
                    >
                        {state === "edit" ? (
                            <EditIcon className="size-5" />
                        ) : (
                            <XSquareIcon className="size-5" />
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
