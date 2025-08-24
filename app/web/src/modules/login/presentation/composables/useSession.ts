'use client';

import { useEffect, useState } from 'react';
import { GetUserProfile } from '@/modules/login/application/use-cases/GetUserProfile';
import { LoginService } from '@/modules/login/infrastructure/services/LoginService';
import { Profile } from '@/modules/login/domain/entities/Profile';

export const useSession = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const useCase = new GetUserProfile(new LoginService());
                const data = await useCase.execute();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setProfile(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { profile, loading };
};
