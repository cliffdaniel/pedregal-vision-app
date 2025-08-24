'use client';

import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import clsx from 'clsx';

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;

export const PopoverContent = React.forwardRef<
    React.ElementRef<typeof RadixPopover.Content>,
    React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
    return (
        <RadixPopover.Portal>
            <RadixPopover.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={clsx(
                    'z-50 rounded-md border bg-popover text-foreground p-4 text-sm shadow-md ring-1 ring-border',
                    className,
                )}
                {...props}
            />
        </RadixPopover.Portal>
    );
});

PopoverContent.displayName = 'PopoverContent';
