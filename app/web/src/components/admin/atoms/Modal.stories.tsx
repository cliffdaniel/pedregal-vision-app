import type { Meta, StoryObj } from '@storybook/react';
import {
    Modal,
    ModalTrigger,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ModalClose,
} from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Admin/Atoms/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => (
        <Modal>
            <ModalTrigger className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90">
                Open Modal
            </ModalTrigger>
            <ModalContent>
                <ModalTitle className="text-lg font-semibold">Modal Title</ModalTitle>
                <ModalDescription className="text-sm text-muted-foreground mb-4">
                    This is a description inside the modal.
                </ModalDescription>
                <ModalClose className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-80">
                    Close
                </ModalClose>
            </ModalContent>
        </Modal>
    ),
};
