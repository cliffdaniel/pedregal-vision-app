import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Admin/Atoms/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
                This is the main content of the card. You can place forms, text, or other elements
                here.
            </CardContent>
            <CardFooter>
                <button className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary-600">
                    Action
                </button>
            </CardFooter>
        </Card>
    ),
};
