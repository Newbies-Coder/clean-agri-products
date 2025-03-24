import { Link } from "react-router-dom";
import Search from "../SearchBar";
import { Heart, ShoppingCart } from "lucide-react";
import Navbar from "../Navbar";
import Logo from "@/assets/svg/Logo-black.svg";
import { useGetCarts } from "@/actions/cart.action";

export default function Header() {
  const { data, isLoading } = useGetCarts();
  if (isLoading) return <div className="h-[93px]"></div>;
  // Calculate the subtotal of the cart
  const subtotal = data!.carts.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );

  return (
    <>
      <header className="sticky z-20 top-0 hidden md:block">
        <div className="h-[93px] bg-white border-b">
          <div className="flex container mx-auto justify-between items-center h-full 2xl:gap-40 md:gap-16">
            <div className="lg:basis-1/4">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="lg:basis-2/4">
              <Search />
            </div>
            <div className="lg:basis-1/4 flex items-center justify-end gap-4">
              <div>
                <Heart size={34} strokeWidth={1} />
              </div>
              <span className="text-2xl mb-1 font-thin text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart size={34} strokeWidth={1} />
                  <span className="absolute inline-block text-primary-foreground top-[-1px] right-0 px-[6px] py-[1px] rounded-full text-[10px] bg-green-700">
                   {data?.carts.length}
                  </span>
                </div>
                <Link to="/cart" className="hidden lg:block">
                  <p className="text-xs font-extralight tracking-wide">
                    Shopping cart:
                  </p>
                  <p className="font-semibold">${subtotal}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
}
