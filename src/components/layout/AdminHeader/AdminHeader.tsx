import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import EmailDropdown from "./EmailDropdown";
import LanguageDropdown from "./LanguageDropdown";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import UpdateClassBtn from "@/components/common/Button/UpdateClassBtn";
import LogoSimple from "@/assets/svg/Logo-simple.svg"
import { BarsIcon, ChevronLeftIcon } from "@/components/common/Icons";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="w-full border-b bg-card/90 px-[15px] py-3 backdrop-blur-lg md:px-6">
        <div className="flex h-full items-center justify-between">
          {/* Header Left */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Logo */}
            <div className="hidden md:block lg:hidden">
              <Link to={"/admin"}>
                <img
                  src={LogoSimple}
                  alt="logo"
                  className="mx-[auto] size-8"
                />
              </Link>
            </div>
            {/* Button toggle */}
            <UpdateClassBtn
              type="toggle"
              classTargets="toggle-sidebar sidebar-main-admin content-admin overlay sidebar-admin"
              classUpdate="open"
              className="toggle-sidebar"
            >
              <BarsIcon className="bars-icon" />
              <ChevronLeftIcon className="chevron-left-icon" />
            </UpdateClassBtn>

            {/* Search */}
            <div className="hidden md:block">
              <button className="inline-flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <SearchIcon />
                </span>
                <span> Search...</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <LanguageDropdown />

            {/* Email */}
            <EmailDropdown />

            {/* Notification */}
            <NotificationDropdown />
            {/* Avatar user */}
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
