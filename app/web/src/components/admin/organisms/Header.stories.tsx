import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    title: 'Admin/Organisms/Header',
    component: Header,
    tags: ['autodocs'],
    args: {
        user: {
            name: 'Daniel Arenas',
            email: 'daniel@example.com',
            avatarUrl: 'https://i.pravatar.cc/150?u=daniel',
        },
        onProfile: () => alert('Ir al perfil'),
        onChangePassword: () => alert('Cambiar contraseña'),
        onLogout: () => alert('Cerrar sesión'),
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {},
};
