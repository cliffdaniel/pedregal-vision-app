import type { Meta, StoryObj } from '@storybook/react';
import { AuthNotice } from './AuthNotice';

const meta: Meta<typeof AuthNotice> = {
    title: 'admin/Atoms/AuthNotice',
    component: AuthNotice,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthNotice>;

export const Default: Story = {};
