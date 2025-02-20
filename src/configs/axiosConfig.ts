import { envConfig } from "./envConfig";

export const axiosConfig = {
  baseURL: envConfig.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
