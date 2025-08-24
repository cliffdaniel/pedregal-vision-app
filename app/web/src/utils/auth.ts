export const getAccessToken = (): string | null => {
    if (typeof window === 'undefined') return null;

    const raw = localStorage.getItem('session-store');

    if (!raw) return null;

    try {
        const parsed = JSON.parse(raw);

        return parsed?.state?.token ?? null;
    } catch {
        return null;
    }
};
