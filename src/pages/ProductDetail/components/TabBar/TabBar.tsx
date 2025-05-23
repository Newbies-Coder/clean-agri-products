import { useState } from "react";
import Reviews from "./Reviews";
import AdditionalInfo from "./AdditionalInfo";

const TabBar = ({ productId }: { productId: string }) => {
  const tabs = [
    {
      id: 1,
      title: "Additional Infomation",
    },
    {
      id: 2,
      title: "Customer Review",
    },
  ];
  const [idActive, setIdActive] = useState(tabs[0].id);
  return (
    <>
      {/* Tab Bar */}
      <div className="pt-10 border-b">
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setIdActive(tab.id)}
              className={`p-3 border-b duration-200 ${
                tab.id === idActive
                  ? "border-primary font-medium"
                  : "border-transparent text-gray-500"
              } `}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Review */}
      <div className="container px-5 sm:px-0 py-10">
        {/* Admitional Info */}
        {idActive === 1 && <AdditionalInfo productId={productId} />}
        {idActive === 2 && <Reviews />}
      </div>
    </>
  );
};

export default TabBar;
