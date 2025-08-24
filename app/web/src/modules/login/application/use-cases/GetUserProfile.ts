import { LoginRepository } from '@/modules/login/domain/repositories/LoginRepository';
import { Profile } from '@/modules/login/domain/entities/Profile';

export class GetUserProfile {
    constructor(private readonly loginRepository: LoginRepository) {}

    async execute(): Promise<Profile> {
        return this.loginRepository.getUserProfile();
    }
}
