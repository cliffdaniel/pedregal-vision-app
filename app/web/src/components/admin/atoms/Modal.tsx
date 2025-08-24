'use client';

import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

export const Modal = RadixDialog.Root;
export const ModalTrigger = RadixDialog.Trigger;
export const ModalClose = RadixDialog.Close;

export const ModalOverlay = React.forwardRef<
    React.ElementRef<typeof RadixDialog.Overlay>,
    React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay>
>(({ className, ...props }, ref) => {
    return (
        <RadixDialog.Overlay
            ref={ref}
            className={clsx('fixed inset-0 z-50 bg-black/50 backdrop-blur-sm', className)}
            {...props}
        />
    );
});

ModalOverlay.displayName = 'ModalOverlay';

export const ModalContent = React.forwardRef<
    React.ElementRef<typeof RadixDialog.Content>,
    React.ComponentPropsWithoutRef<typeof RadixDialog.Content>
>(({ className, children, ...props }, ref) => {
    return (
        <RadixDialog.Portal>
            <ModalOverlay />
            <RadixDialog.Content
                ref={ref}
                className={clsx(
                    'fixed z-50 left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-card text-foreground p-6 shadow-lg',
                    className,
                )}
                {...props}
            >
                {children}
            </RadixDialog.Content>
        </RadixDialog.Portal>
    );
});

ModalContent.displayName = 'ModalContent';

export const ModalTitle = RadixDialog.Title;
export const ModalDescription = RadixDialog.Description;
