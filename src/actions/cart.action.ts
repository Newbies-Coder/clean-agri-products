import { addToCart, deleteCart, getCarts, updateCart } from "@/apis/cart.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
    select: (data) => data,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes to prevent unnecessary requests
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] }); // Delete cache & refetch
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] }); // Delete cache & refetch
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] }); // Delete cache & refetch
    },
  });
};
