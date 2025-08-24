'use server';

import { NextResponse } from 'next/server';
import { LoginWithCredentials } from '@/modules/login/application/use-cases/LoginWithCredentials';
import { LoginService } from '@/modules/login/infrastructure/services/LoginService';
import type { LoginResponse } from '@/modules/login/domain/entities/LoginResponse';

export async function loginAction(email: string, password: string): Promise<LoginResponse> {
    const useCase = new LoginWithCredentials(new LoginService());
    const result = await useCase.execute(email, password);

    const response = NextResponse.json(result);

    response.cookies.set('auth_token', result.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
    });

    return result;
}
