import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import React, { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
    title: 'Admin/Atoms/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerStoryComponent = () => {
    const [date, setDate] = useState<Date | undefined>();
    return <DatePicker date={date} onChange={setDate} />;
};

export const Default: Story = {
    render: () => <DatePickerStoryComponent />,
};
