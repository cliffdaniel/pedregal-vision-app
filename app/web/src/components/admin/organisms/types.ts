export type UserStat = {
    label: string;
    value: number;
    icon: string;
};

export type UserProfile = {
    name: string;
    role: string;
    avatarUrl: string;
    department: string;
    startDate: string;
    employeeId: string;
    email: string;
    stats: UserStat[];
};

export type SummaryProps = {
    profile: UserProfile;
};

export type SidebarGroupItem = {
    icon: React.ReactNode;
    label: string;
    items: {
        label: string;
        href: string;
    }[];
    onClick?: () => void;
};

export type SidebarGroup = {
    title: string;
    items: SidebarGroupItem[];
    key?: string;
};

export type SidebarFooterItem = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
};

export type SidebarProps = {
    className?: string;
    groups: SidebarGroup[];
    footerItems: SidebarFooterItem[];
    profile: UserProfile;
};
