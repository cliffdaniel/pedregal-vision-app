'use client';

import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

type CheckboxRootProps = React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> & {
    className?: string;
};

export const Checkbox = React.forwardRef<
    React.ElementRef<typeof RadixCheckbox.Root>,
    CheckboxRootProps
>(({ className, ...props }, ref) => {
    return (
        <RadixCheckbox.Root
            ref={ref}
            className={clsx(
                'peer h-5 w-5 shrink-0 rounded-sm border border-border bg-card shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className,
            )}
            {...props}
        >
            <RadixCheckbox.Indicator className="flex items-center justify-center text-current">
                <CheckIcon className="h-4 w-4" />
            </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
    );
});

Checkbox.displayName = 'Checkbox';
