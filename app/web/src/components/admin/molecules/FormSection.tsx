'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FormSectionProps = {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
};

export const FormSection: FC<FormSectionProps> = ({ title, description, children, className }) => {
    return (
        <section className={cn('space-y-4 border-b border-border pb-6', className)}>
            <div className="space-y-1">
                <h2 className="text-lg font-medium">{title}</h2>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            <div className="space-y-4">{children}</div>
        </section>
    );
};
