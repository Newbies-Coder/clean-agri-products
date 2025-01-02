import Carousel from "@/assets/images/carousel-2.avif";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <section className="h] relative flex flex-col flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-primary sm:text-xl md:mb-8">
          Very proud to introduce
        </p>
        <h1 className="mb-8 text-center text-5xl sm:text-6xl font-bold text-white md:mb-12">
        Fresh & Healthy Organic Food
        </h1>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            to="/products"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground outline-none transition duration-100 hover:bg-primary/80 focus-visible:ring active:bg-green-600 md:text-base"
          >
            Shop now
            <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
      <img
        src={Carousel}
        loading="lazy"
        alt="carousel vegetables"
        className="lg:absolute inset-0 w-full"
      />

      <div className="hidden lg:absolute inset-0 bg-gray-500 lg:bg-gray-200 mix-blend-multiply"></div>

    </section>
  );
};

export default Banner2;
