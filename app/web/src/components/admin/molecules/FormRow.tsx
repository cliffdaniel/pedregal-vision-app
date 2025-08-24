'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FormRowProps = {
    children: ReactNode;
    className?: string;
    gap?: string;
};

export const FormRow: FC<FormRowProps> = ({ children, className, gap = 'gap-4' }) => {
    return (
        <div className={cn('flex flex-wrap', gap, className)}>
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <div key={index} className="flex-1 min-w-0">
                        {child}
                    </div>
                ))
            ) : (
                <div className="flex-1 min-w-0">{children}</div>
            )}
        </div>
    );
};
