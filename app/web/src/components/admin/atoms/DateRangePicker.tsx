'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { DayPicker, DateRange } from 'react-day-picker';
import { formatDateSafely } from '@/lib/formatDateSafely';
import 'react-day-picker/dist/style.css';

interface DateRangePickerProps {
    range?: DateRange;
    onChange: (range: DateRange) => void;
    placeholder?: string;
}

export function DateRangePicker({
    range,
    onChange,
    placeholder = 'Selecciona un rango de fecha',
}: Readonly<DateRangePickerProps>) {
    const [open, setOpen] = React.useState(false);

    const handleSelect = (selected: DateRange | undefined) => {
        if (selected) {
            onChange(selected);
        }
    };

    let displayText = '';
    if (range?.from && range?.to) {
        displayText = `${formatDateSafely(range.from, 'PPP')} - ${formatDateSafely(range.to, 'PPP')}`;
    } else if (range?.from) {
        displayText = `${formatDateSafely(range.from, 'PPP')} - ...`;
    }

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                    {displayText || <span className="text-muted-foreground">{placeholder}</span>}
                    <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    align="start"
                    sideOffset={4}
                    className="z-50 rounded-md border border-border bg-popover p-2 shadow-md"
                >
                    <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={handleSelect}
                        autoFocus
                        numberOfMonths={2}
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
