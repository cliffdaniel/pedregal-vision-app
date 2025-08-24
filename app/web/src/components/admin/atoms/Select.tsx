'use client';

import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    id?: string;
    options: Option[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    multiple?: boolean;
    placeholder?: string;
    searchable?: boolean;
}

export const Select: React.FC<SelectProps> = ({
    id,
    options,
    value,
    onChange,
    multiple = false,
    placeholder = 'Seleccionar...',
    searchable = true,
}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSelect = (selected: string) => {
        if (!onChange) return;
        if (multiple) {
            const current = Array.isArray(value) ? value : [];
            onChange(
                current.includes(selected)
                    ? current.filter((v) => v !== selected)
                    : [...current, selected],
            );
            setSearch('');
        } else {
            onChange(selected);
            setSearch('');
            setOpen(false);
        }
    };

    const handleRemove = (val: string) => {
        if (!onChange || !Array.isArray(value)) return;
        onChange(value.filter((v) => v !== val));
    };

    const filteredOptions = useMemo(() => {
        return options.filter((option) =>
            option.label.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search, options]);

    const displayValue = useMemo(() => {
        if (multiple && Array.isArray(value)) {
            return value
                .map((val) => options.find((o) => o.value === val)?.label)
                .filter(Boolean)
                .join(', ');
        } else if (!multiple && typeof value === 'string') {
            return options.find((o) => o.value === value)?.label || '';
        }
        return '';
    }, [value, options, multiple]);

    useEffect(() => {
        if (open && searchable) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    }, [open, searchable]);

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <button
                    id={id}
                    type="button"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <span className="truncate">
                        {multiple && Array.isArray(value) ? (
                            value.map((val) => (
                                <span
                                    key={val}
                                    className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground mr-1"
                                >
                                    {options.find((o) => o.value === val)?.label}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemove(val);
                                        }}
                                        className="ml-1 hover:text-red-500"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </span>
                            ))
                        ) : (
                            <>
                                {displayValue || (
                                    <span className="text-muted-foreground">{placeholder}</span>
                                )}
                            </>
                        )}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    sideOffset={4}
                    align="start"
                    className="z-50 w-[--radix-popover-trigger-width] max-h-[300px] overflow-auto rounded-md border border-border bg-popover text-popover-foreground shadow-md"
                >
                    {searchable && (
                        <div className="p-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Buscar..."
                                className="w-full rounded border border-input px-2 py-1 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )}
                    {filteredOptions.map((option) => {
                        const isSelected = multiple
                            ? Array.isArray(value) && value.includes(option.value)
                            : value === option.value;
                        return (
                            <div
                                key={option.value}
                                className={classNames(
                                    'flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-muted',
                                    isSelected && 'bg-muted text-primary',
                                )}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                                {isSelected && <Check className="h-4 w-4" />}
                            </div>
                        );
                    })}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};
