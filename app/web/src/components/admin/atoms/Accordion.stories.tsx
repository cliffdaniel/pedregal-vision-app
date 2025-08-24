import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Admin/Atoms/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is NextBase UI?</AccordionTrigger>
                <AccordionContent>
                    A component system built with Radix UI and TailwindCSS for fast development.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                <AccordionContent>
                    Yes, you can override or extend any component as needed.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
