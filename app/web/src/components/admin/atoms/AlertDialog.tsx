'use client';

import * as React from 'react';
import * as RadixAlert from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';

export const AlertDialog = RadixAlert.Root;
export const AlertDialogTrigger = RadixAlert.Trigger;
export const AlertDialogPortal = RadixAlert.Portal;

export const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Overlay>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Overlay>
>(({ className, ...props }, ref) => (
    <RadixAlert.Overlay
        ref={ref}
        className={clsx('fixed inset-0 z-50 bg-black/50 backdrop-blur-sm', className)}
        {...props}
    />
));
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

export const AlertDialogContent = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Content>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Content>
>(({ className, ...props }, ref) => (
    <RadixAlert.Portal>
        <AlertDialogOverlay />
        <RadixAlert.Content
            ref={ref}
            className={clsx(
                'fixed z-50 left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-card text-foreground p-6 shadow-lg',
                className,
            )}
            {...props}
        />
    </RadixAlert.Portal>
));
AlertDialogContent.displayName = 'AlertDialogContent';

export const AlertDialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => <div className={clsx('mb-4', className)} {...props} />;

export const AlertDialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={clsx('mt-4 flex justify-end gap-2', className)} {...props} />
);

export const AlertDialogTitle = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Title>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Title>
>((props, ref) => (
    <RadixAlert.Title ref={ref} className="text-lg font-medium text-foreground" {...props} />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

export const AlertDialogDescription = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Description>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Description>
>((props, ref) => (
    <RadixAlert.Description ref={ref} className="text-sm text-muted-foreground" {...props} />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

export const AlertDialogCancel = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Cancel>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Cancel>
>(({ className, ...props }, ref) => (
    <RadixAlert.Cancel
        ref={ref}
        className={clsx(
            'px-4 py-2 rounded bg-secondary text-secondary-foreground hover:bg-secondary/80',
            className,
        )}
        {...props}
    />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

export const AlertDialogAction = React.forwardRef<
    React.ElementRef<typeof RadixAlert.Action>,
    React.ComponentPropsWithoutRef<typeof RadixAlert.Action>
>(({ className, ...props }, ref) => (
    <RadixAlert.Action
        ref={ref}
        className={clsx(
            'px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary-600',
            className,
        )}
        {...props}
    />
));
AlertDialogAction.displayName = 'AlertDialogAction';
