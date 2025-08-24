'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FormFooterProps = {
    children: ReactNode;
    align?: 'left' | 'center' | 'right';
    sticky?: boolean;
    shadow?: boolean;
    className?: string;
};

export const FormFooter: FC<FormFooterProps> = ({
    children,
    align = 'right',
    sticky = false,
    shadow = false,
    className,
}) => {
    const alignmentClass =
        align === 'left' ? 'justify-start' : align === 'center' ? 'justify-center' : 'justify-end';

    return (
        <div
            className={cn(
                'flex gap-2 pt-6 border-t border-border bg-background',
                alignmentClass,
                sticky && 'sticky bottom-0 z-10 px-4 py-3',
                shadow && sticky && 'shadow-md',
                className,
            )}
        >
            {children}
        </div>
    );
};
