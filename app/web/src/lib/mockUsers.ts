import { v4 as uuidv4 } from 'uuid';

const now = new Date().toISOString();

export const users = Array.from({ length: 10 }).map((_, i) => {
    let role: 'admin' | 'editor' | 'viewer';

    if (i % 3 === 0) {
        role = 'admin';
    } else if (i % 3 === 1) {
        role = 'editor';
    } else {
        role = 'viewer';
    }

    return {
        id: uuidv4(),
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role,
        status: i % 2 === 0 ? 'active' : 'inactive',
        createdAt: now,
        updatedAt: now,
    };
});
