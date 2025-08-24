import { Meta, StoryObj } from '@storybook/react';
import { FormRow } from './FormRow';
import { FormField } from './FormField';
import { useState } from 'react';

const meta: Meta<typeof FormRow> = {
    title: 'Admin/Molecules/FormRow',
    component: FormRow,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormRow>;

export const Default: Story = {
    render: function FormRowStory() {
        const [start, setStart] = useState('');
        const [end, setEnd] = useState('');
        const [status, setStatus] = useState('');

        return (
            <FormRow>
                <FormField
                    id="start"
                    label="Start Date"
                    type="text"
                    value={start}
                    onChange={setStart}
                />
                <FormField id="end" label="End Date" type="text" value={end} onChange={setEnd} />
                <FormField
                    id="status"
                    label="Status"
                    type="select"
                    value={status}
                    onChange={(v) => {
                        if (typeof v === 'string') setStatus(v);
                    }}
                    options={[
                        { label: 'Open', value: 'open' },
                        { label: 'Closed', value: 'closed' },
                    ]}
                />
            </FormRow>
        );
    },
};
