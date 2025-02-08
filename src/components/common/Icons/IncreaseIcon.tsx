import type { Icon } from '@/@types/icon.type';
import { cn } from '@/lib/utils';

export default function IncreaseIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.5 23.5 0 0 0-3.609 3.056a.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25 25 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92"
      ></path>
    </svg>
  );
}
