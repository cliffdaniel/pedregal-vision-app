import { Meta, StoryObj } from '@storybook/react';
import { SidebarGroup } from './SidebarGroup';
import { SidebarItem } from './SidebarItem';
import { Home, Settings, Users } from 'lucide-react';

const meta: Meta<typeof SidebarGroup> = {
    title: 'Admin/Molecules/SidebarGroup',
    component: SidebarGroup,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarGroup>;

export const WithTitle: Story = {
    render: () => (
        <SidebarGroup title="Management">
            <SidebarItem icon={<Users className="h-4 w-4" />} label="Users" href="#" />
            <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" href="#" />
        </SidebarGroup>
    ),
};

export const WithoutTitle: Story = {
    render: () => (
        <SidebarGroup>
            <SidebarItem icon={<Home className="h-4 w-4" />} label="Home" href="#" />
        </SidebarGroup>
    ),
};
