import { ProductType } from "@/@types/product.type";
import HotProductCard from "@/components/common/Card/HotProductCard";
import SaleOff1 from "@/assets/images/SaleOff-1.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
interface HotProductListProps {
  data: ProductType[];
}
const HotProductList: React.FC<HotProductListProps> = ({ data }) => {
  const product0 = data[0];
  return (
    <section className="container py-10 px-5 sm:px-0">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4 ">
        <div className="flex flex-col gap-x-5 gap-y-3 lg:basis-1/2 xl:basis-1/4">
          <h4 className="text-xl font-medium text-center sm:text-start">Hot Deals</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
          </div>
        </div>
        <div className="flex flex-col gap-x-5 gap-y-3 lg:basis-1/2 xl:basis-1/4">
          <h4 className="text-xl font-medium text-center sm:text-start">Best Seller</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
          </div>
        </div>
        <div className="flex flex-col gap-x-5 gap-y-3 lg:basis-1/2 xl:basis-1/4">
          <h4 className="text-xl font-medium text-center sm:text-start">Top Rated</h4>
          <div className="grid sm:grid-cols-2  lg:grid-cols-1 gap-3">
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
            <HotProductCard product={product0} />
          </div>
        </div>
        <div className="lg:basis-1/2 xl:basis-1/4 mx-auto h-full">
          <div className="h-full relative">
            <img
              src={SaleOff1}
              alt="sale off product"
              className="h-full object-cover rounded-xl"
            />
            <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-12 w-full">
              <p className="uppercase text-primary-foreground text-center text-sm">
                Spring sale
              </p>
              <p className="text-primary-foreground text-4xl text-center font-medium">
                75% off
              </p>
              <Link
                to="/products"
                className="text-primary shadow-xl px-8 py-3 bg-primary-foreground rounded-full font-semibold inline-block mt-2"
              >
                Shop now
                <ArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProductList;
