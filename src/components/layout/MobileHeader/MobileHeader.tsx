import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  UsersRound,
  ShoppingCart,
  NotepadText,
  User,
  LogOut,
  KeyRound,
} from "lucide-react";
import { AlignJustify } from "lucide-react";
import Logo from "@/assets/svg/Logo-white.svg";
import Logo_b from "@/assets/svg/Logo-black.svg";

const navItems = [
  { title: "Home", icon: <Home size={26} />, path: "/"},
  { title: "Products", icon: <ShoppingBag size={26} />, path: "/products"},
  { title: "Blogs", icon: <NotepadText size={26} />, path: "/blogs" },
  { title: "About us", icon: <UsersRound size={26} />, path: "/about" },
];

const MobileHeader = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false); // Open/Close sheet
  const isAuth = false;
  const handleClose = () => setIsOpen(false);

  return (
    <header className="flex md:hidden sticky top-0 z-30 h-16 items-center bg-[#333] text-white">
      <div className="w-full mx-auto px-5 flex justify-between items-center">
        <div className="text-xl font-bold">
          <img src={Logo} alt="Logo-mobile" className="h-8" />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <AlignJustify size={30} />
          </SheetTrigger>
          <SheetContent className="w-96">
            <SheetHeader className="border-b pb-6 border-gray-300">
              <SheetTitle className="flex justify-center mt-3">
                <img src={Logo_b} alt="Logo-mobile-sheet" />
              </SheetTitle>
              <SheetDescription className="text-center">
                Our clean foods
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-x-6 gap-y-2 py-7 text-lg mx-auto font-medium">
              {navItems.map((item) => (

                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex uppercase items-center space-x-7 p-4 rounded-md active:bg-green-700 active:text-primary-foreground ${
                    item.path === pathname &&
                    "text-primary-foreground bg-green-700 "
                  }`}
                  onClick={handleClose}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
              {isAuth ? (
                <>
                <Link
                    to="/profile"
                    className={`flex uppercase items-center space-x-7 p-4 rounded-md active:bg-green-700 active:text-primary-foreground`}
                    onClick={handleClose}
                  >
                    <ShoppingCart size={26} />
                    <span>Cart</span>
                  </Link>
                  <Link
                    to="/profile"
                    className={`flex uppercase items-center space-x-7 p-4 rounded-md active:bg-green-700 active:text-primary-foreground`}
                    onClick={handleClose}
                  >
                    <User size={26} />
                    <span>Profile</span>
                  </Link>

                  <button
                    className={`flex uppercase items-center space-x-7 p-4 rounded-md text-red-500 active:text-primary-foreground`}
                    onClick={handleClose}
                  >
                    <LogOut size={26} />
                    <span>Log-out</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className={`flex uppercase items-center space-x-7 p-4 rounded-md active:bg-green-700 active:text-primary-foreground`}
                  onClick={handleClose}
                >
                  <KeyRound size={26} />
                  <span>Sign in</span>
                </Link>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
