import { useLocation } from "react-router-dom";
import { List, LayoutDashboard, LogOut, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    name: "Profile",
    icon: <LayoutDashboard className="!w-6 !h-6" />,
    path: "/account/profile",
  },
  {
    name: "Orders History",
    icon: <List className="!w-6 !h-6" />,
    path: "/account/orders",
  },
  {
    name: "Cart",
    icon: <ShoppingBag className="!w-6 !h-6" />,
    path: "/cart",
  },
  {
    name: "Favorites",
    icon: <Heart className="!w-6 !h-6" />,
    path: "/account/favorites",
  },
];

export default function AccountSidebar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="flex flex-col rounded-lg w-64 pb-6 border shadow-lg border-l-2">
        <h3 className="text-2xl p-5 border-b">Navigation</h3>

        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`flex text-sm items-center gap-4 border-l-[3px] justify-start w-full rounded-none p-4 font-medium duration-200 hover:bg-gray-100 hover:text-gray-900 ${
              item.path === pathname
                ? "bg-primary/10 text-gray-900 border-primary"
                : "text-gray-600 border-transparent"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}

        <Button
          variant={"ghost"}
          className="w-full justify-start text-red-700 hover:text-red-500 px-4 py-7 text-sm gap-3"
        >
          <LogOut className="!w-6 !h-6 ml-1" /> Log out
        </Button>
      </nav>
    </>
  );
}
