'use client';

import { Label } from './Label';
import { Input } from './Input';

type Props = {
    value: string;
    onChange: (value: string) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    error?: string;
};

export const PasswordInput = ({ value, onChange, inputProps, error }: Props) => (
    <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
            id="password"
            type="password"
            autoComplete="current-password"
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
            {...inputProps}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);
