import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7000';
console.log(BASE_URL)

// Create a general axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const rapidApiInstance = axios.create({
    baseURL: 'https://twelve-data1.p.rapidapi.com',
});

// Function to add the Authorization token dynamically to requests
const setAuthHeader = (token: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = token;
};

// Public API Call (No token needed)
export const publicApiCall = async (endpoint: string, method: 'get' | 'post' | 'put' | 'delete', data?: object) => {
    try {
        const response = await axiosInstance({
            url: endpoint,
            method,
            data,
        });

        setCookie('authToken', response.data?.access_token)
        return response.data;
    } catch (error) {
        // console.error('Public API Error:', error?.response || error?.message);
        throw error;
    }
};

// Private API Call (Token needed)
export const privateApiCall = async (endpoint: string, method: 'get' | 'post' | 'put' | 'delete', data?: object) => {
    try {
        // Get token from cookies/localStorage/sessionStorage
        const token = getCookie('authToken'); // or localStorage.getItem('authToken');
        if (token) {
            setAuthHeader(token as string);
        } else {
            throw new Error('No token found');
        }

        const response = await axiosInstance({
            url: endpoint,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        // console.error('API Error:', error.response || error.message);
        throw error;
    }
};


export const stockApiCall = async (endpoint: string, params: object = {}) => {
    try {
        // Get token from cookies/localStorage/sessionStorage
        const token = getCookie('authToken'); // or localStorage.getItem('authToken');
        if (token) {
            setAuthHeader(token as string);
        } else {
            throw new Error('No token found');
        }

        const response = await rapidApiInstance({
            url: endpoint,
            method: 'get',
            params: { ...params, format: 'json' },
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': 'add9922a9dmshd349bf3556af370p1fff98jsn8b5877aa7834',
                'x-rapidapi-host': 'twelve-data1.p.rapidapi.com'
            }
        });
        return response.data;
    } catch (error) {
        // console.error('API Error:', error.response || error.message);
        throw error;
    }
};
