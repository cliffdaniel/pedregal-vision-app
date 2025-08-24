'use client';

import clsx from 'clsx';

type SkeletonProps = {
    className?: string;
    width?: string | number;
    height?: string | number;
    rounded?: 'sm' | 'md' | 'lg' | 'full';
};

const roundedMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};

export const Skeleton = ({
    className,
    width = '100%',
    height = '1rem',
    rounded = 'md',
}: SkeletonProps) => {
    return (
        <div
            className={clsx('animate-pulse bg-muted', roundedMap[rounded], className)}
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
            }}
        />
    );
};
