import { NextRequest, NextResponse } from 'next/server';
import { LoginWithCredentials } from '@/modules/login/application/use-cases/LoginWithCredentials';
import { LoginService } from '@/modules/login/infrastructure/services/LoginService';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const useCase = new LoginWithCredentials(new LoginService());

    try {
        const result = await useCase.execute(email, password);
        const response = NextResponse.json(result, { status: 200 });

        response.cookies.set('auth_token', result.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24,
        });

        return response;
    } catch {
        return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }
}
