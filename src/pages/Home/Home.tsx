import Banner from "./components/Banner";
import { products } from "@/mocks/product";
import ProductList from "./components/ProductList";
import HotProductList from "./components/HotProductList";

export default function HomePage() {
  return (
    <>
    <Banner />
    <ProductList data={products}/>
    <HotProductList data={products}/>
    </>
  )
}
