import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const ProductListPage = () => {
  return (
    <>
      <div className="flex container justify-center py-8 gap-x-6 px-5 sm:px-0">
        <div className="hidden lg:block lg:basis-1/4">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="lg:basis-3/4">
          <Products />
        </div>

        
      </div>
    </>
  );
};

export default ProductListPage;
