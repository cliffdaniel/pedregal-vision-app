import { Meta, StoryObj } from '@storybook/react';
import { SidebarToggle } from './SidebarToggle';
import { useState } from 'react';

const meta: Meta<typeof SidebarToggle> = {
    title: 'Admin/Molecules/SidebarToggle',
    component: SidebarToggle,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarToggle>;

export const Default: Story = {
    render: function SidebarToggleExample() {
        const [collapsed, setCollapsed] = useState<boolean>(false);

        return (
            <div className="p-4 border rounded-md w-fit">
                <SidebarToggle collapsed={collapsed} onToggle={setCollapsed} />
                <p className="text-sm mt-2">Collapsed: {collapsed ? 'Yes' : 'No'}</p>
            </div>
        );
    },
};
