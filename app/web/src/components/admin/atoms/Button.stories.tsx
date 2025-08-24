import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Admin/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Default',
        variant: 'default',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        size: 'lg',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'Add Item',
        icon: <Plus className="h-4 w-4" />,
    },
};

export const Loading: Story = {
    args: {
        children: 'Deleting...',
        loading: true,
    },
};

export const IconOnly: Story = {
    args: {
        icon: <Trash2 className="h-4 w-4" />,
        children: '',
        'aria-label': 'Delete',
    },
};
