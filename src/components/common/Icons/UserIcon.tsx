import type { Icon } from '@/@types/icon.type';
import { cn } from '@/lib/utils';

export default function UserIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={cn('size-6', className)}
    >
      <path
        fill="currentColor"
        d="M8 8a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 8 8"
        opacity="0.35"
      ></path>
      <path
        fill="currentColor"
        d="M8 9.667c-3.34 0-6.06 2.24-6.06 5a.33.33 0 0 0 .333.333h11.453a.33.33 0 0 0 .333-.333c0-2.76-2.72-5-6.06-5"
      ></path>
    </svg>
  );
}
