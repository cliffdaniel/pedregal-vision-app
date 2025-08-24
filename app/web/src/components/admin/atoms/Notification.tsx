'use client';

import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

type NotificationProps = {
    type?: 'error' | 'info' | 'success';
    message: string;
};

export const Notification = ({ type = 'info', message }: NotificationProps) => {
    const base = 'flex items-start gap-2 text-sm px-4 py-3 rounded-md border font-medium';

    const styles = {
        error: 'bg-red-50 border-red-200 text-red-700',
        success: 'bg-green-50 border-green-200 text-green-700',
        info: 'bg-blue-50 border-blue-200 text-blue-700',
    };

    const icons = {
        error: <AlertTriangle className="w-5 h-5 mt-0.5 text-red-600" />,
        success: <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600" />,
        info: <Info className="w-5 h-5 mt-0.5 text-blue-600" />,
    };

    return (
        <div className={`${base} ${styles[type]}`}>
            {icons[type]}
            <span>{message}</span>
        </div>
    );
};
