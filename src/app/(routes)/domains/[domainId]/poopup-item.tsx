"use client";

import { XIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Poopups } from "@/drizzle/schema";
import { deletePoopup } from "@/drizzle/utils/delete-poopup";
import { updatePoopup } from "@/drizzle/utils/update-poopup";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const PoopupItem = ({
    poopup,
    disabled,
}: {
    poopup: Poopups;
    disabled: boolean;
}) => {
    const [title, setTitle] = useState(poopup.title);
    const [time, setTime] = useState(poopup.time);
    const [description, setDescription] = useState(poopup.description);

    const [changed, setChanged] = useState(false);
    const [saving, setSaving] = useState(false);

    async function handleDelete() {
        const { id, domainId } = poopup;
        const data = {
            id,
            domainId,
        };

        const response = await deletePoopup(data);

        if (response) {
            toast.success("Delete successfull!");
        } else {
            toast.error("Error deleting the poopup.");
        }
    }

    async function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "title") {
            setTitle(e.target.value);
            setChanged(true);
        } else if (e.target.name === "time") {
            setTime(e.target.value);
            setChanged(true);
        } else if (e.target.name === "description") {
            setTime(e.target.value);
            setChanged(true);
        }
    }

    // Save the changes to the database every 1.5 seconds
    useEffect(() => {
        const handler = setTimeout(async () => {
            if (changed) {
                const data = {
                    id: poopup.id,
                    title,
                    time,
                    description,
                    domainId: poopup.domainId,
                };

                const response = await updatePoopup(data);

                if (response.id) {
                    toast.success("Information updated!");
                } else {
                    toast.error("Error saving the information.");
                }
            }
        }, 1500);

        return () => {
            clearTimeout(handler);
        };
    }, [title, time, description]);

    return (
        <div className="relative space-y-2 rounded-xl border p-4">
            <button
                onClick={handleDelete}
                className={cn(
                    "absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-red-700",
                    disabled && "invisible",
                )}
            >
                <XIcon className="size-4" />
            </button>
            <div className="flex items-center gap-x-2">
                <Avatar>
                    <AvatarImage
                        src={poopup.imageUrl || ""}
                        alt={`Image of Poopup Id - ${poopup.id}`}
                    />
                    <AvatarFallback></AvatarFallback>
                </Avatar>
                <input
                    onChange={(e) => handleInputChange(e)}
                    disabled={disabled}
                    name="title"
                    value={title}
                    placeholder="be their zomato today..."
                    className="w-full rounded-xl border-none bg-accent/40 p-2 px-4 placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:bg-accent/30"
                />

                <input
                    onChange={(e) => handleInputChange(e)}
                    disabled={disabled}
                    name="time"
                    value={time}
                    placeholder="2m ago"
                    className="w-32 rounded-xl border-none bg-accent/40 p-2 px-4 placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:bg-accent/30"
                />
            </div>
            <input
                onChange={(e) => handleInputChange(e)}
                disabled={disabled}
                name="description"
                value={description}
                placeholder="and remind them to have lunch on time"
                className="w-full rounded-xl border-none bg-accent/40 p-2 px-4 placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:bg-accent/30"
            />
        </div>
    );
};
