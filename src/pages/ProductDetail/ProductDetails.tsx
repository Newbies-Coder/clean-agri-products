import { useLocation } from "react-router-dom";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
import TabBar from "./components/TabBar";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const productId = pathname.split("/").pop();
  return (
    <>
      <div className="container mx-auto px-0 sm:px-5 lg:pt-10 pb-10">
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <Gallery productId={productId!} />

          {/* Product Info */}
          <ProductInfo productId={productId!} />
        </div>
      </div>
      <TabBar
        productId={productId!}
      /> 
    </>
  );
};

export default ProductDetail;
