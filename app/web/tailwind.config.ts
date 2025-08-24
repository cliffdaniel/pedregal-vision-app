import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#fff',
                foreground: '#020817',
                muted: '#f3f4f6',
                'muted-foreground': '#64748b',
                popover: '#fff',
                'popover-foreground': '#020817',
                card: '#fff',
                'card-foreground': '#020817',
                border: '#e2e8f0',
                input: '#e2e8f0',
                primary: {
                    50: '#f5f5ff',
                    100: '#e8e7fe',
                    200: '#d8d6ff',
                    300: '#b9b4fe',
                    400: '#9588fc',
                    500: '#846cf9',
                    600: '#6338f0',
                    700: '#5224db',
                    800: '#451fb7',
                    900: '#3a1b98',
                    950: '#3a1b98',
                    DEFAULT: '#4974f6',
                    foreground: '#f5f5ff',
                },
                secondary: {
                    DEFAULT: '#e2e8f0',
                    foreground: '#0f172a',
                },
                accent: {
                    DEFAULT: '#e2e8f0',
                    foreground: '#0f172a',
                },
                error: {
                    DEFAULT: '#ef4444',
                    foreground: 'hsl(0 85.7% 97.3)',
                },
                ring: '#7c3aed',
                success: {
                    DEFAULT: '#22c55e',
                    foreground: '#f0fdf4',
                },
                warning: {
                    DEFAULT: '#f97316',
                    foreground: '#fff7ed',
                },
                info: {
                    DEFAULT: '#06b6d4',
                    foreground: '#ecfeff',
                },
                default: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020817',
                },
            },
            borderRadius: {
                DEFAULT: '0.5rem',
            },
        },
    },
    plugins: [],
};

export default config;
