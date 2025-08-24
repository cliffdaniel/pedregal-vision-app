import { Meta, StoryObj } from '@storybook/react';
import { FormActions } from './FormActions';
import { Save, X } from 'lucide-react';

const meta: Meta<typeof FormActions> = {
    title: 'Admin/Molecules/FormActions',
    component: FormActions,
    tags: ['autodocs'],
    argTypes: {
        submitVariant: {
            control: 'select',
            options: ['default', 'outline', 'error'],
        },
        cancelVariant: {
            control: 'select',
            options: ['ghost', 'outline'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof FormActions>;

export const Default: Story = {
    args: {
        submitLabel: 'Save',
        cancelLabel: 'Cancel',
        onSubmit: () => alert('Submit clicked'),
        onCancel: () => alert('Cancel clicked'),
    },
};

export const Loading: Story = {
    args: {
        submitLabel: 'Saving...',
        cancelLabel: 'Cancel',
        loading: true,
        onSubmit: () => {},
        onCancel: () => {},
    },
};

export const SubmitOnly: Story = {
    args: {
        submitLabel: 'Submit',
        onSubmit: () => alert('Only submit clicked'),
    },
};

export const CancelOnly: Story = {
    args: {
        cancelLabel: 'Back',
        onCancel: () => alert('Only cancel clicked'),
    },
};

export const WithIcons: Story = {
    args: {
        submitLabel: 'Save',
        cancelLabel: 'Cancel',
        submitIcon: <Save className="h-4 w-4" />,
        cancelIcon: <X className="h-4 w-4" />,
        onSubmit: () => alert('Submit with icon'),
        onCancel: () => alert('Cancel with icon'),
    },
};
