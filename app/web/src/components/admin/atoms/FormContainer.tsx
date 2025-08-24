'use client';

import { cn } from '@/lib/utils';
import { ReactNode, FormHTMLAttributes } from 'react';

type Props = {
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const FormContainer = ({ children, className, ...rest }: Props) => (
    <form className={cn('w-full space-y-6', className)} {...rest}>
        {children}
    </form>
);
