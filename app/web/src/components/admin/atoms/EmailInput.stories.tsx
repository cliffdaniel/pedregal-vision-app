import type { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from './EmailInput';
import { useState } from 'react';

const EmailInputWithState = () => {
    const [email, setEmail] = useState('');
    return <EmailInput value={email} onChange={setEmail} />;
};

const meta: Meta<typeof EmailInput> = {
    title: 'admin/Atoms/EmailInput',
    component: EmailInput,
    tags: ['autodocs'],
    render: () => <EmailInputWithState />,
};

export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {};
