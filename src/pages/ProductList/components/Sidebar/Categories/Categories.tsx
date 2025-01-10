import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categories } from "@/mocks/category";

const Categories = () => {
  return (
    <ScrollArea className="h-80">
      <RadioGroup defaultValue={categories[0].id}>
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2 py-2">
            <RadioGroupItem value={category.id} id={category.id} />
            <label htmlFor={category.id} className="text-[15px] truncate w-full">
              {category.name}
              <span className="inline-block ml-1 text-gray-500">({category.productQuantity})</span>
            </label>
          </div>
        ))}
      </RadioGroup>
    </ScrollArea>
  );
};

export default Categories;
