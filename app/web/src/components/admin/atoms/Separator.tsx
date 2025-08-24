import * as React from 'react';
import { cn } from '@/lib/utils';

export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('h-px w-full bg-border bg-secondary my-4', className)}
            {...props}
        />
    ),
);

Separator.displayName = 'Separator';
