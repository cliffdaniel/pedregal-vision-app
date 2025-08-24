'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { formatDateSafely } from '@/lib/formatDateSafely';

interface DatePickerProps {
    id?: string;
    date?: Date;
    onChange: (date: Date) => void;
    placeholder?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    id,
    date,
    onChange,
    placeholder = 'Selecciona una fecha',
}) => {
    const [open, setOpen] = React.useState(false);

    const handleSelect = (selected: Date | undefined) => {
        if (selected) {
            onChange(selected);
            setOpen(false);
        }
    };

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <button
                    id={id}
                    type="button"
                    className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                    {date ? (
                        formatDateSafely(date, 'PPP')
                    ) : (
                        <span className="text-muted-foreground">{placeholder}</span>
                    )}
                    <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    align="start"
                    sideOffset={4}
                    className="z-50 rounded-md border border-border bg-popover p-2 shadow-md"
                >
                    <DayPicker mode="single" selected={date} onSelect={handleSelect} autoFocus />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};
