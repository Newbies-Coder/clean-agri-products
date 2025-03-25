import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton
import { useProductDetail } from "@/actions/product.action";

const Gallery = ({ productId }: { productId: string }) => {
  const ORIENTATION_THRESHOLD = 1320;

  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle screen resize
  const [orientation, setOrientation] = useState<
    "vertical" | "horizontal" | undefined
  >(window.innerWidth >= ORIENTATION_THRESHOLD ? "vertical" : "horizontal");

  useEffect(() => {
    const handleResize = () => {
      setOrientation(
        window.innerWidth >= ORIENTATION_THRESHOLD ? "vertical" : "horizontal"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;

    setMousePosition({ x, y });
  };

  // Fetch product detail
  const { data, isLoading } = useProductDetail(productId);

  return (
    <section className="flex flex-col-reverse xl:flex-row gap-4 xl:items-center">
      {/* Thumbnails */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation={orientation}
        className="max-xl:w-4/5 max-xl:left-1/2 max-xl:-translate-x-1/2"
      >
        <CarouselPrevious className="max-xs:hidden max-md:scale-75 max-xs:left-0 max-xs:translate-x-3 duration-200 active:bg-primary active:text-primary-foreground" />
        <CarouselContent className="xl:h-96 gap-0">
          {isLoading
            ? // Hiển thị skeleton khi đang tải
              Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="max-[432px]:basis-1/3 basis-1/3 sm:basis-1/5 lg:basis-1/4 w-20 p-0 flex items-end justify-center"
                >
                  <Skeleton className="w-20 h-20 rounded-lg bg-gray-200" />
                </CarouselItem>
              ))
            : data?.images?.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="max-[432px]:basis-1/3 basis-1/3 sm:basis-1/5 lg:basis-1/4 w-20 p-0 flex items-end justify-center"
                  onClick={() => setSelectedImage(index)}
                >
                  <button
                    className={`w-20 h-20 border rounded-lg ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={data?.name + index}
                      className="rounded-lg h-full w-full"
                    />
                  </button>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselNext className="max-xs:hidden max-md:scale-75 max-xs:right-0 max-xs:left-x-3 active:bg-primary active:text-primary-foreground" />
      </Carousel>

      {/* Main Image with Zoom */}
      <div className="flex-1 lg:border rounded-lg">
        <div
          className="relative aspect-square rounded-lg overflow-hidden bg-white cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`lg:max-h-[500px] transition-all duration-100 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={{
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
            }}
          >
            {isLoading ? (
              // Skeleton cho ảnh chính
              <Skeleton className="w-full h-full bg-gray-200" />
            ) : (
              data?.images &&
              data.images[selectedImage] && (
                <img
                  src={data.images[selectedImage].url}
                  alt={data.name + selectedImage}
                  className="w-full h-full object-center"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
