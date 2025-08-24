import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
    title: 'Admin/Atoms/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="option-1">
            <RadioGroupItem value="option-1" label="Option 1" />
            <RadioGroupItem value="option-2" label="Option 2" />
            <RadioGroupItem value="option-3" label="Option 3" />
        </RadioGroup>
    ),
};
