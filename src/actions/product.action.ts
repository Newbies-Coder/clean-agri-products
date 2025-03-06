import { getProductDetail, getProducts } from "@/apis/product.api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (
  page?: number,
  limit?: number,
  search?: string,
  categoryId?: string,
  sort_by?: string ,
  sort_order?: string
) => {
  return useQuery({
    queryKey: [
      "products",
      page,
      limit,
      search,
      categoryId,
      sort_by,
      sort_order,
    ],
    queryFn: () =>
      getProducts(page, limit, search, categoryId, sort_by, sort_order),
  });
};

export const useProductDetail = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetail(id),
  });
};