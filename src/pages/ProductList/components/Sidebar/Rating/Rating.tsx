import { Checkbox } from "@/components/ui/checkbox";
import { Rate } from "antd";

const ratings = [5, 4, 3, 2, 1];

const Rating = () => {
  return (
    <div className="flex flex-col gap-4 pt-5 pb-1">
      {ratings.map((rating) => (
        <div key={rating} className="flex items-center">
          <Checkbox id={rating + "star"} />
          <label htmlFor={rating + "star"}>
            <Rate
              defaultValue={rating}
              className="text-[#ff8a00] text-base mx-2"
              disabled
            />
            <span className="text-base">
              {rating.toFixed(1)} {rating !== 5 && "& up"}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Rating;
