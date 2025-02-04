import { CircleX } from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

interface CartProps {
  id: string;
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}
const CartItem: React.FC<CartProps> = ({
  id,
  thumbnail,
  name,
  price,
  quantity,
}) => {
  const [quantityChange, setQuantityChange] = useState(quantity);

  // Function to handle changes in the product quantity (increment or decrement)
  const handleQuantityChange = useCallback((change: number) => {
    setQuantityChange((prev) => Math.max(1, prev + change));
  }, []);

  return (
    <>
      <tr className="bg-white border-b-0">

        {/* Image & Name */}
        <td className="p-2">
          <Link to={`/products/${id}`} className="group flex items-center">
            <img
              src={thumbnail}
              className="w-24 max-sm:w-20 max-w-full rounded-lg border-solid border-gray-700 md:w-32 group-hover:scale-90 duration-200"
              alt={name}
            />
            <p className="ml-3 text-base text-gray-800 group-hover:text-primary group-hover:underline">{name}</p>
          </Link>
        </td>

        {/* Price */}
        <td className="px-6 py-2 font-semibold text-gray-900 ">
          ${price.toFixed(2)}
        </td>

        {/* Quantity */}
        <td className="px-6 py-2">
          <div className="flex items-center border rounded-full px-2 py-1 w-[7.5rem]">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-9 h-9 flex justify-center items-center text-gray-700 hover:bg-gray-300 rounded-full bg-gray-200 font-semibold text-[30px] duration-200"
            >
              -
            </button>
            <span className="w-8 text-center py-2">{quantityChange}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-9 h-9 flex justify-center items-center text-gray-700 hover:bg-gray-300 rounded-full bg-gray-200 font-semibold text-[22px] duration-200"
            >
              +
            </button>
          </div>
        </td>

        {/* Subtotal */}
        <td className="px-6 py-2 font-semibold text-gray-900 max-md:hidden">
          ${(price * quantityChange).toFixed(2)}
        </td>

        {/* Action */}
        <td className="px-4 py-2">
          <button className="text-red-600 font-semibold hover:scale-110 duration-200 hover:text-red-400">
            <CircleX />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
