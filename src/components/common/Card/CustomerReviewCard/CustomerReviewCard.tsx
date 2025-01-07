import { Rate } from "antd";
import quote from "@/assets/svg/Quote.svg";
import { CustomerReview } from "@/@types/customer-review";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface CustomerReviewCardProps {
  data: CustomerReview;
}

const CustomerReviewCard: React.FC<CustomerReviewCardProps> = ({ data }) => {
  const { review, avatarUrl, customerName, role, rating } = data;
  
  return (
    <div className="flex flex-col gap-3 rounded-md border p-4 md:p-6 bg-white shadow-lg">
      {/* icon */}
      <div className="pb-2">
        <img src={quote} alt="quote" />
      </div>

      {/* User's review */}
      <p className="text-gray-600 text-sm line-clamp-4">{review}</p>

      <div className="flex justify-between items-center pt-5">
        {/* User's Infomation */}
        <div className="flex gap-x-3 items-center">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatarUrl} />
          </Avatar>
          <div>
            <span className="block text-sm font-semibold md:text-base">
              {customerName}
            </span>
            <span className="block text-sm text-slate-400">{role}</span>
          </div>
        </div>

        {/* Rating */}
        <Rate
          disabled
          defaultValue={rating}
          className="text-[#ff8a00] text-base"
        />
      </div>
    </div>
  );
};

export default CustomerReviewCard;
