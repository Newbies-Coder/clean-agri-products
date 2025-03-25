import CartTotal from "./components/CartTotal";
import CartList from "./components/CartList";

const Cart = () => {
  return (
    <section className="container mx-auto max-sm:px-5 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h2>
      <div className="flex max-lg:flex-col gap-6">
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
            <tbody className="divide-y h-full">
              <CartList />
            </tbody>
          </table>
        </div>
        <div className="lg:basis-4/12 border rounded-md p-6">
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export default Cart;
