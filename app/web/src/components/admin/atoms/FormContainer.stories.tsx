import type { Meta, StoryObj } from '@storybook/react';
import { FormContainer } from './FormContainer';
import { Button } from './Button';

const meta: Meta<typeof FormContainer> = {
    title: 'admin/Atoms/FormContainer',
    component: FormContainer,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormContainer>;

export const Default: Story = {
    args: {
        children: (
            <>
                <div className="text-center">Contenido del formulario</div>
                <Button>Enviar</Button>
            </>
        ),
    },
};
