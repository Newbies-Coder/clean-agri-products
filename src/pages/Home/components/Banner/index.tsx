import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { bannerItems } from "@/mocks/banner";
import BannerItem from "./BannerCustom";

const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000, // Thời gian giữa các slide (ms)
          stopOnInteraction: false, // Không dừng khi người dùng tương tác
        }),
      ]}
      className="bg-slate-100"
    >
      <CarouselContent>
        {bannerItems.map((item, index) => (
          <CarouselItem key={index}>
            <BannerItem
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              type={index % 2 === 0 ? "left" : "right"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
