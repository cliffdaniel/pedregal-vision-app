'use client';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import { Avatar } from '@/components/admin/atoms/Avatar';

type HeaderUserMenuProps = {
    user: {
        name: string;
        email: string;
        avatarUrl?: string;
    };
    onProfile: () => void;
    onChangePassword: () => void;
    onLogout: () => void;
};

export const HeaderUserMenu = ({
    user,
    onProfile,
    onChangePassword,
    onLogout,
}: HeaderUserMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="rounded-full outline-none focus-visible:ring-0 focus-visible:outline-none">
                    <Avatar src={user.avatarUrl} name={user.name} size="md" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent
                    side="bottom"
                    align="end"
                    sideOffset={12}
                    className="z-50 min-w-[200px] p-2 rounded-lg border bg-popover text-popover-foreground shadow-lg"
                >
                    <DropdownMenuItem
                        onSelect={onProfile}
                        className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm"
                    >
                        <User className="w-4 h-4" />
                        Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={onChangePassword}
                        className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm"
                    >
                        <Settings className="w-4 h-4" />
                        Cambiar contraseña
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onSelect={onLogout}
                        className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 text-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Cerrar sesión
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
};
