import { useState } from "react";
import Reviews from "./Reviews";
import AdditionalInfo from "./AdditionalInfo";
import type { CustomerReview } from "@/@types/customer-review.type";

interface TabBarProps {
  weight: number;
  stockStatus: string;
  category: string;
  color: string;
  tags: string[];
  type: string;
  reviews: CustomerReview[];
}

const TabBar: React.FC<TabBarProps> = ({
  category,
  color,
  stockStatus,
  tags,
  type,
  weight,
  reviews,
}) => {
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
        {idActive === 1 && (
          <AdditionalInfo
            weight={weight}
            category={category}
            color={color}
            stockStatus={stockStatus}
            tags={tags}
            type={type}
          />
        )}
        {idActive === 2 && <Reviews reviews={reviews} />}
      </div>
    </>
  );
};

export default TabBar;
