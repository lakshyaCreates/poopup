"use client";

import { EditIcon, PlusIcon, XSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { toast } from "sonner";

import { Poopups } from "@/drizzle/schema";
import { newPoopup } from "@/drizzle/utils/new-poopup";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { PoopupItem } from "./poopup-item";

export const PoopupCardContent = ({ poopups }: { poopups: Poopups[] }) => {
    const pathname = usePathname();
    const domainId = pathname.split("/")[2];

    const [state, setState] = useState<"edit" | "update">("edit");
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (state === "update") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    });

    const handleAdd = async () => {
        const response = await newPoopup(domainId);

        if (response) {
            toast.success(`Poopup Id: ${response.id} created!`);
        }

        console.log(response);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-4">
                {poopups.map((poopup, index) => {
                    return (
                        <PoopupItem
                            key={index}
                            poopup={poopup}
                            disabled={disabled}
                        />
                    );
                })}
            </div>

            <Separator />
            <div className="flex items-center justify-end gap-x-2">
                {/* <Button size={"sm"}>Update</Button> */}
                <Button
                    onClick={() => {
                        if (state === "edit") {
                            setState("update");
                        } else {
                            setState("edit");
                        }
                    }}
                    size={"sm"}
                    variant={"outline"}
                >
                    {state === "edit" ? (
                        <>
                            <span className="tracking-wide">Edit</span>
                            <EditIcon className="ml-1 size-4" />
                        </>
                    ) : (
                        <>
                            <span>Close</span>
                            <XSquareIcon className="ml-1 size-4" />
                        </>
                    )}
                </Button>
                <Button onClick={handleAdd} size={"sm"} variant={"outline"}>
                    <span>Add</span>
                    <PlusIcon className="ml-1 size-4" />
                </Button>
            </div>
        </div>
    );
};
