'use client';

import * as React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

type RadioGroupRootProps = React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> & {
    className?: string;
};

export const RadioGroup = ({ className, ...props }: RadioGroupRootProps) => {
    return <RadixRadioGroup.Root className={clsx('flex flex-col gap-2', className)} {...props} />;
};

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> & {
    label: string;
};

export const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadixRadioGroup.Item>,
    RadioGroupItemProps
>(({ className, label, ...props }, ref) => {
    return (
        <div className="flex items-center gap-2">
            <RadixRadioGroup.Item
                ref={ref}
                className={clsx(
                    'h-4 w-4 rounded-full border border-input bg-background shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
                    className,
                )}
                {...props}
            >
                <RadixRadioGroup.Indicator className="flex h-full w-full items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </RadixRadioGroup.Indicator>
            </RadixRadioGroup.Item>
            <label className="text-sm text-foreground">{label}</label>
        </div>
    );
});

RadioGroupItem.displayName = 'RadioGroupItem';
