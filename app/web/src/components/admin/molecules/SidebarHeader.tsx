'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SidebarHeaderProps = {
    title?: string;
    logo?: ReactNode;
    className?: string;
};

export const SidebarHeader: FC<SidebarHeaderProps> = ({ title, logo, className }) => {
    return (
        <div className={cn('flex items-center gap-2 px-4 py-4', className)}>
            {logo && <div className="h-6 w-6">{logo}</div>}
            {title && (
                <span className="text-lg font-semibold text-primary-foreground whitespace-nowrap">
                    {title}
                </span>
            )}
        </div>
    );
};
