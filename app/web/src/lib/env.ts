import { z } from 'zod';

const envSchema = z.object({
    AZURE_AD_CLIENT_ID: z.string().min(1),
    AZURE_AD_CLIENT_SECRET: z.string().min(1),
    AZURE_AD_TENANT_ID: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url(),
});

export const env = envSchema.parse({
    AZURE_AD_CLIENT_ID: 'fake-client-id',
    AZURE_AD_CLIENT_SECRET: 'fake-client-secret',
    AZURE_AD_TENANT_ID: 'fake-tenant-id',
    NEXTAUTH_SECRET: 'fake-secret-key',
    NEXTAUTH_URL: 'http://localhost:3000',
});
