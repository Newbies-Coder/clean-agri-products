import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const PriceSlider = () => {
  const [price, setPrice] = useState([10, 500]);
  return (
    <div>
      <Slider
        value={price}
        onValueChange={(p) => setPrice(p)}
        min={1}
        max={1000}
        step={1}
      />
      <p className="text-base py-4">Price: <span className="font-medium">{price.join(" - ")}</span></p>
    </div>
  );
};

export default PriceSlider;
