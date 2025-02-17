import axios from "axios";
import { envConfig } from "@/configs/envConfig";
import { RegisterType, LoginType } from "@/schemas/auth.schema";
import { setTokenToCookies } from "@/lib/token";
import { NOTIFICATIONS } from "@/constants/notifications";

interface AuthResponse {
  statusCode?: number;
  message: string;
  data: {
    _id: string;
    full_name: string;
    email: string;
    access_token: string;
    refresh_token: string;
  };
}

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
