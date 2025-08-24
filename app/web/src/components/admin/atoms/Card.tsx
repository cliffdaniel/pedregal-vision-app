'use client';

import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
    <div
        className={clsx(
            'rounded-lg border border-border bg-card text-foreground p-6 shadow-sm',
            className,
        )}
        {...props}
    />
);

export const CardHeader = ({ className, ...props }: CardProps) => (
    <div className={clsx('mb-4 border-b border-border pb-2', className)} {...props} />
);

export const CardTitle = ({
    className,
    children,
    ...props
}: CardProps & { children: React.ReactNode }) => (
    <h3 className={clsx('text-lg font-semibold text-foreground', className)} {...props}>
        {children}
    </h3>
);

export const CardDescription = ({
    className,
    children,
    ...props
}: CardProps & { children: React.ReactNode }) => (
    <p className={clsx('text-sm text-muted-foreground', className)} {...props}>
        {children}
    </p>
);

export const CardContent = ({ className, ...props }: CardProps) => (
    <div className={clsx('text-sm', className)} {...props} />
);

export const CardFooter = ({ className, ...props }: CardProps) => (
    <div className={clsx('mt-4 flex justify-end', className)} {...props} />
);
