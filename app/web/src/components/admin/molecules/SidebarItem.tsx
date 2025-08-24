'use client';

import { FC, ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

export type SidebarSubItem = {
    icon?: ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
};

export type SidebarItemProps = {
    icon: ReactNode;
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    collapsed?: boolean;
    items?: SidebarSubItem[];
};

export const SidebarItem: FC<SidebarItemProps> = ({
    icon,
    label,
    href,
    active = false,
    onClick,
    collapsed = false,
    items = [],
}) => {
    const [expanded, setExpanded] = useState(false);

    const isExpandable = items.length > 0;

    const baseItemClasses =
        'flex items-center gap-3 px-4 py-2 text-sm text-primary-foreground font-medium rounded-md transition-colors cursor-pointer';

    const getItemClass = (isActive: boolean) =>
        cn(
            baseItemClasses,
            isActive
                ? 'bg-muted text-primary-foreground'
                : 'text-primary-foreground hover:bg-accent hover:text-foreground',
            collapsed && 'justify-center px-2',
        );

    const content = (
        <button
            type="button"
            className={cn(getItemClass(active), 'w-full flex items-center')}
            onClick={() => {
                if (isExpandable) setExpanded(!expanded);
                if (onClick && !isExpandable) onClick();
            }}
        >
            <span className="h-5 w-5 shrink-0">{icon}</span>
            {!collapsed && (
                <>
                    <span className="flex-1 text-left truncate">{label}</span>
                    {isExpandable && (
                        <span className="ml-auto">
                            {expanded ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            )}
                        </span>
                    )}
                </>
            )}
        </button>
    );

    const wrapper =
        href && !isExpandable ? (
            <Link href={href} onClick={onClick}>
                {content}
            </Link>
        ) : (
            <div>{content}</div>
        );

    return (
        <div className="w-full">
            {wrapper}

            {!collapsed && expanded && isExpandable && (
                <div className="ml-4 mt-1 space-y-1">
                    {items.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href ?? '#'}
                            onClick={item.onClick}
                            className={cn(
                                'block px-6 py-1.5 text-sm text-primary-foreground rounded-md transition-colors hover:bg-accent hover:text-foreground',
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
