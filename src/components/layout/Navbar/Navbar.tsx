import { Link, useLocation } from "react-router-dom";
import { ChevronDown, PhoneCall } from "lucide-react";
import { navItems } from "@/mocks/nav";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-[60px] bg-[#333]">
      <div className="container flex items-center mx-auto h-full justify-between">
        <div className="flex items-center h-full">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`text-gray-400 duration-200 font-semibold text-[15px] hover:text-white ${pathname == item.path && "!text-white"}`}
              >
                {item.title}
                {item.icon && (
                  <ChevronDown
                    className="inline-block mb-1 ml-0.5"
                    size={20}
                    strokeWidth={1.8}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-white ">
          <PhoneCall className="inline-block mr-2" />
          (219) 555-0114
        </div>
      </div>
    </div>
  );
};

export default Navbar;
