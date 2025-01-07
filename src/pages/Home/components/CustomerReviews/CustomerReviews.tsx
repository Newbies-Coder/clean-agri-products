import type { CustomerReview } from "@/@types/customer-review";
import CustomerReviewCard from "@/components/common/Card/CustomerReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomerReviewsProps {
  data: CustomerReview[];
}
const CustomerReviews: React.FC<CustomerReviewsProps> = ({ data }) => {
  return (
    <section className="bg-[#edf2ee] py-6 sm:py-8 lg:py-24 pb-32 px-5 sm:px-0">
      <div className="container">
        <h3 className="text-3xl font-semibold pb-8 text-center">
          Customer Reviews
        </h3>

        <Carousel
          opts={{
            align: "start", // Align slides to the start
            loop: true, // Enable infinite looping
          }}
        >
          <CarouselContent className="pt-10">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/3 shadow-lg"
              >
                <CustomerReviewCard data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 flex justify-between">
            <CarouselPrevious className="active:bg-primary active:text-primary-foreground" />
            <CarouselNext className="active:bg-primary active:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReviews;
