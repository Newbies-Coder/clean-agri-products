import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Categories from "../Categories";
  import PriceSlider from "../PriceSlider";
  import Rating from "../Rating";
  import ProductTags from "../ProductTags";

const Filters = () => {
  return (
    <Accordion
      type="multiple"
      defaultValue={["categories", "price", "rating", "tag"]} // All of AccordionContent are shown when loaded
      className="pt-2"
    >
      {/* Filter by Categories */}
      <AccordionItem value="categories">
        <AccordionTrigger className="text-xl">All Categories</AccordionTrigger>
        <AccordionContent>
          <Categories />
        </AccordionContent>
      </AccordionItem>

      {/* Filter by Price */}
      <AccordionItem value="price">
        <AccordionTrigger className="text-xl">Price</AccordionTrigger>
        <AccordionContent className="py-4">
          <PriceSlider />
        </AccordionContent>
      </AccordionItem>

      {/* Filter by Rating */}
      <AccordionItem value="rating">
        <AccordionTrigger className="text-xl">Rating</AccordionTrigger>
        <AccordionContent className="">
          <Rating />
        </AccordionContent>
      </AccordionItem>

      {/* Filter by Product Tags */}
      <AccordionItem value="tag" className="border-b-0">
        <AccordionTrigger className="text-xl">Product Tag</AccordionTrigger>
        <AccordionContent className="">
          <ProductTags />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
