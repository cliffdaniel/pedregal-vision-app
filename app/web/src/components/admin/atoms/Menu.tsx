'use client';

import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';

interface MenuItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    onSelect?: () => void;
}

interface MenuGroup {
    label?: string;
    items: MenuItem[];
}

interface MenuProps {
    groups: MenuGroup[];
    trigger: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ groups, trigger }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    sideOffset={4}
                    className="z-50 w-48 rounded-md border border-border bg-popover p-1 shadow-md"
                >
                    {groups.map((group, index) => (
                        <div key={index} className="py-1">
                            {group.label && (
                                <div className="px-2 py-1 text-xs text-muted-foreground font-semibold">
                                    {group.label}
                                </div>
                            )}
                            {group.items.map((item) => (
                                <DropdownMenu.Item
                                    key={item.value}
                                    onSelect={item.onSelect}
                                    className={classNames(
                                        'flex cursor-pointer select-none items-center gap-2 rounded px-2 py-2 text-sm text-foreground outline-none hover:bg-muted focus:bg-muted',
                                    )}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </DropdownMenu.Item>
                            ))}
                        </div>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
