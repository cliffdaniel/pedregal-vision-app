import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const meta: Meta<typeof DateRangePicker> = {
    title: 'Admin/Atoms/DateRangePicker',
    component: DateRangePicker,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const DateRangePickerStory = () => {
    const [range, setRange] = useState<DateRange | undefined>();

    return (
        <div style={{ width: 320 }}>
            <DateRangePicker range={range} onChange={setRange} placeholder="Select date range" />
        </div>
    );
};

export const Default: Story = {
    render: () => <DateRangePickerStory />,
};
