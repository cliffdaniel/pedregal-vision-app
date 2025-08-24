'use client';

import { FC, KeyboardEvent } from 'react';
import { Input } from '../atoms/Input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
    placeholder?: string;
    className?: string;
};

export const SearchBar: FC<SearchBarProps> = ({
    value,
    onChange,
    onSubmit,
    placeholder = 'Buscar...',
    className,
}) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSubmit) {
            e.preventDefault();
            onSubmit();
        }
    };

    return (
        <div className={cn('w-full', className)}>
            <Input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                append={
                    onSubmit ? (
                        <button
                            type="button"
                            onClick={onSubmit}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Search className="h-4 w-4" />
                        </button>
                    ) : null
                }
            />
        </div>
    );
};
