'use client';

import { FC } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarToggleProps = {
    collapsed: boolean;
    onToggle: (collapsed: boolean) => void;
    className?: string;
};

export const SidebarToggle: FC<SidebarToggleProps> = ({ onToggle, collapsed, className }) => {
    return (
        <button
            type="button"
            onClick={() => onToggle(!collapsed)}
            className={cn(
                'p-1 rounded-md text-primary-foreground hover:text-primary-foreground transition-colors cursor-pointer',
                className,
            )}
            aria-label="Toggle sidebar"
        >
            <Menu className="h-5 w-5" />
        </button>
    );
};
