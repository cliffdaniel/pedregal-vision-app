'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary-600',
                outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
                ghost: 'bg-transparent text-foreground hover:bg-muted',
                error: 'bg-red-600 text-white hover:bg-red-700',
            },
            size: {
                sm: 'h-8 px-3',
                md: 'h-10 px-4',
                lg: 'h-12 px-6',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariantProps {
    asChild?: boolean;
    icon?: React.ReactNode;
    loading?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'md',
            asChild,
            children,
            icon,
            loading = false,
            ...props
        },
        ref,
    ) => {
        const Component = asChild ? Slot : 'button';

        return (
            <Component
                className={clsx(buttonVariants({ variant, size }), className)}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading ? (
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                ) : (
                    icon && <span className="mr-2">{icon}</span>
                )}
                {children}
            </Component>
        );
    },
);

Button.displayName = 'Button';
