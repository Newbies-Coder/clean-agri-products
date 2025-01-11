import { Toggle } from "@/components/ui/toggle";

// List product tags
const tags = [
  "Healthy",
  "Low Fat",
  "Vegetarian",
  "Kids Foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Launch",
  "Dinner",
  "Breakfast",
  "Fruit",
];
const ProductTags = () => {
  return (
    <div className="pr-4">
      {tags.map((tag) => (
        <Toggle
          value={tag}
          className="inline-block py-1 px-4 rounded-full bg-gray-100 text-base my-1 mr-2 font-normal"
        >
          {tag}
        </Toggle>
      ))}
    </div>
  );
};

export default ProductTags;
