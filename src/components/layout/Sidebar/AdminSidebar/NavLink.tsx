import React, { ElementType } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: ElementType;
  children: React.ReactNode;
}) {
  // Get current url
  const { pathname } = useLocation();

  // Check if the current url is the same as the href
  const isActive = pathname === href;
  return (
    <div>
      <div className="flex-1">
        <Link
          className={`${
            isActive && "bg-primary-admin text-primary-foreground"
          } flex cursor-pointer gap-3 rounded-md px-[10px] py-3 text-sm font-medium capitalize`}
          to={href}
        >
          <span className="inline-flex flex-grow-0 items-center">
            <Icon />
          </span>
          <div className="flex-grow truncate">{children}</div>
        </Link>
      </div>
    </div>
  );
}
