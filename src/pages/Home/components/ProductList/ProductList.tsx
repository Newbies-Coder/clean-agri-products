import ProductCard from "@/components/common/Card/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProductType } from "@/@types/product.type";

interface ProductListProps {
  data: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <section className="container mx-auto py-10 px-5 md:px-0">
      <h3 className="text-3xl font-semibold pb-8 text-center">Popular Products</h3>

      <Carousel
        opts={{
          align: "start", // Align slides to the start
          loop: true, // Enable infinite looping
        }}
      >
        <CarouselContent className="pt-10">
          {data.map((product) => (
            <CarouselItem
              key={product.id}
              className="sm:basis-1/3 lg:basis-1/3 xl:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex justify-between">
          <CarouselPrevious className="active:bg-primary active:text-primary-foreground"/>
          <CarouselNext  className="active:bg-primary active:text-primary-foreground"/>
        </div>

      </Carousel>
    </section>
  );
};

export default ProductList;
