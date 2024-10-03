import { create } from "zustand";

interface State {
    open: boolean;
}

interface Action {
    setOpen: (open: boolean) => void;
    openAddWebsite: () => void;
    closeAddWebsite: () => void;
}

export const useAddDomain = create<State & Action>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
    openAddWebsite: () => set({ open: true }),
    closeAddWebsite: () => set({ open: false }),
}));
