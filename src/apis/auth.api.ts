import axios from "axios";
import { envConfig } from "@/configs/envConfig";
import {
  RegisterType,
  LoginType,
  type VerifyOTPType,
} from "@/schemas/auth.schema";
import { removeTokenInCookies, setTokenToCookies } from "@/lib/token";
import { NOTIFICATIONS } from "@/constants/notifications";
import axiosInstance from "@/lib/axiosInstance";
import { AuthResponse } from "@/@types/auth-response.type";
import { useAuthStore } from "@/store/auth.store";

// Register action
export const registerAction = async (formData: RegisterType) => {
  try {
    // Send request to server
    const response = await axios.post<AuthResponse>(
      `${envConfig.VITE_API_URL}/users/register`,
      formData
    );

    // Success
    const { access_token, refresh_token } = response.data.data;

    // Check the tokens are exist
    if (!access_token || !refresh_token) {
      throw new Error(NOTIFICATIONS.AUTH.TOKEN_MISSED);
    }

    // Set access token & refresh token to Cookies
    setTokenToCookies("access_token", access_token);
    setTokenToCookies("refresh_token", refresh_token);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          NOTIFICATIONS.ERROR.SERVER + error.response?.status ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    throw new Error(NOTIFICATIONS.ERROR.UNDEFINED);
  }
};

// Login action
export const loginAction = async (formData: LoginType) => {
  try {
    // Send request to server
    const response = await axios.post<AuthResponse>(
      `${envConfig.VITE_API_URL}/users/login`,
      formData
    );

    // Success
    const { access_token, refresh_token } = response.data.data;

    // Check the tokens are exist
    if (!access_token || !refresh_token) {
      throw new Error(NOTIFICATIONS.AUTH.TOKEN_MISSED);
    }

    // Set access token & refresh token to Cookies
    setTokenToCookies("access_token", access_token);
    setTokenToCookies("refresh_token", refresh_token);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          NOTIFICATIONS.ERROR.SERVER + error.response?.status ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    throw new Error(NOTIFICATIONS.ERROR.UNDEFINED);
  }
};

// Verify OTP action
export const verifyOTPAction = async (formData: VerifyOTPType) => {
  try {
    // Send request to server
    await axiosInstance.post(`/users/otp/authenticate`, formData);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          NOTIFICATIONS.ERROR.SERVER + error.response?.status ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    throw new Error(NOTIFICATIONS.ERROR.UNDEFINED);
  }
};

export const logoutAction = async () => {
  try {
    // Send request to server
    await axiosInstance.post(`/users/logout`);
  } catch (error) {
    // Handle error
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          NOTIFICATIONS.ERROR.SERVER + error.response?.status ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    throw new Error(NOTIFICATIONS.ERROR.UNDEFINED);
  } finally {
    // Remove access token & refresh token from Cookies
    removeTokenInCookies();
    // Remove user from store
    useAuthStore.getState().logout();
    // Redirect to login page
    window.location.href = "/auth/login";
  }
};
