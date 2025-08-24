'use client';

import { HeaderUserMenu } from '@/components/admin/molecules/HeaderUserMenu';

type HeaderProps = {
    user: {
        name: string;
        email: string;
        avatarUrl?: string;
    };
    onProfile: () => void;
    onChangePassword: () => void;
    onLogout: () => void;
};

export const Header = ({ user, onProfile, onChangePassword, onLogout }: HeaderProps) => {
    return (
        <header className="flex items-center h-16 px-6 bg-background text-foreground shadow-sm">
            <div className="ml-auto flex items-center gap-3">
                <div className="flex flex-col items-end">
                    <span className="text-sm font-medium leading-none">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                </div>
                <HeaderUserMenu
                    user={user}
                    onProfile={onProfile}
                    onChangePassword={onChangePassword}
                    onLogout={onLogout}
                />
            </div>
        </header>
    );
};
