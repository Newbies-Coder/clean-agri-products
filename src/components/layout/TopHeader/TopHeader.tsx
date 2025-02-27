
import { MapPin } from "lucide-react";
import UserDropdown from "./UserDropdown";

const TopHeader = () => {
  return (
    <div className="h-[42px] border-b hidden md:flex items-center bg-white">
      <div className="container mx-5 md:mx-auto flex justify-between items-center">
        <div>
          <MapPin
            size={21}
            strokeWidth="1"
            className="inline-block mr-2 text-gray-600"
          />
          <span className="font-base text-gray-600 text-sm">
            <span className="hidden sm:inline">Store Location: </span>Lincoln-
            344, Illinois, Chicago, USA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <UserDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
