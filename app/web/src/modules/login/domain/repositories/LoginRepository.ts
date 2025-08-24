import { LoginResponse } from '../entities/LoginResponse';
import { Profile } from '../entities/Profile';

export interface LoginRepository {
    login(email: string, password: string): Promise<LoginResponse>;
    getUserProfile(): Promise<Profile>;
}
