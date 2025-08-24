'use client';

import React from 'react';
import classNames from 'classnames';

type ProgressProps = {
    value: number;
    color?: 'primary' | 'success' | 'warning' | 'error';
};

const colorMap = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
};

export const Progress = ({ value, color = 'primary' }: ProgressProps) => {
    return (
        <div className="w-full h-2 rounded-full bg-muted">
            <div
                className={classNames('h-full transition-all duration-300', colorMap[color])}
                style={{ width: `${value}%` }}
            />
        </div>
    );
};
