'use client';

import { cn } from '@/lib/utils';
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type RowSelectionState,
    type SortingState,
} from '@tanstack/react-table';
import { useState } from 'react';

type DataTableProps<T extends { id: string | number }> = {
    columns: ColumnDef<T>[];
    data: T[];
};

export function DataTable<T extends { id: string | number }>({
    columns,
    data,
}: Readonly<DataTableProps<T>>) {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
            globalFilter,
            sorting,
        },
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableRowSelection: true,
    });

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border border-input bg-background text-foreground px-3 py-1 rounded w-64 text-sm"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <span className="text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} de{' '}
                    {table.getFilteredRowModel().rows.length} fila(s) seleccionadas
                </span>
            </div>

            <div className="overflow-x-auto border border-border rounded-md">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-muted">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className={cn(
                                            'px-4 py-2 font-semibold text-muted-foreground cursor-pointer select-none',
                                            header.column.id === 'actions' &&
                                                'w-[210px] text-transparent',
                                        )}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="bg-card text-foreground">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="border-t border-border hover:bg-muted/50">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className={cn(
                                            'px-4 py-2',
                                            cell.column.id === 'actions' && 'w-[210px]',
                                        )}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between text-sm">
                <div className="space-x-2">
                    <button
                        className="px-3 py-1 border border-border rounded text-foreground bg-background hover:bg-muted disabled:opacity-50"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </button>
                    <button
                        className="px-3 py-1 border border-border rounded text-foreground bg-background hover:bg-muted disabled:opacity-50"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Siguiente
                    </button>
                </div>
                <span className="text-muted-foreground">
                    Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                </span>
            </div>
        </div>
    );
}
