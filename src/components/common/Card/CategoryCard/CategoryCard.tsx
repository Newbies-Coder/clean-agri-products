import { Category } from "@/@types/category.type";
interface CategoryCardProps {
  category: Category;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="group border rounded-md hover:border-primary hover:shadow-lg duration-200">
      <div className="pt-4">
        <img
          src={image}
          alt={name}
          className="lg:hover:scale-105 mx-auto duration-200"
        />
      </div>
      <p className="text-center text-xs md:text-lg font-medium py-5 group-hover:text-primary truncate px-4">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
