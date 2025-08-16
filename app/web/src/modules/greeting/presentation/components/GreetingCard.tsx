"use client";

import { Greeting } from "../../domain/entities/Greeting";

type Props = {
    greeting: Greeting;
};

export function GreetingCard({ greeting }: Props) {
    return (
        <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Greeting</h2>
            <p className="mt-2 text-gray-700">{greeting.message}</p>
        </div>
    );
}
