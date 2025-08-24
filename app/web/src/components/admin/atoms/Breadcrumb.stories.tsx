import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Home, Folder, File } from 'lucide-react';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Admin/Atoms/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const WithIcons: Story = {
    render: () => (
        <Breadcrumb
            items={[
                { label: 'Home', href: '/', icon: <Home className="h-4 w-4" />, isCurrent: false },
                {
                    label: 'Projects',
                    href: '/projects',
                    icon: <Folder className="h-4 w-4" />,
                    isCurrent: false,
                },
                { label: 'Project X', icon: <File className="h-4 w-4" />, isCurrent: true },
            ]}
        />
    ),
};

export const WithoutIcons: Story = {
    render: () => (
        <Breadcrumb
            items={[
                { label: 'Home', href: '/', isCurrent: false },
                { label: 'Projects', href: '/projects', isCurrent: false },
                { label: 'Project X', isCurrent: true },
            ]}
        />
    ),
};

export const Mixed: Story = {
    render: () => (
        <Breadcrumb
            items={[
                { label: 'Home', href: '/', icon: <Home className="h-4 w-4" />, isCurrent: false },
                { label: 'Projects', href: '/projects', isCurrent: false },
                { label: 'Project X', icon: <File className="h-4 w-4" />, isCurrent: true },
            ]}
        />
    ),
};
