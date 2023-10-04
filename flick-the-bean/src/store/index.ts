import create from "zustand";

export const useBalanceStore = create((set) => ({
    balance: "",
    updateBalance: (newBalance) => set({ balance: newBalance }),
}));