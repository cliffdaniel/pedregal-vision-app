'use client';

import { create } from 'zustand';

type ToastStatus = 'success' | 'info' | 'warning' | 'error';

type ToastState = {
    message: string;
    status: ToastStatus;
    visible: boolean;
    show: (message: string, status: ToastStatus) => void;
    hide: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
    message: '',
    status: 'info',
    visible: false,
    show: (message, status) => {
        set({ message, status, visible: true });
        setTimeout(() => set({ visible: false }), 4000);
    },
    hide: () => set({ visible: false }),
}));
