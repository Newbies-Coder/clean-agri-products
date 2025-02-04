import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cartItems } from "@/mocks/cart";
import { paymentMethods } from "@/mocks/paymentMethod";
import { Button } from "@/components/ui/button";
import OrderItem from "./OrderItem";

const OrderSummary = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;
  return (
    <div className="rounded-lg border p-5">
      <h3 className="text-xl font-medium mb-5">Order Summary</h3>

      {/* Order Product */}
      <div>
        {cartItems.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            name={item.name}
            thumbnail={item.thumbnail}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>

      {/* Subtotal */}
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
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-xl font-medium my-5">Payment method</h3>
        <RadioGroup defaultValue={paymentMethods[0].id}>
          {paymentMethods.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 py-2">
              <RadioGroupItem value={item.id} id={item.id} />
              <label htmlFor={item.id} className="text-[15px] truncate w-full">
                {item.name}
              </label>
            </div>
          ))}
        </RadioGroup>
        {/* Place Order */}
        <Button className="w-full py-6 bg-primary text-primary-foreground text-lg font-medium rounded-full mt-10">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
