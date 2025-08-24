import { Meta, StoryObj } from '@storybook/react';
import { SidebarHeader } from './SidebarHeader';
import { Shield } from 'lucide-react';

const meta: Meta<typeof SidebarHeader> = {
    title: 'Admin/Molecules/SidebarHeader',
    component: SidebarHeader,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarHeader>;

export const WithTitle: Story = {
    args: {
        title: 'PE - CencoPayroll',
    },
};

export const WithLogo: Story = {
    args: {
        title: 'PE - CencoPayroll',
        logo: <Shield className="h-6 w-6 text-primary" />,
    },
};
