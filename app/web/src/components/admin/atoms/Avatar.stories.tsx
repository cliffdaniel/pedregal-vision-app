import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Admin/Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;

export const WithImage: StoryObj<typeof Avatar> = {
    args: {
        src: 'https://i.pravatar.cc/150?img=3',
        name: 'María López',
        alt: 'María',
        size: 'md',
    },
};

export const FallbackInitial: StoryObj<typeof Avatar> = {
    args: {
        name: 'Carlos Ruiz',
        size: 'lg',
    },
};

export const SmallNoName: StoryObj<typeof Avatar> = {
    args: {
        size: 'sm',
    },
};
