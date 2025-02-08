import type { Icon } from '@/@types/icon.type';
import { cn } from '@/lib/utils';

export default function PieIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={cn('h-4 w-4', className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 9A5.5 5.5 0 0 1 7 3.5a.5.5 0 0 1 .5.5v4.5H12a.5.5 0 0 1 .5.5 5.5 5.5 0 0 1-11 0"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 2a.5.5 0 0 1 .5-.5A5.5 5.5 0 0 1 14.5 7a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
