import { Category } from "@/@types/category.type";
import CategoryCard from "@/components/common/Card/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface CategoriesProps {
  data: Category[];
}
const Categories: React.FC<CategoriesProps> = ({ data }) => {
  return (
    <section className="container py-10 px-5 sm:px-0">
      <h4 className="text-center text-3xl font-semibold pt-6 py-7">
        Shop by Top Categories
      </h4>
      <Carousel
        opts={{
          align: "start", // Align slides to the start
          loop: true, // Enable infinite looping
        }}
        className="pt-10"
      >
        <CarouselContent>
          {data.map((category) => (
            <CarouselItem key={category.id} className="basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <CategoryCard category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex justify-between">
          <CarouselPrevious className="active:bg-primary active:text-primary-foreground" />
          <CarouselNext className="active:bg-primary active:text-primary-foreground" />
        </div>
      </Carousel>
    </section>
  );
};

export default Categories;
