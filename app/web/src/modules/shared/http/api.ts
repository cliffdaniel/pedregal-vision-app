import type { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';
import { BASE_API_URL, API_KEY } from '@/modules/shared/http/constants';

const withDefaultHeaders = (config?: AxiosRequestConfig): AxiosRequestConfig => {
    return {
        baseURL: BASE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            ...(config?.headers ?? {}),
        },
        ...config,
    };
};

export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.get<T>(url, withDefaultHeaders(config)).then((res) => res.data),

    post: <T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.post<T>(url, data, withDefaultHeaders(config)).then((res) => res.data),

    put: <T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.put<T>(url, data, withDefaultHeaders(config)).then((res) => res.data),

    delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.delete<T>(url, withDefaultHeaders(config)).then((res) => res.data),
};
