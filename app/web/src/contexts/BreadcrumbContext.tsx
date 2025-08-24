'use client';

import { createContext, useContext, useMemo, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type BreadcrumbItem = {
    label: string;
    href?: string;
    icon?: ReactNode;
    isCurrent: boolean;
};

type BreadcrumbContextType = {
    items: BreadcrumbItem[];
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const [items, setItems] = useState<BreadcrumbItem[]>([]);

    useEffect(() => {
        const labelMap: Record<string, string> = {
            'medical-leave': 'Descanso Médico',
            add: 'Registrar',
            users: 'Usuarios',
            new: 'Nuevo',
            absences: 'Ausencias',
            type: 'Tipo',
            list: 'Listado',
            dashboard: 'Inicio',
            documentos: 'Documentos',
            historial: 'Historial',
        };

        const parts = pathname.split('/').filter(Boolean);

        const mapped: BreadcrumbItem[] = parts.map((part, index) => {
            const href = '/' + parts.slice(0, index + 1).join('/');
            const label =
                labelMap[part] ??
                decodeURIComponent(part)
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase());

            return {
                label,
                href,
                isCurrent: false,
            };
        });

        const withRoot: BreadcrumbItem[] = [
            { label: 'Inicio', href: '/', isCurrent: false },
            ...mapped,
        ];

        if (withRoot.length > 0) {
            withRoot[withRoot.length - 1].isCurrent = true;
        }

        setItems(withRoot);
    }, [pathname]);

    const value = useMemo(() => ({ items }), [items]);

    return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>;
};

export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext);
    if (!context) throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
    return context;
};
