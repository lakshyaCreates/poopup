import { Dialogs } from "@/components/dialogs";

export default function RoutesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Dialogs />
        </>
    );
}
