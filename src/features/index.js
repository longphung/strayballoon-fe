import axiosLibrary from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const isDev = import.meta.env.MODE;

export const axios = axiosLibrary.create({
  baseURL: `${isDev ? 'http' : 'https'}://${baseUrl}`,
});

export const baseWs = `${isDev ? 'ws' : 'wss'}://${baseUrl}`;
