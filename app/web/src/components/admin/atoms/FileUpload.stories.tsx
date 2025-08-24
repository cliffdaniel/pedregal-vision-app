import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
    title: 'Admin/Atoms/FileUpload',
    component: FileUpload,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const DefaultStory = () => {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <div className="w-[400px]">
            <FileUpload
                onChange={setFiles}
                label="Upload your documents"
                description="Accepted formats: PDF, DOCX, JPG"
                accept=".pdf,.docx,.jpg"
            />
            <p className="mt-2 text-sm text-muted-foreground">Files selected: {files.length}</p>
        </div>
    );
};

const MultipleStory = () => {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <div className="w-[400px]">
            <FileUpload
                multiple
                onChange={setFiles}
                label="Upload multiple images"
                accept="image/*"
            />
            <p className="mt-2 text-sm text-muted-foreground">Files selected: {files.length}</p>
        </div>
    );
};

export const Default: Story = {
    render: () => <DefaultStory />,
};

export const Multiple: Story = {
    render: () => <MultipleStory />,
};
