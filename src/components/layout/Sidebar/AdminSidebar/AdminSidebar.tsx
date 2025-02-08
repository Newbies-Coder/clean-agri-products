import {
  BugIcon,
  ChartIcon,
  ChatIcon,
  CubeIcon,
  EmailIcon,
  GaugeIcon,
  InvoiceIcon,
  SettingIcon,
  TaskIcon,
  UserIcon,
} from "@/components/common/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import LogoSimple from "@/assets/svg/Logo-simple.svg";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { user } from "@/mocks/user";

export default function AdminSidebar() {
    const {full_name, email, avatar} = user
  return (
    <>
      <Tabs
        defaultValue="dashboard"
        className="sidebar-admin pointer-events-none fixed start-0 top-0 z-50 flex h-full duration-300"
      >
        {/* Nav Icon */}
        <div className="pointer-events-auto relative z-20 flex h-full w-[72px] flex-col border-r border-dashed border-gray-200 bg-card transition-all duration-300">
          {/* Logo */}
          <div className="py-4">
            <Link to={"/admin"}>
              <img src={LogoSimple} alt="logo" className="mx-[auto] size-9" />
            </Link>
          </div>

          {/* List Navs with icon */}
          <TabsList>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger
                    value="dashboard"
                    className={`mx-[auto] mt-3 block cursor-pointer rounded-md p-3 text-gray-500 transition-all duration-300 hover:bg-[rgba(132,108,249,0.2)] hover:text-primary-admin data-[state=active]:bg-[rgba(132,108,249,0.2)] data-[state=active]:text-primary-admin`}
                  >
                    <CubeIcon />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-primary-admin text-sm font-medium"
                >
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger
                    value="application"
                    className={`mx-[auto] mt-3 block cursor-pointer rounded-md p-3 text-gray-500 transition-all duration-300 hover:bg-[rgba(132,108,249,0.2)] hover:text-primary-admin data-[state=active]:bg-[rgba(132,108,249,0.2)] data-[state=active]:text-primary-admin`}
                  >
                    <GaugeIcon />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-primary-admin text-sm font-medium"
                >
                  Application
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>

          {/* Setting, avatar */}
          <div className="mt-auto pb-2">
            {/* Setting button */}
            <button
              type="button"
              className="text-default-500 mx-auto flex h-11 w-11 items-center justify-center rounded-md transition-all duration-200 hover:bg-primary-admin hover:text-primary-foreground"
            >
              <SettingIcon />
            </button>
            {/* Avatar user */}
            <Avatar className="size-12 mx-auto mt-3">
              <AvatarImage src={avatar} />
              <AvatarFallback>{full_name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Nav */}
        <div className="border-default-200 sidebar-main-admin pointer-events-auto relative z-10 flex h-full flex-col border-r bg-card transition-all duration-300">
          <TabsContent value="dashboard">
            <h2 className="text-default-700 sticky top-0 z-50 flex items-center gap-4 bg-transparent px-4 py-4 text-lg font-semibold capitalize">
              <span className="block">dashboard</span>
            </h2>
            <div className="relative h-[calc(100%-40px)] grow">
              <div className="h-full w-full rounded-[inherit]">
                <ul className="px-4">
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin" icon={ChartIcon}>
                      Analytics
                    </NavLink>
                  </li>

                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/project" icon={InvoiceIcon}>
                      Project
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="application">
            <h2 className="text-default-700 sticky top-0 z-50 flex items-center gap-4 bg-transparent px-4 py-4 text-lg font-semibold capitalize">
              <span className="block">application</span>
            </h2>
            <div className="relative h-[calc(100%-40px)] grow">
              <div className="h-full w-full rounded-[inherit]">
                <ul className="px-4">
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/chat" icon={ChatIcon}>
                      Chat
                    </NavLink>
                  </li>
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/email" icon={EmailIcon}>
                      email
                    </NavLink>
                  </li>
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/task" icon={TaskIcon}>
                      task
                    </NavLink>
                  </li>
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/user-management" icon={UserIcon}>
                      User
                    </NavLink>
                  </li>
                  <li className="mb-1.5 last:mb-0">
                    <NavLink href="/admin/bug" icon={BugIcon}>
                      Bug
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <div className="mt-[auto] flex items-center gap-3 bg-gray-50 px-4 py-2">
            <div className="flex-1">
              <div className="mb-0.5 truncate text-sm font-semibold text-gray-700">
                Email
              </div>
              <div className="truncate text-xs text-gray-600">
                {email}
              </div>
            </div>
            <div className="flex-none">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-gray-500"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
