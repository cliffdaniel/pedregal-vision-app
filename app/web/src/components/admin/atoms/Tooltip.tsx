'use client';

import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export const TooltipProvider = RadixTooltip.Provider;
export const Tooltip = RadixTooltip.Root;
export const TooltipTrigger = RadixTooltip.Trigger;

export type TooltipVariants = 'info' | 'success' | 'warning' | 'error';

const variantMap: Record<TooltipVariants, { icon: React.ReactNode; bg: string }> = {
    info: {
        icon: <Info className="w-4 h-4 text-white" />,
        bg: 'bg-info text-white',
    },
    success: {
        icon: <CheckCircle2 className="w-4 h-4 text-white" />,
        bg: 'bg-success text-white',
    },
    warning: {
        icon: <AlertTriangle className="w-4 h-4 text-white" />,
        bg: 'bg-warning text-white',
    },
    error: {
        icon: <AlertCircle className="w-4 h-4 text-white" />,
        bg: 'bg-error text-white',
    },
};

export interface TooltipContentProps
    extends Omit<React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>, 'ref'> {
    variant?: TooltipVariants;
    delayDuration?: number;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
    ({ className, children, variant = 'info', side = 'top', align = 'center', ...props }, ref) => {
        const { icon, bg } = variantMap[variant];

        return (
            <RadixTooltip.Portal>
                <RadixTooltip.Content
                    ref={ref}
                    sideOffset={4}
                    side={side}
                    align={align}
                    className={clsx(
                        'z-50 max-w-xs rounded-md px-3 py-1.5 text-xs shadow-md animate-in fade-in-0 zoom-in-95 flex items-center gap-2',
                        bg,
                        className,
                    )}
                    {...props}
                >
                    {icon}
                    {children}
                </RadixTooltip.Content>
            </RadixTooltip.Portal>
        );
    },
);

TooltipContent.displayName = 'TooltipContent';
