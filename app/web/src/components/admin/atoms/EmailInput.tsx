'use client';

import { Label } from './Label';
import { Input } from './Input';

type Props = {
    value: string;
    onChange: (value: string) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    error?: string;
};

export const EmailInput = ({ value, onChange, inputProps, error }: Props) => (
    <div className="space-y-2">
        <Label htmlFor="email">Correo Microsoft</Label>
        <Input
            id="email"
            type="email"
            autoComplete="email"
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
            {...inputProps}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);
