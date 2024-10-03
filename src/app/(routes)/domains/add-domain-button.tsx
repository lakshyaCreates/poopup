"use client";

import { PlusIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

import { useAddDomain } from "@/hooks/add-domain";
import useConfirmationStore from "@/hooks/confirmation-store";

export const AddDomainButton = () => {
    const { openConfirmation } = useConfirmationStore();
    const { openAddWebsite } = useAddDomain();

    return (
        <Button
            onClick={() => {
                openConfirmation({
                    title: "Add New Website",
                    description: "Are you sure you want to add a new website?",
                    cancelLabel: "Cancel",
                    actionLabel: "Yes",
                    onAction: () => {
                        openAddWebsite();
                    },
                    onCancel: () => {},
                });
            }}
        >
            <span>Add Domain</span>
            <PlusIcon className="-mr-1 ml-2 size-4" />
        </Button>
    );
};
