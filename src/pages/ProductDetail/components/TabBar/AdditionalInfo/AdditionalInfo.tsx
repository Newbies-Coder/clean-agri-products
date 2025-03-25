import { useProductDetail } from "@/actions/product.action";
import HotProductCard from "@/components/common/Card/HotProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { products } from "@/mocks/product";


const AdditionalInfo = ({ productId }: { productId: string }) => {
    const { data, isLoading } = useProductDetail(productId);
    if (isLoading) return <Skeleton className="h-[500px]" />;
    const {
      attribute,
      category,
    } = data!;
  return (
    <div className="container grid grid-cols-1 gap-4 pb-5">
      <div className="flex flex-col lg:flex-row gap-4 max-lg:gap-8 lg:justify-start">
        <ul className="md:basis-5/12 self-center lg:pr-5">
          <li className="py-2 flex">
            <span className="min-w-32">Weight:</span>
            <span className="flex-1">{attribute.weight}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Category:</span>
            <span>{category.name}</span>
          </li>
          <li className="py-2 flex">
            <span className="min-w-32">Unit of measurement:</span>
            <span>{attribute.unit_of_measurement}</span>
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
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-5">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AdditionalInfo;
