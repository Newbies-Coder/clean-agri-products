import CartItem from "./components/CartItem";
import { cartItems } from "@/mocks/cart";
import CartTotal from "./components/CartTotal";
const Cart = () => {
  return (
    <section className="container mx-auto max-sm:px-5 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h2>
      <div className="flex max-lg:flex-col lg:justify-between gap-6">
        <div className="relative lg:basis-8/12 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-gray-500 rtl:text-right">
            <thead className="bg-gray-100 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 uppercase">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 uppercase ">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 uppercase max-md:hidden">
                  Subtotal
                </th>
                <th scope="col" className="px-6 py-3">
                  {/* Action */}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {cartItems.slice(0, 3).map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:basis-4/12 border rounded-md p-6">
        <CartTotal/>
        </div>
      </div>
    </section>
  );
};

export default Cart;
