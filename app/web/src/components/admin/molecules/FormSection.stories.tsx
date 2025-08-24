import { Meta, StoryObj } from '@storybook/react';
import { FormSection } from './FormSection';
import { FormField } from './FormField';
import { useState } from 'react';

const meta: Meta<typeof FormSection> = {
    title: 'Admin/Molecules/FormSection',
    component: FormSection,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormSection>;

export const Default: Story = {
    render: function FormSectionStory() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        return (
            <FormSection
                title="User Information"
                description="Provide name and email for identification"
            >
                <FormField
                    id="name"
                    label="Full Name"
                    type="text"
                    value={name}
                    onChange={setName}
                    required
                />
                <FormField
                    id="email"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={setEmail}
                    required
                />
            </FormSection>
        );
    },
};
