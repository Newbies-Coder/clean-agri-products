import { ERROR_TOAST, NOTIFICATIONS } from "@/constants/notifications";
import axios from "axios";
import { getTokenFromCookies, setTokenToCookies } from "./token";
import { axiosConfig } from "@/configs/axiosConfig";

const axiosInstance = axios.create(axiosConfig);

// Function refresh token
const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post("/users/token/refresh");
    const { access_token, refresh_token } = response.data.data;

    if (!access_token || !refresh_token) {
      throw new Error(NOTIFICATIONS.AUTH.TOKEN_MISSED);
    }

    // Set the new access token & refresh token to Cookies
    setTokenToCookies("access_token", access_token);
    setTokenToCookies("refresh_token", refresh_token);

    return access_token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      ERROR_TOAST(
        error.response?.data?.message ||
          NOTIFICATIONS.ERROR.SERVER + error.response?.status ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    setTokenToCookies("access_token", ""); // Delete token to avoid loop
    setTokenToCookies("refresh_token", "");
    window.location.href = "/auth/login";
    return null;
  }
};

// Request Interceptor: Add token into headers when send the request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookies("access_token"); // Get sccess_token from cookies

    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle error status 401 and refresh token automatically
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 (Unauthorized) and the request has not been retried yet, attempt to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark as retried to prevent infinite loops

      const newToken = await refreshAccessToken();
      if (newToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Retry the original request with the new token
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
