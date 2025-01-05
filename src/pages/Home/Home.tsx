import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import HotProductList from "./components/HotProductList";
import Categories from "./components/Categories";
import { products } from "@/mocks/product";
import { categories } from "@/mocks/category";
import Featured from "./components/Featured";
import DiscountBanner from "./components/DiscountBanner";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Featured />
      <Categories data={categories} />
      <DiscountBanner />
      <ProductList data={products} />
      <HotProductList data={products} />
    </>
  );
}
