import { NextResponse } from 'next/server';
import { users } from '@/lib/mockUsers';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const body = await req.json();
    const newUser = {
        id: uuidv4(),
        ...body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    users.unshift(newUser);
    return NextResponse.json(newUser, { status: 201 });
}
