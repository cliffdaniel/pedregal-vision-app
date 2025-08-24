import { Meta, StoryObj } from '@storybook/react';
import { HeaderUserMenu } from './HeaderUserMenu';

const meta: Meta<typeof HeaderUserMenu> = {
    title: 'Admin/Molecules/HeaderUserMenu',
    component: HeaderUserMenu,
    tags: ['autodocs'],
    args: {
        user: {
            name: 'Daniel Arenas',
            email: 'daniel@example.com',
            avatarUrl: 'https://i.pravatar.cc/150',
        },
        onProfile: () => alert('Ir al perfil'),
        onChangePassword: () => alert('Cambiar contraseña'),
        onLogout: () => alert('Cerrar sesión'),
    },
};

export default meta;

type Story = StoryObj<typeof HeaderUserMenu>;

export const Default: Story = {
    args: {},
};
