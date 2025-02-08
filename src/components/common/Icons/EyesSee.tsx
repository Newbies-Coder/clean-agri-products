import type { Icon } from "@/@types/icon.type";
import { cn } from "@/lib/utils";

export default function EyesSee({ className }: Icon) {
  return (
    <svg
      className={cn(`h-5 w-5`, className)}
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_108_52)">
        <path
          d="M0.625 6.42878C0.625 6.42878 3.125 2.14307 7.5 2.14307C11.875 2.14307 14.375 6.42878 14.375 6.42878C14.375 6.42878 11.875 10.7145 7.5 10.7145C3.125 10.7145 0.625 6.42878 0.625 6.42878Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 8.03557C8.53553 8.03557 9.375 7.31603 9.375 6.42843C9.375 5.54083 8.53553 4.82129 7.5 4.82129C6.46447 4.82129 5.625 5.54083 5.625 6.42843C5.625 7.31603 6.46447 8.03557 7.5 8.03557Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_108_52">
          <rect width="15" height="12.8571" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
