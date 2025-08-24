import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'Admin/Atoms/Slider',
    component: Slider,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
    },
};
