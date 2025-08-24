import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    title: 'Admin/Atoms/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'p', 'small', 'muted'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
    args: {
        children: 'This is a Heading 1',
        variant: 'h1',
    },
};

export const Heading2: Story = {
    args: {
        children: 'This is a Heading 2',
        variant: 'h2',
    },
};

export const Paragraph: Story = {
    args: {
        children: 'This is a paragraph.',
        variant: 'p',
    },
};

export const Small: Story = {
    args: {
        children: 'This is small text.',
        variant: 'small',
    },
};

export const Muted: Story = {
    args: {
        children: 'This is muted text.',
        variant: 'muted',
    },
};
