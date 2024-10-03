"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { AddDomainForm } from "./add-domain-form";
import { useAddDomain } from "@/hooks/add-domain";

export const AddDomainDialog = () => {
    const { open, setOpen } = useAddDomain();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[85vw] sm:max-w-[80vw] md:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Add New Domain</DialogTitle>
                    <DialogDescription>
                        Fill the details below to add a new domain.
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <AddDomainForm />
            </DialogContent>
        </Dialog>
    );
};
