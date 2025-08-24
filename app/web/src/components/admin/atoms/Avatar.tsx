'use client';

import Image from 'next/image';

type AvatarProps = {
    src?: string;
    alt?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
};

const imageSize = {
    sm: 32,
    md: 40,
    lg: 56,
};

export const Avatar = ({ src, alt, name, size = 'md' }: AvatarProps) => {
    const fallback = name?.charAt(0).toUpperCase() ?? '?';

    return (
        <div
            className={`inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden ${sizeMap[size]}`}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt ?? name ?? 'Avatar'}
                    width={imageSize[size]}
                    height={imageSize[size]}
                    className="object-cover rounded-full"
                />
            ) : (
                fallback
            )}
        </div>
    );
};
