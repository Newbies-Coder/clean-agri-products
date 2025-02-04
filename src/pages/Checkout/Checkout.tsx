import OrderSummery from "./components/OrderSummary";
import UserInfo from "./components/UserInfo";

const Checkout = () => {
  return (
    <section>
      <div className="container flex max-lg:flex-col gap-6 justify-between max-sm:px-5 py-10">
        <div className="xl:basis-8/12 lg:basis-7/12">
          <UserInfo />
        </div>
        <div className="xl:basis-4/12 lg:basis-5/12">
          <OrderSummery />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
