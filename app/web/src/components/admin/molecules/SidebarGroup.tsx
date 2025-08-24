'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SidebarGroupProps = {
    title?: string;
    children: ReactNode;
    className?: string;
};

export const SidebarGroup: FC<SidebarGroupProps> = ({ title, children, className }) => {
    return (
        <div className={cn('space-y-1', className)}>
            {title && (
                <div className="px-4 text-xs font-semibold text-primary-foreground uppercase tracking-wide">
                    {title}
                </div>
            )}
            <div className="space-y-1">{children}</div>
        </div>
    );
};
