'use client';

import { ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return <main className="flex-1 overflow-y-auto px-6 py-4 bg-muted/40">{children}</main>;
};
