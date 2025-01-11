import ProductCard from "@/components/common/Card/ProductCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { products } from "@/mocks/product";
import { Pagination } from "antd";
import Filters from "../Sidebar/Filters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Products = () => {
  return (
    <section className="mx-auto">
      {/* Filters on mobile */}
      <div className="block lg:hidden ">
        <Sheet>
          <SheetTrigger className="w-full text-end mb-3">
            <Button className="rounded-full h-11 w-36">
              Filter <SlidersHorizontal className="ml-1" />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <ScrollArea className="h-[86vh]">
              <Filters />
            </ScrollArea>
            <div className="h-[14vh] flex items-center">
              <Button className="rounded-full w-full h-11">
                Filter <SlidersHorizontal className="ml-1" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-slate-500 hidden md:inline">Sort by:</span>
        <Select>
          <SelectTrigger className="w-32 sm:w-48 h-10 text-base text-gray-700 rounded-md">
            <SelectValue placeholder="Lastest" />
          </SelectTrigger>
          <SelectContent defaultValue={"Lastest"}>
            <SelectItem value="Lastest" className="text-base">
              Lastest
            </SelectItem>
            <SelectItem value="Newest" className="text-base">
              Newest
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="capitalize ml-auto text-lg">
          <strong>52</strong> results found
        </p>
      </div>

      {/* List products */}
      <ScrollArea className="md:h-[2000px] no-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product) => (
            <>
              <ProductCard key={product.id} product={product} />
              <ProductCard key={product.id} product={product} />
            </>
          ))}
        </div>
      </ScrollArea>

      {/* Pagination */}
      <div className="flex justify-center py-10 w-full">
        <Pagination defaultCurrent={1} total={50} className="scale-105 sm:scale-125"/>
      </div>
    </section>
  );
};

export default Products;
