import { Link } from "react-router-dom";
import { useGetCarts } from "@/actions/cart.action";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const CartTotal = () => {
  const { data, isLoading } = useGetCarts();
  if (isLoading) return <Skeleton className="h-28"></Skeleton>;
  // Calculate the subtotal of the cart
  const subtotal = data!.carts.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;
  return (
    <>
      <h3 className="text-2xl font-medium pb-3">Cart Total</h3>
      <div>
        <div className="flex justify-between mt-4 border-b pb-3">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-4 border-b pb-3">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-semibold">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-4 pb-3 text-lg">
          <span className="text-gray-600">Total:</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>

        <Button className="w-full text-white py-6 rounded-full hover:bg-primary-600 mt-10">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </>
  );
};

export default CartTotal;
