import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
    title: 'Admin/Atoms/Combobox',
    component: Combobox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const ComboboxDemo = () => {
    const [value, setValue] = useState('');
    const items = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
    ];

    return (
        <div className="w-64">
            <Combobox
                value={value}
                onValueChange={setValue}
                placeholder="Select a fruit"
                items={items}
            />
        </div>
    );
};

export const Default: Story = {
    render: () => <ComboboxDemo />,
};
