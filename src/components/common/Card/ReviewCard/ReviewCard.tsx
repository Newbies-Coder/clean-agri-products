import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Rate } from "antd";

interface ReviewCardProps {
  avatarUrl: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  avatarUrl,
  customerName,
  rating,
  comment,
  date,
}) => {
  return (
    <div className="flex flex-col gap-3 py-4 md:py-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatarUrl} />
            </Avatar>

            <div className="flex flex-col">
              {/* Name */}
              <span className="font-medium text-base">{customerName}</span>

              {/* Rating */}
              <Rate
                allowHalf // half star
                disabled // read-only
                defaultValue={rating}
                className="text-[#ff8a00] text-sm"
              />
            </div>
          </div>
        </div>
        {/* Date */}
        <span className="block text-gray-500">{date}</span>
      </div>

      {/* Comment */}
      <p className="text-gray-700 line-clamp-4 mt-2">{comment}</p>
    </div>
  );
};

export default ReviewCard;
