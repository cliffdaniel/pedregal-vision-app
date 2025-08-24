'use client';

import * as React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import {
    CheckCircledIcon,
    InfoCircledIcon,
    ExclamationTriangleIcon,
    CrossCircledIcon,
} from '@radix-ui/react-icons';
import clsx from 'clsx';

export const ToastProvider = RadixToast.Provider;

type ToastViewportProps = React.ComponentPropsWithoutRef<typeof RadixToast.Viewport> & {
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
};

export const ToastViewport = React.forwardRef<
    React.ComponentRef<typeof RadixToast.Viewport>,
    ToastViewportProps
>(({ className, position = 'top-right', ...props }, ref) => {
    const positions: Record<string, string> = {
        'top-left': 'top-4 left-4',
        'top-center': 'top-4 left-1/2 -translate-x-1/2',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-4 right-4',
    };

    return (
        <RadixToast.Viewport
            ref={ref}
            className={clsx(
                'fixed z-50 w-96 max-w-full outline-none',
                positions[position],
                className,
            )}
            {...props}
        />
    );
});
ToastViewport.displayName = 'ToastViewport';

export const Toast = RadixToast.Root;
export const ToastTitle = RadixToast.Title;
export const ToastDescription = RadixToast.Description;
export const ToastAction = RadixToast.Action;
export const ToastClose = RadixToast.Close;

type ToastStatus = 'success' | 'info' | 'warning' | 'error';

export const getToastStyles = (status: ToastStatus) => {
    switch (status) {
        case 'success':
            return {
                icon: <CheckCircledIcon className="h-5 w-5 text-white" />,
                className: 'bg-success text-white',
            };
        case 'info':
            return {
                icon: <InfoCircledIcon className="h-5 w-5 text-white" />,
                className: 'bg-info text-white',
            };
        case 'warning':
            return {
                icon: <ExclamationTriangleIcon className="h-5 w-5 text-white" />,
                className: 'bg-warning text-white',
            };
        case 'error':
            return {
                icon: <CrossCircledIcon className="h-5 w-5 text-white" />,
                className: 'bg-error text-white',
            };
    }
};
