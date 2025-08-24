import type { Meta, StoryObj } from '@storybook/react';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
    title: 'Admin/Atoms/AlertDialog',
    component: AlertDialog,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary-600">
                Delete Item
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the item.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="px-4 py-2 rounded bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary-600">
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};
