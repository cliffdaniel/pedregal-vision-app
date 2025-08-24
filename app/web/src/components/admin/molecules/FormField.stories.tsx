import { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { useState } from 'react';

const meta: Meta<typeof FormField> = {
    title: 'Admin/Molecules/FormField',
    component: FormField,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Text: Story = {
    render: function TextField() {
        const [value, setValue] = useState('');
        return (
            <FormField
                id="name"
                label="Name"
                type="text"
                value={value}
                onChange={(v) => setValue(v)}
                required
                labelPosition="top"
            />
        );
    },
};

export const Textarea: Story = {
    render: function TextareaField() {
        const [value, setValue] = useState('');
        return (
            <FormField
                id="description"
                label="Description"
                type="textarea"
                value={value}
                onChange={(v) => setValue(v)}
                labelPosition="top"
            />
        );
    },
};

export const SelectSingle: Story = {
    render: function SelectSingleField() {
        const [value, setValue] = useState<string>('');
        return (
            <FormField
                id="country"
                label="Country"
                type="select"
                value={value}
                onChange={(v) => {
                    if (typeof v === 'string') setValue(v);
                }}
                options={[
                    { label: 'USA', value: 'us' },
                    { label: 'Peru', value: 'pe' },
                ]}
                labelPosition="top"
            />
        );
    },
};

export const SelectMultiple: Story = {
    render: function SelectMultipleField() {
        const [value, setValue] = useState<string[]>([]);
        return (
            <FormField
                id="languages"
                label="Languages"
                type="select"
                value={value}
                onChange={(v) => {
                    if (Array.isArray(v)) setValue(v);
                }}
                options={[
                    { label: 'English', value: 'en' },
                    { label: 'Spanish', value: 'es' },
                    { label: 'French', value: 'fr' },
                ]}
                multiple
                labelPosition="top"
            />
        );
    },
};

export const Checkbox: Story = {
    render: function CheckboxField() {
        const [checked, setChecked] = useState(false);
        return (
            <FormField
                id="agree"
                label="Agree to terms"
                type="checkbox"
                checked={checked}
                onChange={(v) => setChecked(v)}
                labelPosition="right"
            />
        );
    },
};

export const SwitchField: Story = {
    render: function SwitchField() {
        const [enabled, setEnabled] = useState(false);
        return (
            <FormField
                id="newsletter"
                label="Subscribe to newsletter"
                type="switch"
                checked={enabled}
                onChange={(v) => setEnabled(v)}
                labelPosition="right"
            />
        );
    },
};

export const Radio: Story = {
    render: function RadioField() {
        const [value, setValue] = useState('m');
        return (
            <FormField
                id="gender"
                label="Gender"
                type="radio"
                value={value}
                onChange={(v) => setValue(v)}
                options={[
                    { label: 'Male', value: 'm' },
                    { label: 'Female', value: 'f' },
                ]}
                labelPosition="top"
            />
        );
    },
};

export const Date: Story = {
    render: function DateField() {
        const [date, setDate] = useState<Date | undefined>();
        return (
            <FormField
                id="birthday"
                label="Birthday"
                type="date"
                value={date}
                onChange={(d) => setDate(d)}
                labelPosition="top"
            />
        );
    },
};

export const Upload: Story = {
    render: function UploadField() {
        const [file, setFile] = useState<File | null>(null);
        return (
            <div className="space-y-2">
                <FormField
                    id="cv"
                    label="Upload CV"
                    type="upload"
                    onChange={(f) => setFile(f)}
                    labelPosition="top"
                />
                {file && <p className="text-sm text-muted-foreground">{file.name}</p>}
            </div>
        );
    },
};
