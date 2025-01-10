import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import SaleOff2 from "@/assets/images/SaleOff-2.png";
import HotProductCard from "@/components/common/Card/HotProductCard";
import { products } from "@/mocks/product";
import Filters from "./Filters";

const Sidebar = () => {
  return (
    <section>
      {/* Filter Button */}
      <div>
        <Button className="rounded-full w-32 h-11">
          Filter <SlidersHorizontal className="ml-1" />
        </Button>
      </div> 
      
      {/* Filters */}
      <Filters />

      {/* Discount Banner */}
      <div className="w-full mt-1">
        <img
          src={SaleOff2}
          alt="sale off product"
          className="w-full object-cover rounded-xl"
        />
      </div>

      {/* Sale Products */}
      <div className="py-2">
        <h4 className="text-xl font-medium py-5">Sale Products</h4>
        <div className="flex flex-col gap-y-2">
          <HotProductCard product={products[0]} />
          <HotProductCard product={products[2]} />
          <HotProductCard product={products[2]} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
