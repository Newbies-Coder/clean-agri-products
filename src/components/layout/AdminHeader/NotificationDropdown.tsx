import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Notification from "./Notification";
import { RingIcon } from "@/components/common/Icons";
import Badge from "@/components/common/Badge";
import { Link } from "react-router-dom";
import bgTitle from "@/assets/images/bg-title2.png";

export default function NotificationDropdown() {
  const Notifications = [
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: true,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: false,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: true,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: false,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: true,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: false,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: true,
    },
    {
      avatar: "/images/avt.jpg",
      username: "Felecia Rower",
      content:
        "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
      isRead: false,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-0">
        <button
          className="relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold text-gray-500 ring-offset-background transition-colors hover:bg-gray-100 hover:text-primary-admin focus-visible:outline-none focus-visible:ring-0 md:h-9 md:w-9"
          type="button"
        >
          <RingIcon />
          <Badge>5</Badge>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-[-10px] min-w-96 p-0">
        <DropdownMenuLabel className="p-0">
          <div
            className="flex h-full w-full items-center bg-cover p-4 text-sm font-semibold"
            style={{ backgroundImage: `url(${bgTitle})` }}
          >
            <span className="flex-1 text-base font-semibold text-white">
              Notification
            </span>
            <button className="flex-0 text-xs font-medium text-white hover:underline">
              Mark all as read
            </button>
          </div>
        </DropdownMenuLabel>

        {/* List Notifications  */}
        <div className="customScrollBar h-[305px] overflow-y-scroll p-0">
          {Notifications.map((e) => (
            <DropdownMenuItem key={e.username} className="p-0">
              <Notification
                avatar={e.avatar}
                username={e.username}
                content={e.content}
                isRead={e.isRead}
              />
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator className="h-px bg-gray-200/70" />

        <div className="m-4 mt-5">
          <Link
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary-admin px-4 py-[10px] text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-0"
            to="#"
          >
            View All
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
