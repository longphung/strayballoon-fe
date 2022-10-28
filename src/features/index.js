import axiosLibrary from 'axios';

export const baseUrl = import.meta.env.VITE_BASE_URL;
const isDev = import.meta.env.false;

export const axios = axiosLibrary.create({
  baseURL: `${isDev ? 'http' : 'https'}://${baseUrl}`,
});

export const baseWs = `${isDev ? 'ws' : 'wss'}://${baseUrl}/ws`;
