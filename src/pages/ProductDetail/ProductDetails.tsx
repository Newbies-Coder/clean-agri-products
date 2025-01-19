import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
import TabBar from "./components/TabBar";
import { productDetail } from "@/mocks/product";

const ProductDetail = () => {
  const {
    images,
    name,
    rating,
    reviewCount,
    original,
    originalPrice,
    discount,
    brand,
    description,
    category,
    tags,
    stockStatus,
    weight,
    color,
    type,
    reviews,
  } = productDetail;
  return (
    <>
      <div className="container mx-auto px-0 sm:px-5 lg:pt-10 pb-10">
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <Gallery images={images} name={name} />

          {/* Product Info */}
          <ProductInfo
            name={name}
            rating={rating}
            reviewCount={reviewCount}
            original={original}
            originalPrice={originalPrice}
            discount={discount}
            brand={brand}
            description={description}
            category={category}
            tags={tags}
            stockStatus={stockStatus}
          />
        </div>
      </div>
      <TabBar
        weight={weight}
        type={type}
        color={color}
        stockStatus={stockStatus}
        tags={tags}
        category={category}
        reviews={reviews}
      />
    </>
  );
};

export default ProductDetail;
