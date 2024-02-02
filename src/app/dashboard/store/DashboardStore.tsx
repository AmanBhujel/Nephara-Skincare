import { create } from 'zustand';

interface StoreState {
  activeSidebarItem: string;
  appointmentSelected: boolean;
  setActiveSidebarItem: (itemName: string) => void;
  setAppointmentSelected: (value: boolean) => void;
}

export const useDashboardStore = create<StoreState>((set) => ({
  activeSidebarItem: "",
  appointmentSelected: false,
  setActiveSidebarItem: (itemName) => set({ activeSidebarItem: itemName }),
  setAppointmentSelected: (value) => set({ appointmentSelected: value }),
}));
