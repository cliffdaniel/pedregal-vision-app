'use client';

import * as React from 'react';
import classNames from 'classnames';

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className,
}) => {
    return (
        <div
            className={classNames(
                'flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-md bg-muted/20',
                className,
            )}
        >
            {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
            <h2 className="text-lg font-semibold">{title}</h2>
            {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
            {action && <div className="mt-4">{action}</div>}
        </div>
    );
};
