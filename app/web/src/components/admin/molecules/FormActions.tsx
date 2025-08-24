'use client';

import { ReactNode } from 'react';
import { Button } from '../atoms/Button';

type FormActionsProps = {
    submitLabel?: string;
    cancelLabel?: string;
    onSubmit?: () => void;
    onCancel?: () => void;
    loading?: boolean;
    disabled?: boolean;
    cancelVariant?: 'ghost' | 'outline';
    submitVariant?: 'default' | 'outline' | 'error';
    submitIcon?: ReactNode;
    cancelIcon?: ReactNode;
};

export function FormActions({
    submitLabel = 'Save',
    cancelLabel = 'Cancel',
    onSubmit,
    onCancel,
    loading = false,
    disabled = false,
    cancelVariant = 'ghost',
    submitVariant = 'default',
    submitIcon,
    cancelIcon,
}: Readonly<FormActionsProps>) {
    return (
        <div className="flex gap-2">
            {onCancel && (
                <Button
                    type="button"
                    variant={cancelVariant}
                    onClick={onCancel}
                    disabled={loading || disabled}
                    icon={cancelIcon}
                >
                    {cancelLabel}
                </Button>
            )}
            {onSubmit && (
                <Button
                    type="button"
                    variant={submitVariant}
                    onClick={onSubmit}
                    disabled={disabled}
                    loading={loading}
                    icon={submitIcon}
                >
                    {submitLabel}
                </Button>
            )}
        </div>
    );
}
