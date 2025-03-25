import ProductCard from "@/components/common/Card/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProducts } from "@/actions/product.action";

const page = 1;
const limit = 10;
export default function ProductList() {
  const { data, isLoading } = useProducts(page, limit);
  return (
    <section className="container mx-auto py-10 px-5 md:px-0">
      <h3 className="text-3xl font-semibold pb-8 text-center">New Products</h3>

      <Carousel
        opts={{
          align: "start", // Align slides to the start
          loop: false, // Enable infinite looping
        }}
      >
        <CarouselContent className="pt-10">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            isLoading || data.items.map((product: any) => (
                <CarouselItem
                  key={product._id}
                  className="sm:basis-1/3 lg:basis-1/3 xl:basis-1/5"
                >
                  <ProductCard
                    id={product._id}
                    name={product.name}
                    price={40}
                    discount={40}
                    image={product.thumbnail_url}
                    rating={product.rating}
                  />
                </CarouselItem>
              ))
          }
        </CarouselContent>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex justify-between">
          <CarouselPrevious className="active:bg-primary active:text-primary-foreground" />
          <CarouselNext className="active:bg-primary active:text-primary-foreground" />
        </div>
      </Carousel>
    </section>
  );
}
