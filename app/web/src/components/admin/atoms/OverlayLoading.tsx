'use client';

import { Loader2 } from 'lucide-react';

export const OverlayLoading = () => (
    <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
);
