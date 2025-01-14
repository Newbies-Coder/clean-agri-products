import { Rate } from "antd";
import type { CustomerReview } from "@/@types/customer-review.type";
import ReviewCard from "@/components/common/Card/ReviewCard";
import { Button } from "@/components/ui/button";

interface ReviewsProps {
  reviews: CustomerReview[];
}
const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between border-b py-4">
        <div className="flex flex-col gap-0.5">
          <span className="block font-bold">Total</span>

          <Rate
            allowHalf // half star
            disabled // read-only
            defaultValue={4}
            className="text-[#ff8a00] text-sm"
          />

          <span className="block text-sm text-gray-500">
            Bases on 27 reviews
          </span>
        </div>

        <Button variant={"outline"} className="p-6">
          Write a review
        </Button>
      </div>

      <div className="divide-y">
        {reviews.map((item, index) => (
          <ReviewCard
            key={index}
            avatarUrl={item.avatarUrl}
            customerName={item.customerName}
            rating={item.rating}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
      <div className="text-center mt-3">
        <Button variant="outline" className="p-5">
          Read more...
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
