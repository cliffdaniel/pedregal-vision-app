import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email({ message: 'Correo inválido' }),
    password: z.string().min(6, { message: 'La contraseña es obligatoria' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
