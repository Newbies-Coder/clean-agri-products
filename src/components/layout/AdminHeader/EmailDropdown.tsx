import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Notification from './Notification';
import { Link } from 'react-router-dom';
import bgTitle from '@/assets/images/bg-title.png';
import Badge from '@/components/common/Badge';
import { EmailIcon } from '@/components/common/Icons';

export default function EmailDropdown() {
  const emailNotifications = [
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: true,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: true,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: true,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: true,
    },
    {
      avatar: '/images/avt.jpg',
      username: 'Felecia Rower',
      content:
        'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      isRead: false,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-0">
        <button
          className="relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold text-gray-500 ring-offset-background transition-colors hover:bg-gray-100 hover:text-primary-admin focus-visible:outline-none focus-visible:ring-0 data-[state=open]:bg-slate-100 data-[state=open]:text-primary-admin md:h-9 md:w-9"
          type="button"
        >
          <EmailIcon />
          <Badge>2</Badge>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-[-0px] min-w-[410px] p-0">
        <DropdownMenuLabel className="p-0">
          <div
            className="flex h-full w-full items-center bg-cover p-4 text-sm font-semibold"
            style={{ backgroundImage: `url(${bgTitle})` }}
          >
            <span className="flex-1 text-base font-semibold text-white">
              Message
            </span>
            <Link
              to="#"
              className="flex-0 text-xs font-medium text-white hover:underline"
            >
              View All
            </Link>
          </div>
        </DropdownMenuLabel>

        <div className="customScrollBar h-[425px] overflow-y-scroll p-0">
          {emailNotifications.map((e) => (
            <DropdownMenuItem key={e.username} className="flex-1 p-0">
              <Notification
                avatar={e.avatar}
                username={e.username}
                content={e.content}
                isRead={e.isRead}
              />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
