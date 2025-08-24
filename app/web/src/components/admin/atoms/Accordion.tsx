'use client';

import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

export const Accordion = RadixAccordion.Root;

export const AccordionItem = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Item>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
    <RadixAccordion.Item ref={ref} className={clsx('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Trigger>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
    <RadixAccordion.Header>
        <RadixAccordion.Trigger
            ref={ref}
            className={clsx(
                'group flex w-full items-center justify-between py-4 font-medium transition-all hover:underline',
                className,
            )}
            {...props}
        >
            {children}
            <ChevronDownIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </RadixAccordion.Trigger>
    </RadixAccordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<
    React.ElementRef<typeof RadixAccordion.Content>,
    React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, ...props }, ref) => (
    <RadixAccordion.Content
        ref={ref}
        className={clsx('pb-4 pt-0 text-sm text-muted-foreground', className)}
        {...props}
    />
));
AccordionContent.displayName = 'AccordionContent';
