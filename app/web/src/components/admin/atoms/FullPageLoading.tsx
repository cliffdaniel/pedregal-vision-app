'use client';

import { Loader2 } from 'lucide-react';

export const FullPageLoading = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[200px] py-10">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
    );
};
