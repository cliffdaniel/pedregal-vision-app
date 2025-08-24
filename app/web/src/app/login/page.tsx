'use client';

import { Suspense } from 'react';
import { LoginPageClient } from '@/modules/login/presentation/LoginPageClient';

export default function LoginPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginPageClient />
        </Suspense>
    );
}
