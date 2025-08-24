import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { Button } from './Button';
import { Settings, User, LogOut, Bell } from 'lucide-react';

const meta: Meta<typeof Menu> = {
    title: 'Admin/Atoms/Menu',
    component: Menu,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const WithIcons: Story = {
    render: () => (
        <Menu
            trigger={<Button>Open Menu</Button>}
            groups={[
                {
                    items: [
                        {
                            label: 'Profile',
                            value: 'profile',
                            icon: <User className="h-4 w-4" />,
                            onSelect: () => alert('Profile'),
                        },
                        {
                            label: 'Settings',
                            value: 'settings',
                            icon: <Settings className="h-4 w-4" />,
                            onSelect: () => alert('Settings'),
                        },
                        {
                            label: 'Logout',
                            value: 'logout',
                            icon: <LogOut className="h-4 w-4" />,
                            onSelect: () => alert('Logout'),
                        },
                    ],
                },
            ]}
        />
    ),
};

export const WithoutIcons: Story = {
    render: () => (
        <Menu
            trigger={<Button variant="outline">Menu Simple</Button>}
            groups={[
                {
                    items: [
                        { label: 'Dashboard', value: 'dashboard' },
                        { label: 'Reports', value: 'reports' },
                        { label: 'Billing', value: 'billing' },
                    ],
                },
            ]}
        />
    ),
};

export const Grouped: Story = {
    render: () => (
        <Menu
            trigger={<Button>Grouped Menu</Button>}
            groups={[
                {
                    label: 'Main',
                    items: [
                        {
                            label: 'Notifications',
                            value: 'notifications',
                            icon: <Bell className="h-4 w-4" />,
                        },
                        {
                            label: 'Account',
                            value: 'account',
                            icon: <User className="h-4 w-4" />,
                        },
                    ],
                },
                {
                    label: 'Settings',
                    items: [
                        {
                            label: 'Logout',
                            value: 'logout',
                            icon: <LogOut className="h-4 w-4" />,
                        },
                    ],
                },
            ]}
        />
    ),
};
