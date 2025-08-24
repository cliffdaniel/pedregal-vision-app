import type { Meta, StoryObj } from '@storybook/react';
import {
    ToastProvider,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastViewport,
    getToastStyles,
} from './Toast';
import { useState } from 'react';

const meta: Meta = {
    title: 'Admin/Atoms/Toast',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const ToastExample = ({ status }: { status: 'success' | 'info' | 'warning' | 'error' }) => {
    const [open, setOpen] = useState(false);
    const { icon, className } = getToastStyles(status);

    return (
        <ToastProvider>
            <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90"
                onClick={() => setOpen(true)}
            >
                Show {status} toast
            </button>
            <Toast open={open} onOpenChange={setOpen}>
                <div
                    className={`flex items-start gap-3 rounded-md border p-4 shadow-md ${className}`}
                >
                    <div className="mt-1">{icon}</div>
                    <div className="flex flex-col gap-1">
                        <ToastTitle className="font-semibold">Action: {status}</ToastTitle>
                        <ToastDescription className="text-sm text-white">
                            This is a {status} notification.
                        </ToastDescription>
                    </div>
                </div>
            </Toast>
            <ToastViewport position="top-right" />
        </ToastProvider>
    );
};

export const Success: Story = {
    render: () => <ToastExample status="success" />,
};

export const Info: Story = {
    render: () => <ToastExample status="info" />,
};

export const Warning: Story = {
    render: () => <ToastExample status="warning" />,
};

export const Error: Story = {
    render: () => <ToastExample status="error" />,
};
