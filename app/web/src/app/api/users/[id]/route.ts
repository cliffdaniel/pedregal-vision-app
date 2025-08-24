import { NextResponse } from 'next/server';
import { users } from '@/lib/mockUsers';

export async function DELETE(request: Request) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    users.splice(index, 1);
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
