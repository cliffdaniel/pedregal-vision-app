'use client';

import { useToastStore } from '@/lib/stores/toastStore';

export const toast = {
    success: (message: string) => useToastStore.getState().show(message, 'success'),
    info: (message: string) => useToastStore.getState().show(message, 'info'),
    warning: (message: string) => useToastStore.getState().show(message, 'warning'),
    error: (message: string) => useToastStore.getState().show(message, 'error'),
};
