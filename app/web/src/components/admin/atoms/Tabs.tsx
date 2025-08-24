'use client';

import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

export const Tabs = RadixTabs.Root;

export const TabsList = React.forwardRef<
    React.ElementRef<typeof RadixTabs.List>,
    React.ComponentPropsWithoutRef<typeof RadixTabs.List>
>(({ className, ...props }, ref) => (
    <RadixTabs.List
        ref={ref}
        className={clsx(
            'inline-flex items-center justify-center rounded-md bg-muted p-1',
            className,
        )}
        {...props}
    />
));
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof RadixTabs.Trigger>,
    React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>
>(({ className, ...props }, ref) => (
    <RadixTabs.Trigger
        ref={ref}
        className={clsx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-card data-[state=active]:text-primary',
            className,
        )}
        {...props}
    />
));
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
    React.ElementRef<typeof RadixTabs.Content>,
    React.ComponentPropsWithoutRef<typeof RadixTabs.Content>
>(({ className, ...props }, ref) => (
    <RadixTabs.Content
        ref={ref}
        className={clsx('mt-2 rounded-md border bg-card text-foreground p-4', className)}
        {...props}
    />
));
TabsContent.displayName = 'TabsContent';
