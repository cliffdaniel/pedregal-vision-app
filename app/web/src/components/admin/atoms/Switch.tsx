'use client';

import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';

type SwitchProps = React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> & {
    className?: string;
};

export const Switch = React.forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>(
    ({ className, ...props }, ref) => {
        return (
            <RadixSwitch.Root
                ref={ref}
                className={clsx(
                    'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
                    className,
                )}
                {...props}
            >
                <RadixSwitch.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
            </RadixSwitch.Root>
        );
    },
);

Switch.displayName = 'Switch';
