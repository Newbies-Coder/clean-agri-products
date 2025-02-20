import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { TokenDecoded } from "@/@types/token.type";
import { envConfig } from "@/configs/envConfig";

// Set token to Cookies
export const setTokenToCookies = (cookiesName: string, token: string) => {
  // Decode Token
  const decoded = jwtDecode(token) as TokenDecoded;
  const { exp, iat } = decoded;

  // Set cookies
  Cookies.set(cookiesName, token, {
    expires: Math.floor((exp - iat) / (60 * 60 * 24)), // number of days the token will exist
    path: "/", // pages where the token is valid
    secure: envConfig.VITE_NODE_ENV === "production", // Only allow cookies to be sent over HTTPS connections when in production
    sameSite: "strict", // Block all requests from other sites (prevent CSRF).
  });
};

// Get token from Cookies
export const getTokenFromCookies = (cookiesName: string) => {
  return Cookies.get(cookiesName);
};

// Remove Tokens in cookies
export const removeTokenInCookies = () => {
  Cookies.remove('access_token')
  Cookies.remove('refresh_token')
}