import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
    title: 'Admin/Atoms/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Mango', value: 'mango' },
    { label: 'Pineapple', value: 'pineapple' },
];

const SingleSelectStory = () => {
    const [value, setValue] = useState<string | undefined>();
    const handleChange = (val: string | string[]) => {
        if (typeof val === 'string') setValue(val);
    };

    return (
        <Select
            options={options}
            value={value}
            onChange={handleChange}
            placeholder="Select a fruit"
            searchable={true}
        />
    );
};

const MultipleSelectStory = () => {
    const [value, setValue] = useState<string[]>([]);
    const handleChange = (val: string | string[]) => {
        if (Array.isArray(val)) setValue(val);
    };

    return (
        <Select
            multiple
            options={options}
            value={value}
            onChange={handleChange}
            placeholder="Select fruits"
            searchable={true}
        />
    );
};

const WithoutSearchStory = () => {
    const [value, setValue] = useState<string | undefined>();
    const handleChange = (val: string | string[]) => {
        if (typeof val === 'string') setValue(val);
    };

    return (
        <Select
            options={options}
            value={value}
            onChange={handleChange}
            placeholder="Select without search"
            searchable={false}
        />
    );
};

export const Single: Story = {
    render: () => <SingleSelectStory />,
};

export const Multiple: Story = {
    render: () => <MultipleSelectStory />,
};

export const WithoutSearch: Story = {
    render: () => <WithoutSearchStory />,
};
