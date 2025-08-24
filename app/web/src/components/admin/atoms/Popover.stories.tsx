import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Button } from './Button';

const meta: Meta<typeof Popover> = {
    title: 'Admin/Atoms/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>This is the default popover content.</PopoverContent>
        </Popover>
    ),
};

export const Sides: Story = {
    render: () => (
        <div className="flex flex-wrap gap-6">
            <Popover>
                <PopoverTrigger asChild>
                    <Button>Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">Top side</PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button>Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">Right side</PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button>Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">Bottom side</PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button>Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">Left side</PopoverContent>
            </Popover>
        </div>
    ),
};

export const Alignments: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button>Top + Start</Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="start">
                    Top + Start
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button>Top + Center</Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="center">
                    Top + Center
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button>Top + End</Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="end">
                    Top + End
                </PopoverContent>
            </Popover>
        </div>
    ),
};

export const Offset: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Bottom + Offset 16</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" sideOffset={16}>
                Offset of 16px
            </PopoverContent>
        </Popover>
    ),
};

export const Combined: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Right + End + Offset 12</Button>
            </PopoverTrigger>
            <PopoverContent side="right" align="end" sideOffset={12}>
                Right side, end aligned, 12px offset
            </PopoverContent>
        </Popover>
    ),
};
