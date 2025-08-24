import { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

const meta: Meta<typeof SearchBar> = {
    title: 'Admin/Molecules/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    render: function SearchBarStory() {
        const [query, setQuery] = useState('');

        return (
            <div className="max-w-md">
                <SearchBar
                    value={query}
                    onChange={setQuery}
                    onSubmit={() => alert(`Searching for: ${query}`)}
                />
            </div>
        );
    },
};
