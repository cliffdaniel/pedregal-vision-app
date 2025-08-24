import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui.shadcn.com',
            },
        ],
    },
};

export default nextConfig;
