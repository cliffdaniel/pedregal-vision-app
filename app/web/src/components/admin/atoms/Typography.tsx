'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';
    children: ReactNode;
}

export const Typography = ({ variant = 'p', className, children, ...props }: TypographyProps) => {
    const baseClasses = {
        h1: 'text-4xl font-bold text-foreground',
        h2: 'text-3xl font-semibold text-foreground',
        h3: 'text-2xl font-semibold text-foreground',
        h4: 'text-xl font-medium text-foreground',
        p: 'text-base text-foreground',
        small: 'text-sm text-muted-foreground',
        muted: 'text-sm text-muted-foreground',
    };

    const Element = variant === 'muted' ? 'p' : variant;

    return (
        <Element className={clsx(baseClasses[variant], className)} {...props}>
            {children}
        </Element>
    );
};
