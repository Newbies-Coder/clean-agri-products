import { Rate, Skeleton } from "antd";
import { useState } from "react";
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Share2,
  ShoppingCart,
} from "lucide-react";
import { useProductDetail } from "@/actions/product.action";

const ProductInfo = ({ productId }: { productId: string }) => {
  // Fetch product detail
  const { data, isLoading } = useProductDetail(productId);

  // Function to handle changes in the product quantity (increment or decrement)
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };
  if (!data) return <Skeleton className="h-[500px]" />;
  if (isLoading) return <Skeleton className="h-[500px]" />;

  const {
    name,
    rating,
    description,
    attribute,
    hot,
    origin,
    category,
    supplier,
    numberOfReview,
    hashtags,
  } = data!;
  const { original_price, discount_price } = attribute;

  // Calculate the price based on the discount
  const calPrice = () => {
    if (!original_price) return "N/A";
    if (discount_price) {
      return (original_price * (1 - discount_price / 100)).toFixed(2);
    }
    return original_price.toFixed(2);
  };


  return (
    <section className="flex flex-col gap-4 max-sm:px-5">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div>
          <div className="flex max-[432px]:flex-col gap-4 max-[432px]:items-start items-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">{name}</h2>
            {hot && (
              <span className="px-3 py-1 text-green-600 bg-green-100 rounded-full text-sm">
                HOT
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div>
              <Rate
                allowHalf // half star
                disabled // read-only
                defaultValue={rating}
                className="text-[#ff8a00] text-sm"
              />
            </div>
            <span className="text-gray-600">{numberOfReview} Review</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{origin}</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        {discount_price && (
          <span className="text-2xl text-gray-400 line-through">
            ${original_price.toFixed(2)}
          </span>
        )}
        <span className="text-2xl font-medium text-green-700">${calPrice()}</span>
        {discount_price && (
          <span className="text-red-600 bg-red-100 rounded-full px-3 py-0.5 ml-4">
            {discount_price}% Off
          </span>
        )}
      </div>

      {/* Brand */}
      <div className="flex items-center justify-between border-t pt-6 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Brand: {supplier.contact_name}</span>
          {/* <img src={brand.logo} alt={brand.name} className="h-8" /> */}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Share item:</span>
          <div className="flex gap-2">
            <Facebook className="w-5 h-5 text-blue-600" />
            <Twitter className="w-5 h-5 text-blue-400" />
            <Share2 className="w-5 h-5 text-gray-600" />
            <Instagram className="w-5 h-5 text-pink-600" />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 pb-5">{description}</p>

      {/* Add to Cart */}
      <div className="flex items-center gap-4 border-y py-4">
        <div className="flex items-center border rounded-full px-2 py-1">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-9 h-9 flex justify-center items-center text-gray-700 hover:bg-gray-300 rounded-full bg-gray-200 font-semibold text-[30px] duration-200"
          >
            -
          </button>
          <span className="w-8 text-center py-2">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-9 h-9 flex justify-center items-center text-gray-700 hover:bg-gray-300 rounded-full bg-gray-200 font-semibold text-[22px] duration-200"
          >
            +
          </button>
        </div>
        <button className="flex-1 flex items-center justify-center gap-4 bg-primary text-primary-foreground py-3 rounded-full hover:bg-primary/80 transition-colors text-lg font-medium">
          <span className="max-[432px]:hidden">Add to Cart</span>
          <ShoppingCart className="max-[432px]:block hidden sm:block" />
        </button>
        <button className="p-3 border rounded-full bg-primary/10 hover:bg-primary/20 duration-200">
          <Heart className="w-6 h-6" strokeWidth={1.3} />
        </button>
      </div>

      {/* Categories & Tags */}
      <div className="space-y-2 mt-1">
        <div className="flex gap-2">
          <span className="text-gray-600 font-medium">Category:</span>
          <span className="text-green-600">{category.name}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-gray-600">Tag:</span>
          {hashtags.length>0 ? hashtags.map((tag, index) => (
            <span key={index} className="text-gray-600 hover:font-medium">
              {tag.name}
              {index < hashtags.length - 1 && " •"}
            </span>
          )) : <span className="text-gray-400">No Tag</span>}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
