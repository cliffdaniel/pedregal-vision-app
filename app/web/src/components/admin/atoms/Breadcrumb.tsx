'use client';

import { ChevronRight } from 'lucide-react';
import classNames from 'classnames';

type BreadcrumbItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isCurrent: boolean;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    className?: string;
};

export function Breadcrumb({ items, className }: Readonly<BreadcrumbProps>) {
    return (
        <nav className={classNames('flex items-center text-sm', className)}>
            <ol className="flex items-center gap-1 text-muted-foreground">
                {items.map((item) => {
                    const key = `${item.href ?? item.label}`;

                    return (
                        <li key={key} className="flex items-center gap-1">
                            <div
                                className={classNames(
                                    'flex items-center gap-1',
                                    item.isCurrent && 'text-foreground font-medium',
                                )}
                            >
                                {item.icon && (
                                    <span className="inline-flex h-4 w-4 items-center justify-center">
                                        {item.icon}
                                    </span>
                                )}
                                {item.href && !item.isCurrent ? (
                                    <a href={item.href} className="hover:underline">
                                        {item.label}
                                    </a>
                                ) : (
                                    <span>{item.label}</span>
                                )}
                            </div>
                            {!item.isCurrent && <ChevronRight className="h-4 w-4 opacity-50" />}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
