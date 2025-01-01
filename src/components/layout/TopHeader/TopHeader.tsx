import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="h-[42px] border-b flex items-center bg-white">
      <div className="container mx-5 md:mx-auto flex justify-between items-center">
        <div>
          <MapPin
            size={21}
            strokeWidth="1"
            className="inline-block mr-2 text-gray-600"
          />
          <span className="font-base text-gray-600 text-sm">
            <span className="hidden sm:inline">Store Location: </span>Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>
        <div>
          <Link to="" className="text-sm text-gray-600">
            Sign in
          </Link>
          <span className="text-sm text-gray-600 mx-2">
            |
          </span>
          <Link to="" className="text-sm text-gray-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
