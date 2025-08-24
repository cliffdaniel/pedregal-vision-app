'use client';

import type { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
};

export const Label = ({ className, children, required, ...props }: LabelProps) => {
    return (
        <label className={clsx('text-sm font-medium text-foreground', className)} {...props}>
            {children}
            {required && <span className="text-error ml-1">*</span>}
        </label>
    );
};
