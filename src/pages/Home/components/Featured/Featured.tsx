import { Headset, Package, ShoppingBag, Truck } from "lucide-react";
import FeaturedCard from "@/components/common/Card/FeaturedCard";

const featuredList = [
  {
    name: "Free Shipping",
    icon: <Truck size={44} strokeWidth={1}/>,
    description: "Free shipping with discount",
  },
  {
    name: "Great Support",
    icon: <Headset size={44} strokeWidth={1}/>,
    description: "Instant access to Contact",
  },
  {
    name: "100% Sucure Payment",
    icon: <ShoppingBag size={44} strokeWidth={1}/>,
    description: "We ensure your money is save",
  },
  {
    name: "Money-Back Guarantee",
    icon: <Package size={44} strokeWidth={1}/>,
    description: "30 days money-back guarantee",
  },
];

const Featured = () => {
  return (
    <div className="container rounded-xl lg:-translate-y-11 xl:-translate-y-1/3 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-1 px-4 bg-white rounded-xl shadow-xl">
        {featuredList.map((item, index) => (
          <FeaturedCard key={index} icon={item.icon} name={item.name} description={item.description}/>
        ))}
      </div>
    </div>
  );
};

export default Featured;
