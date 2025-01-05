import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import HotProductList from "./components/HotProductList";
import Categories from "./components/Categories";
import { products } from "@/mocks/product";
import { categories } from "@/mocks/category";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Categories data={categories}/>
      <ProductList data={products} />
      <HotProductList data={products} />
    </>
  );
}
