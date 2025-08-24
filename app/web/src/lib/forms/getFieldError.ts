import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type RHFError = FieldError | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>;

export function getFieldError(error: string | RHFError | undefined): string | undefined {
    if (typeof error === 'string') return error;
    if (
        error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string'
    ) {
        return error.message;
    }
    return undefined;
}
