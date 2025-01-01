import Logo from "@/assets/svg/Logo-white.svg";
import { footerItems } from "@/mocks/footerLink";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-[#191919] text-center sm:text-left">
      <footer className="mx-auto container">
        <div className="mb-[3.5rem] grid grid-cols-2 gap-12 border-t pt-10 px-10 sm:px-0 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-[3.75rem]">
          <div className="col-span-full lg:col-span-2 sm:pr-8 xl:pr-[5rem]">
            <div className="mb-4 lg:-mt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                aria-label="logo"
              >
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            <p className="mb-6 text-[#999] text-[15px]">
              Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
          </div>

          {footerItems.map((item) => (
            <div key={item.title} >
              <div className="mb-4 tracking-wider text-white text-[17px] text-start">
                {item.title}
              </div>

              <nav className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <div key={link.name} className="text-start">
                    <Link
                      to={link.url}
                      className="text-[#999] transition duration-200 hover:text-primary active:text-primary"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-[#333] py-8 text-sm text-center text-gray-400">
          Ecobazar eCommerce © {new Date().getFullYear()}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
