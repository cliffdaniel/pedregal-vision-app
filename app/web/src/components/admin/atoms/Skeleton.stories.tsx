import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Admin/Atoms/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
        rounded: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'full'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        width: '100%',
        height: '1rem',
        rounded: 'md',
    },
};

export const Avatar: Story = {
    args: {
        width: 48,
        height: 48,
        rounded: 'full',
    },
};

export const Line: Story = {
    args: {
        width: '60%',
        height: '0.75rem',
        rounded: 'sm',
    },
};
