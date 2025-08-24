'use client';

import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Label } from '../atoms/Label';
import { Select } from '../atoms/Select';
import { Checkbox } from '../atoms/Checkbox';
import { RadioGroup, RadioGroupItem } from '../atoms/RadioGroup';
import { Switch } from '../atoms/Switch';
import { DatePicker } from '../atoms/DatePicker';
import { cn } from '@/lib/utils';
import { ChangeEvent, FC } from 'react';

type FieldType =
    | 'text'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'switch'
    | 'date'
    | 'upload';

type BaseProps = {
    id: string;
    label: string;
    type: FieldType;
    required?: boolean;
    error?: string;
    className?: string;
    labelPosition?: 'top' | 'right';
    readOnly?: boolean;
};

type TextInputProps = {
    type: 'text' | 'textarea';
    value: string;
    onChange: (value: string) => void;
};

type SelectProps = {
    type: 'select';
    value: string | string[];
    onChange: (value: string | string[]) => void;
    options: { label: string; value: string }[];
    multiple?: boolean;
};

type CheckboxProps = {
    type: 'checkbox' | 'switch';
    checked: boolean;
    onChange: (value: boolean) => void;
};

type RadioGroupProps = {
    type: 'radio';
    value: string;
    onChange: (value: string) => void;
    options: { label: string; value: string }[];
};

type DatePickerProps = {
    type: 'date';
    value: Date | undefined;
    onChange: (value: Date | undefined) => void;
};

type UploadProps = {
    type: 'upload';
    onChange: (file: File | null) => void;
};

type FormFieldProps =
    | (BaseProps & TextInputProps)
    | (BaseProps & SelectProps)
    | (BaseProps & CheckboxProps)
    | (BaseProps & RadioGroupProps)
    | (BaseProps & DatePickerProps)
    | (BaseProps & UploadProps);

const errorMessages: Record<string, string> = {
    'Invalid date': 'Fecha no válida',
    Required: 'Este campo es obligatorio',
};

export const FormField: FC<FormFieldProps> = ({
    id,
    label,
    type,
    required,
    error,
    className,
    labelPosition,
    readOnly,
    ...props
}) => {
    const labelText: string = required ? `${label} *` : label;

    const isInline = (type === 'checkbox' || type === 'switch') && labelPosition === 'right';

    const wrapperClass = cn(
        isInline ? 'flex items-center gap-2' : 'flex flex-col gap-1',
        className,
    );

    return (
        <div className={wrapperClass}>
            <Label htmlFor={id}>{labelText}</Label>

            {type === 'text' && (
                <Input
                    id={id}
                    value={(props as TextInputProps).value}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                        (props as TextInputProps).onChange(e.target.value)
                    }
                    readOnly={!!readOnly}
                />
            )}

            {type === 'textarea' && (
                <Textarea
                    id={id}
                    value={(props as TextInputProps).value}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
                        (props as TextInputProps).onChange(e.target.value)
                    }
                    readOnly={!!readOnly}
                />
            )}

            {type === 'select' && (
                <Select
                    id={id}
                    value={(props as SelectProps).value}
                    onChange={(value: string | string[]): void =>
                        (props as SelectProps).onChange(value)
                    }
                    options={(props as SelectProps).options}
                    multiple={(props as SelectProps).multiple}
                />
            )}

            {type === 'checkbox' && (
                <Checkbox
                    id={id}
                    checked={(props as CheckboxProps).checked}
                    onCheckedChange={(value: boolean | 'indeterminate'): void =>
                        (props as CheckboxProps).onChange(Boolean(value))
                    }
                />
            )}

            {type === 'switch' && (
                <Switch
                    id={id}
                    checked={(props as CheckboxProps).checked}
                    onCheckedChange={(value: boolean): void =>
                        (props as CheckboxProps).onChange(value)
                    }
                />
            )}

            {type === 'radio' && (
                <RadioGroup
                    id={id}
                    value={(props as RadioGroupProps).value}
                    onValueChange={(value: string): void =>
                        (props as RadioGroupProps).onChange(value)
                    }
                >
                    {(props as RadioGroupProps).options.map((option) => (
                        <RadioGroupItem
                            key={option.value}
                            value={option.value}
                            label={option.label}
                        />
                    ))}
                </RadioGroup>
            )}

            {type === 'date' && (
                <DatePicker
                    id={id}
                    date={(props as DatePickerProps).value}
                    onChange={(date: Date | undefined): void =>
                        (props as DatePickerProps).onChange(date)
                    }
                />
            )}

            {type === 'upload' && (
                <Input
                    id={id}
                    type="file"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                        (props as UploadProps).onChange(e.target.files?.[0] ?? null)
                    }
                />
            )}

            {error && <p className="text-sm text-red-500">{errorMessages[error] ?? error}</p>}
        </div>
    );
};
