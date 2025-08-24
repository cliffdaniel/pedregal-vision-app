'use client';

import { useBreadcrumb } from '@/contexts/BreadcrumbContext';
import { Breadcrumb } from '@/components/admin/atoms/Breadcrumb';

export function BreadcrumbWrapper() {
    const { items } = useBreadcrumb();

    if (!items.length) return null;

    return (
        <div className="px-6 pt-6">
            <Breadcrumb items={items} />
        </div>
    );
}
