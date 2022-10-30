export const baseUrl = import.meta.env.VITE_BASE_URL;
const isDev = import.meta.env.VITE_CONNECT_STAGING !== 'false' ? false : import.meta.env.DEV;

export const baseWs = `${isDev ? 'ws' : 'wss'}://${baseUrl}/ws`;
