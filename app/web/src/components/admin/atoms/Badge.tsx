'use client';

import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

type BadgeVariant =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'outline';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
    const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';

    const variants: Record<BadgeVariant, string> = {
        default: 'bg-muted text-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warning text-warning-foreground',
        info: 'bg-info text-info-foreground',
        error: 'bg-error text-error-foreground',
        outline: 'border border-border text-foreground',
    };

    return <div className={clsx(base, variants[variant], className)} {...props} />;
};
