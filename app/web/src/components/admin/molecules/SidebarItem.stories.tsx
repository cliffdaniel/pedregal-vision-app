import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import { Home, Settings, Calendar } from 'lucide-react';

const meta: Meta<typeof SidebarItem> = {
    title: 'Admin/Molecules/SidebarItem',
    component: SidebarItem,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
    args: {
        icon: <Home className="h-4 w-4" />,
        label: 'Dashboard',
        href: '#',
    },
};

export const Active: Story = {
    args: {
        icon: <Home className="h-4 w-4" />,
        label: 'Dashboard',
        href: '#',
        active: true,
    },
};

export const WithClick: Story = {
    args: {
        icon: <Settings className="h-4 w-4" />,
        label: 'Settings',
        onClick: () => alert('Clicked!'),
    },
};

export const WithSubItems: Story = {
    args: {
        icon: <Calendar className="h-4 w-4" />,
        label: 'Vacaciones',
        items: [
            { label: 'Solicitar', href: '#solicitar' },
            { label: 'Historial', href: '#historial' },
            { label: 'Políticas', href: '#politicas' },
        ],
    },
};
