'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    getToastStyles,
    ToastClose,
} from '@/components/admin/atoms/Toast';
import { useToastStore } from '@/lib/stores/toastStore';
import { HeartPulse, LogOut } from 'lucide-react';
import { getAccessToken } from '@/utils/auth';
import { jwtDecode } from 'jwt-decode';
import { UserProfile } from './types';
import { BreadcrumbWrapper } from './BreadcrumbWrapper';

export const AdminLayout = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(null);

    const { message, status, visible, hide } = useToastStore();
    const { icon, className } = getToastStyles(status);

    useEffect(() => {
        const token = getAccessToken();

        if (token) {
            try {
                const decoded: { sub: string; email: string; roles: string[] } = jwtDecode(token);

                const profile: UserProfile = {
                    name: decoded.email.split('@')[0],
                    email: decoded.email,
                    avatarUrl: 'https://ui.shadcn.com/avatars/01.png',
                    role: decoded.roles?.[0] ?? 'Invitado',
                    department: 'TI',
                    startDate: '2021-01-01',
                    employeeId: decoded.sub,
                    stats: [
                        { label: 'Vacaciones', value: 15, icon: '🏖️' },
                        { label: 'Médicos', value: 3, icon: '🏥' },
                        { label: 'Cafés/día', value: 4, icon: '☕' },
                    ],
                };

                setUser(profile);
            } catch {
                setUser(null);
            }
        }
    }, []);

    const handleProfile = () => console.log('Profile clicked');
    const handleChangePassword = () => console.log('Change Password clicked');
    const handleLogout = () => console.log('Logout clicked');

    const sidebarGroups = [
        {
            title: 'Menú Principal',
            items: [
                {
                    icon: <HeartPulse className="h-4 w-4" />,
                    label: 'Descanso médico',
                    items: [
                        { label: 'Descansos', href: '/medical-leave' },
                        { label: 'Registrar', href: '/medical-leave/add' },
                    ],
                },
            ],
        },
    ];

    const footerItems = [
        {
            icon: <LogOut className="h-4 w-4" />,
            label: 'Logout',
            onClick: handleLogout,
        },
    ];

    if (!user) return null;

    return (
        <ToastProvider>
            <div className="flex h-screen">
                <Sidebar groups={sidebarGroups} footerItems={footerItems} profile={user} />

                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header
                        user={user}
                        onProfile={handleProfile}
                        onChangePassword={handleChangePassword}
                        onLogout={handleLogout}
                    />

                    <Main>
                        <BreadcrumbWrapper />
                        <div className="p-6">{children}</div>
                    </Main>
                </div>
            </div>

            <ToastViewport position="top-right" />

            {visible && (
                <Toast open={visible} onOpenChange={hide} className={className}>
                    <div className="flex items-center gap-3 px-4 py-3">
                        {icon}
                        <ToastTitle className="text-sm font-medium">{message}</ToastTitle>
                        <ToastClose className="ml-auto text-white hover:opacity-70">✕</ToastClose>
                    </div>
                </Toast>
            )}
        </ToastProvider>
    );
};
