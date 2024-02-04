import { create } from 'zustand';

interface UserInfo {
    email: string;
    name: string;
}

interface StoreState {
    userInfo: UserInfo[];
    setUserInfo: (item: UserInfo) => void;
}

export const useUserStore = create<StoreState>((set) => ({
    userInfo: [],
    setUserInfo: (item) => set((state) => ({ userInfo: [...state.userInfo, item] })),
}));
