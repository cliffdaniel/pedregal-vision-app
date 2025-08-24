import axios, { type InternalAxiosRequestConfig } from 'axios';
import { getAccessToken } from '@/modules/login/utils/auth';
import { toast } from '@/lib/toast';

export const axiosInstance = axios.create({
    timeout: 10000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    const isLoginRequest =
        config.url?.includes('/auth/login') || config.url?.includes('/auth/refresh');

    if (token && !isLoginRequest) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error?.response?.data?.message;

        if (message === 'failure to get a peer from the ring-balancer') {
            toast.error('Servidor no disponible. Intente nuevamente más tarde');

            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('global-http-fatal'));
            }

            return Promise.reject(new Error(message || 'Error de red'));
        }

        return Promise.reject(new Error(message || 'Error de red'));
    },
);
