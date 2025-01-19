import HotProductCard from "@/components/common/Card/HotProductCard";
import ProductCard from "@/components/common/Card/ProductCard";
import { products } from "@/mocks/product";

interface AdditionalInfoProps {
  weight: number;
  color: string;
  type: string;
  category: string;
  stockStatus: string;
  tags: string[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  weight,
  category,
  color,
  stockStatus,
  tags,
  type,
}) => {
  return (
    <div className="container grid grid-cols-1 gap-4 pb-5">
      <div className="flex flex-col lg:flex-row gap-4 max-lg:gap-8 lg:justify-start">
        <ul className="md:basis-5/12 self-center lg:pr-5">
          <li className="py-2 flex">
            <span className="min-w-32">Tags:</span>
            <span>
              {tags.map((tag, index) => (
                <span key={index} className="text-gray-600 hover:font-medium">
                  {tag}
                  {index < tags.length - 1 && " • "}
                </span>
              ))}
            </span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Weight:</span>
            <span className="flex-1">{weight}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Color:</span>
            <span>{color}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Type:</span>
            <span>{type}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Category:</span>
            <span>{category}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Stock status:</span>
            <span>{stockStatus}</span>
          </li>
        </ul>

        {/* Recommending some best seller products */}
        <div className="md:basis-7/12">
          <h5 className="text-lg font-medium text-center mb-4">Best Seller</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* display first 4 products in products list */}
            {products.slice(0, 4).map((product) => (
              <HotProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="pt-10">
        <h5 className="text-2xl font-semibold text-center mb-4">
          Related Products
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-5">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
