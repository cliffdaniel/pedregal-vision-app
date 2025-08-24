import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from './Button';
import { Inbox } from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
    title: 'Admin/Atoms/EmptyState',
    component: EmptyState,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
    render: () => (
        <EmptyState
            icon={<Inbox className="h-10 w-10 text-muted-foreground" />}
            title="No items found"
            description="You haven't added any data yet."
            action={<Button>Add New</Button>}
        />
    ),
};

export const WithoutAction: Story = {
    render: () => (
        <EmptyState
            icon={<Inbox className="h-10 w-10 text-muted-foreground" />}
            title="Empty"
            description="There's nothing here yet."
        />
    ),
};

export const Minimal: Story = {
    render: () => <EmptyState title="No Data" />,
};
