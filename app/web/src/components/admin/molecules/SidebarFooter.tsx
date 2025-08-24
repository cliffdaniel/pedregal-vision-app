'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SidebarFooterProps = {
    children: ReactNode;
    className?: string;
};

export const SidebarFooter: FC<SidebarFooterProps> = ({ children, className }) => {
    return (
        <div className={cn('mt-auto px-4 py-4', className)}>
            <div className="space-y-1">{children}</div>
        </div>
    );
};
