'use client';

import * as React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import clsx from 'clsx';

type SliderProps = React.ComponentPropsWithoutRef<typeof RadixSlider.Root>;

export const Slider = React.forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>(
    ({ className, ...props }, ref) => (
        <RadixSlider.Root
            ref={ref}
            className={clsx('relative flex w-full touch-none select-none items-center', className)}
            {...props}
        >
            <RadixSlider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted">
                <RadixSlider.Range className="absolute h-full bg-primary" />
            </RadixSlider.Track>
            <RadixSlider.Thumb className="block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
        </RadixSlider.Root>
    ),
);

Slider.displayName = 'Slider';
