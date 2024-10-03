"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { addDomain } from "@/drizzle/utils/add-domain";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useAddDomain } from "@/hooks/add-domain";

const formSchema = z.object({
    url: z.string().regex(/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/, {
        message: "Please enter a valid top-level domain (e.g., example.com)",
    }),
});

export const AddDomainForm = () => {
    const { closeAddWebsite } = useAddDomain();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { url } = values;

        const response = await addDomain(url);

        if (response.id) {
            form.reset();
            closeAddWebsite();
            toast.success("Domain added successfully");
        } else toast.error("Failed to add domain");
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Domain</FormLabel>
                            <FormControl>
                                <Input placeholder="something.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" size={"sm"} className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
};
