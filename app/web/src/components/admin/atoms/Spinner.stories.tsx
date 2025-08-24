import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Admin/Atoms/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'select',
            options: ['primary', 'success', 'error', 'warning', 'info'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
    args: {
        size: 'md',
        color: 'primary',
    },
};

export const Success: Story = {
    args: {
        size: 'md',
        color: 'success',
    },
};

export const Error: Story = {
    args: {
        size: 'md',
        color: 'error',
    },
};

export const Warning: Story = {
    args: {
        size: 'md',
        color: 'warning',
    },
};

export const Info: Story = {
    args: {
        size: 'md',
        color: 'info',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        color: 'primary',
    },
};
