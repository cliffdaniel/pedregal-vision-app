import type { NextAuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions: NextAuthOptions = {
    providers: [
        AzureADProvider({
            clientId: 'fake-client-id',
            clientSecret: 'fake-client-secret',
            tenantId: 'fake-tenant-id',
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async redirect({ baseUrl }: { baseUrl: string }) {
            return `${baseUrl}/admin/dashboard`;
        },
    },
    secret: 'fake-secret-key',
};
