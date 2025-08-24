'use client';

import clsx from 'clsx';

type SpinnerProps = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'success' | 'error' | 'warning' | 'info';
    className?: string;
};

const sizeMap = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-[3px]',
};

const colorMap = {
    primary: 'border-t-primary',
    success: 'border-t-green-500',
    error: 'border-t-red-500',
    warning: 'border-t-yellow-500',
    info: 'border-t-blue-500',
};

export const Spinner = ({ size = 'md', color = 'primary', className }: SpinnerProps) => {
    return (
        <div
            className={clsx(
                'animate-spin rounded-full border border-gray-300',
                sizeMap[size],
                colorMap[color],
                className,
            )}
        />
    );
};
