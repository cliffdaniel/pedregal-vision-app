import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Admin/Atoms/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Type something...',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        disabled: true,
    },
};

export const WithPrepend: Story = {
    args: {
        placeholder: 'With prepend',
        prepend: '@',
    },
};

export const WithAppend: Story = {
    args: {
        placeholder: 'With append',
        append: '.com',
    },
};

export const WithPrependAndAppend: Story = {
    args: {
        placeholder: 'username',
        prepend: 'https://',
        append: '.dev',
    },
};
