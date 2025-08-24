'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '@/schemas/loginSchema';
// import { loginAction } from '@/app/login/actions/login.action';
import { FormFooter } from '@/components/admin/molecules/FormFooter';
import { FormContainer } from '@/components/admin/atoms/FormContainer';
import { AuthNotice } from '@/components/admin/atoms/AuthNotice';
import { EmailInput } from '@/components/admin/atoms/EmailInput';
import { PasswordInput } from '@/components/admin/atoms/PasswordInput';
import { Button } from '@/components/admin/atoms/Button';
import { Notification } from '@/components/admin/atoms/Notification';
import { useSessionStore } from '@/modules/login/presentation/stores/useSessionStore';

export const LoginForm = () => {
    const [loginError, setLoginError] = useState<string | null>(null);
    const { setToken } = useSessionStore();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const email = watch('email');
    const password = watch('password');

    const onSubmit = async (data: LoginSchema) => {
        setLoginError(null);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: data.email, password: data.password }),
            });

            if (!res.ok) {
                setLoginError('Correo o contraseña incorrectos. Intenta nuevamente.');
                return;
            }

            const result = await res.json();
            setToken(result.accessToken);
            router.push('/');
        } catch {
            setLoginError('Correo o contraseña incorrectos. Intenta nuevamente.');
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <AuthNotice />

            {loginError && <Notification type="error" message={loginError} />}

            <EmailInput
                value={email}
                onChange={(value) => setValue('email', value)}
                inputProps={register('email')}
                error={errors.email?.message}
            />

            <PasswordInput
                value={password}
                onChange={(value) => setValue('password', value)}
                inputProps={register('password')}
                error={errors.password?.message}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                Iniciar Sesión
            </Button>

            <FormFooter align="center">
                <p className="text-sm text-muted-foreground">
                    Inicia sesión con tu correo y contraseña corporativa.
                </p>
            </FormFooter>
        </FormContainer>
    );
};
