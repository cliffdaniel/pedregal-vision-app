import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
    title: 'Admin/Atoms/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'error'],
        },
    },
};

export default meta;

export const Default: StoryObj<typeof Progress> = {
    args: {
        value: 45,
        color: 'primary',
    },
};

export const Success: StoryObj<typeof Progress> = {
    args: {
        value: 80,
        color: 'success',
    },
};

export const Warning: StoryObj<typeof Progress> = {
    args: {
        value: 60,
        color: 'warning',
    },
};

export const Error: StoryObj<typeof Progress> = {
    args: {
        value: 30,
        color: 'error',
    },
};
