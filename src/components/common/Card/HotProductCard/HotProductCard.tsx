import { Link } from "react-router-dom";
import { Eye, Heart, ShoppingCart } from "lucide-react";

import { Rate } from "antd";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/@types/product.type";

interface HotProductCardProps {
  product: ProductType;
}

const HotProductCard: React.FC<HotProductCardProps> = ({ product }) => {
  const { name, price, discount, image, rating } = product;
  return (
    <div className="group border flex items-center hover:border-primary hover:shadow-lg w-full duration-200 rounded-md">
      <Link to={`#`} className="pr-3">
        {/* Product Image */}
        <div className="group relative block overflow-hidden h-28 w-28">
          <img
            src={image}
            loading="lazy"
            alt={name}
            className="w-full object-fit object-center transition duration-200 hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex items-center justify-between gap-2 rounded-b-lg">
        <div className="flex flex-col gap-1">
          <h6 className="text-slate-600 transition duration-100 text-sm group-hover:text-primary">
            {name}
          </h6>
          <div className="block group-hover:hidden">
            <span className="font-medium text-gray-800 lg:text-lg inline-block pr-1">
              {/* Current Price with discount */}$
              {discount
                ? (price * (1 - discount / 100)).toFixed(2)
                : price.toFixed(2)}
            </span>
            {discount && (
              // Original Price
              <span className="text-sm text-slate-400 line-through">
                {price.toFixed(2)}
              </span>
            )}
            {/* Rating */}
            <Rate
              allowHalf // half star
              disabled // read-only
              defaultValue={rating}
              className="text-[#ff8a00] text-sm block"
            />
          </div>

          {/* Action */}
          <div className="gap-2 group-hover:flex hidden py-1">
            {/* Add this product to cart */}
            <Button
              variant={"outline"}
              className="bg-slate-200 hover:bg-primary hover:text-primary-foreground duration-150 rounded-full h-10 w-10"
            >
              <ShoppingCart size={33} />
            </Button>

            {/* View product's details */}
            <Link
              to={`#`}
              className="h-10 w-10 rounded-full border border-slate-50 flex justify-center items-center bg-slate-100 hover:bg-primary hover:text-primary-foreground "
            >
              <Eye size={24} strokeWidth={1.5} />
            </Link>

            {/* Love this product */}
            <Button className="h-10 w-10 rounded-full border text-black border-slate-50 flex justify-center items-center bg-slate-100 hover:bg-primary hover:text-primary-foreground ">
              <Heart size={24} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProductCard;
