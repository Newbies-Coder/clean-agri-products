import axios from "axios";
import { NOTIFICATIONS } from "@/constants/notifications";
import axiosInstance from "@/lib/axiosInstance";
import type { Product } from "@/@types/product.type";

export const getProducts = async (
  page?: number,
  limit?: number,
  search?: string,
  categoryId?: string,
  sort_by?: string,
  sort_order?: string
) => {
  try {
    let response;
    if (categoryId) {
      response = await axiosInstance.get(`/products/category/${categoryId}`);
    } else if (search) {
      response = await axiosInstance.post(`/products/search`, {
        keyword: search,
      });
    } else {
      response = await axiosInstance.get(`/products/pagination`, {
        params: {
          page,
          limit,
          sort_by,
          sort_order,
        },
      });
    }
    return response.data.data;
  } catch (error) {
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

export const getProductDetail = async (id: string): Promise<Product>  => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data.data;
  } catch (error) {
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