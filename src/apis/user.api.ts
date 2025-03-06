import { NOTIFICATIONS } from "@/constants/notifications";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";

export const getProfile = async () => {
  try {
    // Send request to server
    const { data } = await axiosInstance.get("/users/@me/profile");
    // Return data
    return data.data;
  } catch (error) {
    // Handle error
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          `${NOTIFICATIONS.ERROR.SERVER} (${error.response?.status})` ||
          NOTIFICATIONS.ERROR.SYSTEM
      );
    }
    throw new Error(NOTIFICATIONS.ERROR.UNDEFINED);
  }
};
