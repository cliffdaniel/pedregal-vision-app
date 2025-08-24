import { Meta, StoryObj } from '@storybook/react';
import { FormFooter } from './FormFooter';
import { Button } from '../atoms/Button';

const meta: Meta<typeof FormFooter> = {
    title: 'Admin/Molecules/FormFooter',
    component: FormFooter,
    tags: ['autodocs'],
    argTypes: {
        align: {
            control: 'select',
            options: ['left', 'center', 'right'],
        },
        sticky: {
            control: 'boolean',
        },
        shadow: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof FormFooter>;

export const Default: Story = {
    args: {
        align: 'right',
        children: (
            <>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
            </>
        ),
    },
};

export const Centered: Story = {
    args: {
        align: 'center',
        children: (
            <>
                <Button variant="outline">Back</Button>
                <Button>Continue</Button>
            </>
        ),
    },
};

export const Left: Story = {
    args: {
        align: 'left',
        children: (
            <>
                <Button variant="outline">Discard</Button>
            </>
        ),
    },
};

export const Sticky: Story = {
    args: {
        align: 'right',
        sticky: true,
        children: (
            <>
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
            </>
        ),
    },
    render: (args) => (
        <div className="h-[300px] overflow-y-auto border rounded-md p-4 space-y-40">
            <p>Scroll down to see the sticky footer.</p>
            <FormFooter {...args} />
        </div>
    ),
};

export const StickyWithShadow: Story = {
    args: {
        align: 'right',
        sticky: true,
        shadow: true,
        children: (
            <>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
            </>
        ),
    },
    render: (args) => (
        <div className="h-[300px] overflow-y-auto border rounded-md p-4 space-y-40">
            <p>Scroll down to see the sticky footer with shadow.</p>
            <FormFooter {...args} />
        </div>
    ),
};
