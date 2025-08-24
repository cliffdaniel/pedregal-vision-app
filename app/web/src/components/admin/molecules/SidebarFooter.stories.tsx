import { Meta, StoryObj } from '@storybook/react';
import { SidebarFooter } from './SidebarFooter';
import { SidebarItem } from './SidebarItem';
import { LogOut, Settings } from 'lucide-react';

const meta: Meta<typeof SidebarFooter> = {
    title: 'Admin/Molecules/SidebarFooter',
    component: SidebarFooter,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarFooter>;

export const Default: Story = {
    render: () => (
        <SidebarFooter>
            <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" href="#" />
            <SidebarItem
                icon={<LogOut className="h-4 w-4" />}
                label="Logout"
                onClick={() => alert('Logout')}
            />
        </SidebarFooter>
    ),
};
