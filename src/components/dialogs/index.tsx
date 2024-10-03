import ConfirmationDialog from "./confirmation-dialog";
import { AddDomainDialog } from "@/app/(routes)/domains/add-domain-dialog";

export const Dialogs = () => {
    return (
        <>
            <ConfirmationDialog />
            <AddDomainDialog />
        </>
    );
};
