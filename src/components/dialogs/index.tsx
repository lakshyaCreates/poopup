import ConfirmationDialog from "./confirmation-dialog";
import { AddDomainDialog } from "@/app/(routes)/dashboard/add-domain-dialog";

export const Dialogs = () => {
    return (
        <>
            <ConfirmationDialog />
            <AddDomainDialog />
        </>
    );
};
