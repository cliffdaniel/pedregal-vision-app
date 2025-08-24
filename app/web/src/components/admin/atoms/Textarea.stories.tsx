import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Admin/Atoms/Textarea',
    component: Textarea,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        placeholder: 'Write something...',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled textarea',
        disabled: true,
    },
};
