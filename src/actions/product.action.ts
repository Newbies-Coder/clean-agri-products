import { getProductDetail, getProducts } from "@/apis/product.api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

export const useProductDetail = (productId: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetail(productId),
    initialData: () => queryClient.getQueryData(['product', productId]), // Cache before fetching
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};