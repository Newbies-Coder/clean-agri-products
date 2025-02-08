import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NotificationProps = {
  avatar?: string;
  username: string;
  content: string;
  isRead: boolean;
};
export default function Notification({
  avatar,
  username,
  content,
  isRead,
}: NotificationProps) {
  return (
    <div className="relative flex cursor-pointer items-center gap-9 px-4 py-2 text-sm outline-none">
      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex h-10 w-10 shrink-0 rounded-full">
          <Avatar className="w-full h-full mx-auto">
            <AvatarImage src={avatar} />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-[2px] whitespace-nowrap text-sm font-medium text-gray-900">
            {username}
          </div>
          <div className="max-w-[100px] truncate text-xs text-gray-900 lg:max-w-[185px]">
            {content}
          </div>
        </div>
      </div>
      <div className="text-default-600 whitespace-nowrap text-xs font-medium">
        10 am
      </div>
      <div
        className={`${isRead && "rounded-full bg-primary-admin"} mr-2 h-2 w-2`}
      ></div>
    </div>
  );
}
