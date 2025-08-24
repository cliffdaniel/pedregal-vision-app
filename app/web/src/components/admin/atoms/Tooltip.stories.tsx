import type { Meta, StoryObj } from '@storybook/react';
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
    TooltipVariants,
} from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Admin/Atoms/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const TooltipDemo = ({ text, variant }: { text: string; variant: TooltipVariants }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90">
                    Hover me
                </button>
            </TooltipTrigger>
            <TooltipContent variant={variant} delayDuration={100}>
                {text}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

export const Info: Story = {
    render: () => <TooltipDemo text="This is an info tooltip" variant="info" />,
};

export const Success: Story = {
    render: () => <TooltipDemo text="Successfully saved" variant="success" />,
};

export const Warning: Story = {
    render: () => <TooltipDemo text="Warning: something odd" variant="warning" />,
};

export const Error: Story = {
    render: () => <TooltipDemo text="Error: something went wrong" variant="error" />,
};
