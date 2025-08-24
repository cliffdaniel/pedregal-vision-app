import { LoginRepository } from '@/modules/login/domain/repositories/LoginRepository';
import { LoginResponse } from '@/modules/login/domain/entities/LoginResponse';

export class LoginWithCredentials {
    constructor(private readonly repository: LoginRepository) {}

    execute(email: string, password: string): Promise<LoginResponse> {
        return this.repository.login(email, password);
    }
}
