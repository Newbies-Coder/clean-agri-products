import axios from "axios";
import { envConfig } from "@/configs/envConfig";
import { RegisterType } from "@/schemas/auth.schema";
import { setTokenToCookies } from "@/lib/token";

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
      return {
        success: false,
        message: "Invalid response from server. Tokens missing.",
      };
    }

    // Set access token & refresh token to Cookies
    setTokenToCookies("access_token", access_token);
    setTokenToCookies("refresh_token", refresh_token);

    return { success: true, message: response.data.message };

  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          `Request failed with status ${error.response?.status}` ||
          "Something went wrong!",
      };
    }
  }
};
