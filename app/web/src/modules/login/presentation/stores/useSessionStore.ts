import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Profile } from '@/modules/login/domain/entities/Profile';

type SessionState = {
    token: string | null;
    profile: Profile | null;
    setToken: (token: string) => void;
    setProfile: (profile: Profile) => void;
    clearSession: () => void;
};

export const useSessionStore = create<SessionState>()(
    persist(
        (set) => ({
            token: null,
            profile: null,
            setToken: (token) => set({ token }),
            setProfile: (profile) => set({ profile }),
            clearSession: () => set({ token: null, profile: null }),
        }),
        {
            name: 'session-store',
        },
    ),
);
