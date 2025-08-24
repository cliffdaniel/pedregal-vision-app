'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { HeartPulse, LogOut } from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
    title: 'Admin/Organisms/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const profile = {
    name: 'Daniel Arenas',
    email: 'daniel@example.com',
    avatarUrl: 'https://i.pravatar.cc/40?img=1',
    role: 'Frontend Developer',
    department: 'Engineering',
    startDate: '2023-01-01',
    employeeId: 'EMP-001',
    stats: [
        {
            label: 'Días libres',
            value: 3,
            icon: 'Plane',
        },
        {
            label: 'Vacaciones usadas',
            value: 10,
            icon: 'Stethoscope',
        },
        {
            label: 'Descansos médicos',
            value: 2,
            icon: 'HeartPulse',
        },
    ],
};

export const Default: Story = {
    render: () => (
        <Sidebar
            profile={profile}
            groups={[
                {
                    title: 'Menú Principal',
                    items: [
                        {
                            icon: <HeartPulse className="h-4 w-4" />,
                            label: 'Descanso médico',
                            items: [
                                { label: 'Descansos', href: '/medical-leave' },
                                { label: 'Registrar', href: '/descanso-medico/registrar' },
                                { label: 'Documentos', href: '/descanso-medico/documentos' },
                                { label: 'Historial', href: '/descanso-medico/historial' },
                            ],
                        },
                    ],
                },
            ]}
            footerItems={[
                {
                    icon: <LogOut className="h-4 w-4" />,
                    label: 'Cerrar sesión',
                    onClick: () => alert('Cerrando sesión...'),
                },
            ]}
        />
    ),
};
