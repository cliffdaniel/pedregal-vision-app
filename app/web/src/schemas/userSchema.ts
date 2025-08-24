import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    role: z.enum(['admin', 'editor', 'viewer'], {
        required_error: 'Role is required',
    }),
    status: z.enum(['active', 'inactive'], {
        required_error: 'Status is required',
    }),
});

export type UserFormData = z.infer<typeof userSchema>;
