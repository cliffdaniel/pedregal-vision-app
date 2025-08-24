import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
    title: 'admin/Atoms/Separator',
    component: Separator,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
    render: () => (
        <div className="space-y-4">
            <div>Texto arriba</div>
            <Separator />
            <div>Texto abajo</div>
        </div>
    ),
};
