'use client';

import { Loader2 } from 'lucide-react';

export const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full py-10">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
    );
};
