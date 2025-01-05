interface FeaturedCardProps {
  icon: React.ReactElement;
  name: string;
  description: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  icon,
  name,
  description,
}) => {
  return (
    <div className="flex bg-white py-3 sm:py-6 gap-2 items-center">
      <div className="text-primary bg-gray-100 rounded-full p-3.5">{icon}</div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
