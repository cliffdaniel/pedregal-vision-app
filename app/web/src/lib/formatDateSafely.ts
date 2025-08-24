import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDateSafely = (
    date: Date | undefined | null,
    fallback = 'Fecha no válida',
): string => {
    if (!date || isNaN(date.getTime?.())) return fallback;

    try {
        return format(date, 'PPP', { locale: es });
    } catch {
        return fallback;
    }
};
