import type { Cart } from "@/@types/cart.type";
import { NOTIFICATIONS } from "@/constants/notifications";
import axiosInstance from "@/lib/axiosInstance";
import axios from "axios";

export const getCarts = async (): Promise<Cart> => {
  try {
    // Send request to server
    const { data } = await axiosInstance.get("/carts");
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

export const addToCart = async ({
  product_id,
  product_attribute_id,
  quantity = 1 ,
}: {
  product_id: string;
  product_attribute_id: string;
  quantity: number;
}) => {
  try {
    // Send request to server
    const { data } = await axiosInstance.post("/carts/items", {
      items: [
        {
          product_id,
          product_attribute_id,
          quantity,
        },
      ],
    });
    // Return data
    return data.carts;
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

export const updateCart = async ({
  id,
  product_id,
  product_attribute_id,
  quantity,
}: {
  id: string;
  product_id: string;
  product_attribute_id: string;
  quantity: number;
}) => {
  try {
    // Send request to server
    const { data } = await axiosInstance.put(`/carts/items/${id}`, {
      items: [
        {
          product_id,
          product_attribute_id,
          quantity,
        },
      ],
    });
    // Return data
    return data;
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

export const deleteCart = async ({
  id,
  productId,
}: {
  id: string;
  productId: string;
}) => {
  try {
    // Send request to server
    const { data } = await axiosInstance.delete(`/carts/items/${id}?product_id=${productId}`);
    // Return data
    return data;
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
