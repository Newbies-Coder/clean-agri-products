import { Link } from "react-router-dom";
import { Rate } from "antd";
import { Button } from "@/components/ui/button";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import type { ProductType } from "@/@types/product.type";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, discount, image, rating } = product;
  return (
    <div className="group border hover:border-primary hover:shadow-lg transition duration-200 rounded-lg">
      <Link to={`#`}>
        {/* Product Image */}
        <div className="group relative block overflow-hidden">
          <img
            src={image}
            loading="lazy"
            alt={name}
            className="w-full transition duration-200 hover:scale-110"
          />

          {
            /* Discount Badge */
            discount && (
              <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm tracking-wider font-medium text-white">
                -{discount}%
              </span>
            )
          }
          <div className="absolute right-0 top-0.5 flex-col gap-2 p-4 flex lg:group-hover:flex lg:hidden">
            <button className="h-10 w-10 rounded-full border border-slate-50 flex justify-center items-center bg-slate-100 hover:bg-primary hover:text-primary-foreground ">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <Link
              to={`#`}
              className="h-10 w-10 rounded-full border border-slate-50 flex justify-center items-center bg-slate-100 hover:bg-primary hover:text-primary-foreground "
            >
              <Eye size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-b-lg p-4">
          {/* Product Info */}
          <div className="flex flex-col gap-1">
            <h6 className="text-slate-600 transition duration-100 text-sm group-hover:text-primary">
              {name}
            </h6>
            <div>
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
            </div>
            {/* Rating */}
            <Rate
              allowHalf // half star
              disabled // read-only
              defaultValue={rating}
              className="text-[#ff8a00] text-sm"
            />
          </div>

          {/* Add to cart */}
          <Button
            variant={"outline"}
            className="bg-slate-200 hover:bg-primary hover:text-primary-foreground duration-150 rounded-full p-0 h-10 w-10"
          >
            <ShoppingCart size={28} />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
