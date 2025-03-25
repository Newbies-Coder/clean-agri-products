import CartItem from "../CartItem";
import { useGetCarts } from "@/actions/cart.action";
import { Skeleton } from "@/components/ui/skeleton";

const CartList = () => {
  const { data, isLoading } = useGetCarts();
  if (isLoading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <tr key={index}>
            <td colSpan={5}>
              <Skeleton className="h-[100px] m-2" />
            </td>
          </tr>
        ))}
      </>
    );
  }
  if (!Array.isArray(data?.carts) || data?.carts.length === 0) {
    return (
      <tr>
        <td colSpan={5} className="text-center p-4 text-gray-500">
          Giỏ hàng trống
        </td>
      </tr>
    );
  }
  return (
    <>
      {data?.carts.map((item) => (
        <CartItem
          key={item.productAttributeId}
          id={data._id}
          productId={item.productDetails._id}
          productAttributeId={item.productAttributeId}
          name={item.productDetails.name}
          thumbnail={item.productDetails.thumbnail_url}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};

export default CartList;
