import { create } from 'zustand';

interface StoreState {
    stripeSession: string;
    setStripeSessionId: (itemName: string) => void;
}

export const useStripeStore = create<StoreState>((set) => ({
    stripeSession: "",
    setStripeSessionId: (value) => set({ stripeSession: value }),
}))