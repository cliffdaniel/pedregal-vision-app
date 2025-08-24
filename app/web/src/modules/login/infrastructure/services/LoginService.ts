import type { LoginRepository } from '@/modules/login/domain/repositories/LoginRepository';
import type { LoginResponse } from '@/modules/login/domain/entities/LoginResponse';
import type { Profile } from '@/modules/login/domain/entities/Profile';
import { api } from '@/modules/shared/http/api';

export class LoginService implements LoginRepository {
    async login(email: string, password: string): Promise<LoginResponse> {
        return api.post<LoginResponse, { email: string; password: string }>('/auth/login', {
            email,
            password,
        });
    }

    async getUserProfile(): Promise<Profile> {
        return api.get<Profile>('/auth/profile');
    }
}
