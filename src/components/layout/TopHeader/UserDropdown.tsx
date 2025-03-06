import { Link } from "react-router-dom";
import { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/auth.store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/apis/auth.api";

const UserDropdown = () => {
  // Get user from useAuthStore
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === "Admin";
  return (
    <>
      {user ? (
        <DropdownMenu>
          {/* Avatar & Full name */}
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-1.5">
              <Avatar className="size-8 border border-gray-400">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-lg font-bold">
                  {user.full_name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">{user.full_name}</span>
            </div>
          </DropdownMenuTrigger>

          {/* Dropdown content (profile, logout) */}
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Go to Profile */}
            <DropdownMenuItem asChild>
              <Link to="/account/profile">Profile</Link>
            </DropdownMenuItem>

            {/* Go to Dashboard Admin */}
            {isAdmin && (
              <DropdownMenuItem asChild>
                <Link to="/admin">Dashboard</Link>
              </DropdownMenuItem>
            )}

            {/* Log out */}
            <DropdownMenuItem onClick={logoutAction} className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          {/* Sign in & Sign up*/}
          <Link to="/auth/login" className="text-sm text-gray-600">
            Sign in
          </Link>
          <span className="text-sm text-gray-600 mx-2">|</span>
          <Link to="/auth/register" className="text-sm text-gray-600">
            Sign up
          </Link>
        </div>
      )}
    </>
  );
};

export default memo(UserDropdown);
