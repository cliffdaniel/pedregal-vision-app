import { useState } from 'react';
import { loginAction } from '@/app/login/actions/login.action';
import { LoginResponse } from '@/modules/login/domain/entities/LoginResponse';

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<LoginResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const result = await loginAction(email, password);
            return result;
        } catch {
            setError('Credenciales inválidas');
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};
