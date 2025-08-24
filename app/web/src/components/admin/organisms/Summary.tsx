'use client';

import React from 'react';
import { Avatar } from '@/components/admin/atoms/Avatar';
import { Separator } from '@/components/admin/atoms/Separator';
import { SummaryProps } from './types';

export const Summary = ({ profile }: SummaryProps) => {
    const { name, role, avatarUrl, department, startDate, employeeId, email, stats } = profile;

    return (
        <div className="rounded-md shadow px-4 py-5 w-full space-y-4 overflow-hidden">
            <div className="flex items-center space-x-3">
                <Avatar src={avatarUrl} alt={name} />

                <div className="min-w-0">
                    <p className="text-sm text-primary-foreground font-semibold truncate">{name}</p>
                    <p className="text-xs text-primary-foreground truncate">{role}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 my-7 text-xs">
                <div>
                    <p className="text-primary-foreground font-bold">Departamento</p>
                    <p className="text-primary-foreground font-medium truncate">{department}</p>
                    <p className="text-primary-foreground font-bold mt-2">Ingreso</p>
                    <p className="text-primary-foreground font-medium">{startDate}</p>
                </div>

                <div>
                    <p className="text-primary-foreground font-bold">ID Empleado</p>
                    <p className="text-primary-foreground font-medium truncate">{employeeId}</p>
                    <p className="text-primary-foreground font-bold mt-2">Correo</p>
                    <p className="text-primary-foreground font-medium truncate">{email}</p>
                </div>
            </div>

            <Separator />

            <div className="flex justify-around text-xs">
                {stats.map(({ label, value, icon }) => (
                    <div key={label} className="text-center">
                        <p className="text-primary-foreground text-base font-bold leading-none">
                            {icon} {value}
                        </p>
                        <p className="text-primary-foreground mt-2">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
