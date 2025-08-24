import { Meta, StoryObj } from '@storybook/react';
import { Main } from './Main';

const meta: Meta<typeof Main> = {
    title: 'Admin/Organisms/Main',
    component: Main,
    tags: ['autodocs'],
    args: {
        children: (
            <div className="space-y-4">
                <p className="text-sm">Este es el contenido principal del layout.</p>
                <div className="h-96 bg-white rounded-md shadow-sm p-4">Sección con scroll</div>
            </div>
        ),
    },
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {
    args: {},
};
