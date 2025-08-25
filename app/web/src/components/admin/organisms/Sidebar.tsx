'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SidebarHeader } from '../molecules/SidebarHeader';
import { SidebarToggle } from '../molecules/SidebarToggle';
import { SidebarGroup } from '../molecules/SidebarGroup';
import { SidebarItem } from '../molecules/SidebarItem';
import { SidebarFooter } from '../molecules/SidebarFooter';
import { Summary } from './Summary';
import { SidebarProps } from './types';

export const Sidebar = ({ className, groups, footerItems = [], profile }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                'h-screen bg-primary border-r border-border flex flex-col transition-[width] duration-300 overflow-x-hidden',
                collapsed ? 'w-16' : 'w-64',
                className,
            )}
        >
            <div className="flex items-center gap-2 px-4 py-4 min-w-0">
                <SidebarToggle collapsed={collapsed} onToggle={setCollapsed} />
                <SidebarHeader title={collapsed ? '' : 'Pedregal Visión'} />
            </div>

            {!collapsed && (
                <div className="overflow-hidden mb-6">
                    <Summary profile={profile} />
                </div>
            )}

            <nav className="space-y-4 px-1 overflow-hidden min-w-0">
                {groups.map((group) => (
                    <SidebarGroup key={group.title} title={collapsed ? undefined : group.title}>
                        {group.items.map((item) => (
                            <SidebarItem
                                key={item.label}
                                icon={item.icon}
                                label={item.label}
                                onClick={item.onClick}
                                collapsed={collapsed}
                                items={item.items}
                            />
                        ))}
                    </SidebarGroup>
                ))}
            </nav>

            {footerItems.length > 0 && (
                <SidebarFooter>
                    {footerItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            onClick={item.onClick}
                            collapsed={collapsed}
                            items={[]}
                        />
                    ))}
                </SidebarFooter>
            )}
        </aside>
    );
};
