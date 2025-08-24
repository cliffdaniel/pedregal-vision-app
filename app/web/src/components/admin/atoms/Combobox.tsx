'use client';

import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

type ComboboxItem = {
    value: string;
    label: string;
};

type ComboboxProps = {
    items: ComboboxItem[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
};

export const Combobox = ({ items, value, onValueChange, placeholder }: ComboboxProps) => {
    return (
        <Select.Root value={value} onValueChange={onValueChange}>
            <Select.Trigger className="inline-flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <Select.Value placeholder={placeholder} />
                <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="z-50 rounded-md border bg-popover p-1 text-sm shadow-md ring-1 ring-border">
                    <Select.Viewport>
                        {items.map((item) => (
                            <Select.Item
                                key={item.value}
                                value={item.value}
                                className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span className="flex-grow">{item.label}</span>
                                <Select.ItemIndicator className="absolute right-2 inline-flex items-center">
                                    <CheckIcon className="h-4 w-4" />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};
