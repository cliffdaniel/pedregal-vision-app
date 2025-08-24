'use client';

import { forwardRef, type ReactNode } from 'react';
import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    prepend?: ReactNode;
    append?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, prepend, append, ...props }, ref) => {
        return (
            <div className="flex h-10 w-full items-center rounded-md border border-input bg-background text-foreground shadow-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {prepend && (
                    <span className="px-3 text-muted-foreground text-sm h-full flex items-center border-r border-border bg-muted">
                        {prepend}
                    </span>
                )}
                <input
                    ref={ref}
                    className={clsx(
                        'flex-1 h-full px-3 py-2 text-sm placeholder:text-muted-foreground bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        className,
                    )}
                    {...props}
                />
                {append && (
                    <span className="px-3 text-muted-foreground text-sm h-full flex items-center border-l border-border bg-muted">
                        {append}
                    </span>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';
