import banner from "@/assets/images/DiscountBannar.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const DiscountBanner = () => {
  return (
    <section className="container rounded-lg">
      <div className="relative flex items-center">
        {/* Banner Image */}
        <img
          src={banner}
          alt="discount banner"
          className="w-full h-[22.5rem] object-cover rounded-xl"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10 bg-black opacity-60 "></div>

        {/* Discount info */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 xl:translate-x-1/2 text-white z-20 ">
          <p className="uppercase">Summer Sale</p>
          <p className="uppercase text-4xl md:text-6xl py-5">
            <span className="font-medium text-[#ff8a00]">37%</span> off
          </p>
          <p className="font-normal text-gray-400 text-sm">
            Free on all your order, Free Shipping <br /> and 30 days money-back
            guarantee
          </p>
          <Link
            to="/products"
            className="text-primary-foreground shadow-xl px-8 py-3 bg-primary rounded-full font-semibold inline-block mt-6"
          >
            Shop now
            <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
