import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type BannerItemProps = {
    title?: string;
    description?: string;
    imageUrl?: string;
    type?: string;
}

const BannerItem = ({title, description, imageUrl, type}: BannerItemProps) => {
  return (
    <section className="flex flex-col justify-between lg:flex-row pt-10 lg:py-5 container items-center">
      <div className={`flex flex-col justify-center text-center lg:py-12 lg:text-left lg:w-5/12 xl:w-6/12 xl:py-24 ${type == 'right' && 'lg:order-2'}`}>
        <p className="font-semibold text-primary uppercase tracking-wide">
          Welcome to shop
        </p>

        <h1 className="lg:mb-8 text-5xl font-bold sm:text-6xl mb-7">
          {title}
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          {description}
          <div className=""></div>
        </p>

        <div className="flex gap-2.5 sm:flex-row justify-center lg:justify-start">
          <Link
            to="/products"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground outline-none transition duration-100 hover:bg-primary/80 focus-visible:ring active:bg-green-600 md:text-base"
          >
            Shop now
            <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      <div className={`lg:h-auto lg:w-7/12 xl:w-8/12 flex items-center relative mx-5 sm:mx-0 ${type === 'right' && 'lg:order-1 lg:right-10'}`}>
        <img
          src={imageUrl}
          loading="lazy"
          alt="vegetables"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default BannerItem;
