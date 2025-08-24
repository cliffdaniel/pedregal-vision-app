import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import type { ColumnDef } from '@tanstack/react-table';

type Person = {
    id: number;
    name: string;
    age: number;
    email: string;
};

const meta: Meta<typeof DataTable<Person>> = {
    title: 'Admin/Atoms/DataTable',
    component: DataTable,
    tags: ['autodocs'],
};

export default meta;

const columns: ColumnDef<Person>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <input
                type="checkbox"
                checked={table.getIsAllPageRowsSelected()}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
            />
        ),
        cell: ({ row }) => (
            <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
            />
        ),
        enableSorting: false,
        enableColumnFilter: false,
    },
    {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: 'age',
        header: 'Age',
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: (info) => info.getValue(),
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const person = row.original;
            return (
                <div className="flex gap-2">
                    <button
                        className="text-primary hover:underline"
                        onClick={() => alert(`Editing ${person.name}`)}
                    >
                        Edit
                    </button>
                    <button
                        className="text-error hover:underline"
                        onClick={() => alert(`Deleting ${person.name}`)}
                    >
                        Delete
                    </button>
                </div>
            );
        },
        enableSorting: false,
        enableColumnFilter: false,
    },
];

const data: Person[] = [
    { id: 1, name: 'Daniel Arenas', age: 30, email: 'daniel@example.com' },
    { id: 2, name: 'María López', age: 28, email: 'maria@example.com' },
    { id: 3, name: 'Carlos Ruiz', age: 35, email: 'carlos@example.com' },
    { id: 4, name: 'Laura Gómez', age: 40, email: 'laura@example.com' },
    { id: 5, name: 'Javier Peña', age: 31, email: 'javier@example.com' },
    { id: 6, name: 'Sofía Torres', age: 27, email: 'sofia@example.com' },
    { id: 7, name: 'Luis Fernández', age: 33, email: 'luis@example.com' },
    { id: 8, name: 'Ana Ramírez', age: 29, email: 'ana@example.com' },
];

export const FullFeatures: StoryObj<typeof DataTable<Person>> = {
    args: {
        data,
        columns,
    },
};
