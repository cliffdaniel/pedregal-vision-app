'use client';

import * as React from 'react';
import { UploadCloud, X } from 'lucide-react';

interface FileUploadProps {
    onChange?: (files: File[]) => void;
    multiple?: boolean;
    accept?: string;
    label?: string;
    description?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onChange,
    multiple = false,
    accept = '',
    label = 'Upload files',
    description = '',
}) => {
    const [files, setFiles] = React.useState<File[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files ?? []);
        setFiles(selectedFiles);
        if (onChange) {
            onChange(selectedFiles);
        }
    };

    const handleRemove = (index: number) => {
        const updated = [...files];
        updated.splice(index, 1);
        setFiles(updated);
        if (onChange) {
            onChange(updated);
        }
    };

    return (
        <div className="w-full">
            <label className="mb-1 block text-sm font-medium text-foreground">{label}</label>
            <div className="flex items-center gap-2 rounded-md border border-dashed border-input bg-background px-4 py-6 text-sm shadow-sm">
                <UploadCloud className="mr-2 h-5 w-5 opacity-50" />
                <input
                    type="file"
                    onChange={handleChange}
                    multiple={multiple}
                    accept={accept}
                    className="block w-full cursor-pointer bg-transparent text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
            </div>
            {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
            {files.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-foreground">
                    {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <span className="truncate">{file.name}</span>
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
