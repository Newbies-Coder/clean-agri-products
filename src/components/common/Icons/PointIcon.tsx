import type { Icon } from "@/@types/icon.type";
import { cn } from "@/lib/utils";

export default function PointIcon  ({ className }: Icon)  {
  return (
    <svg
      className={cn(`h-5 w-5`, className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="14" height="14" fill="#9C9999" />
      <g id="Desktop - 1" clipPath="url(#clip0_0_1)">
        <rect
          width="1440"
          height="2834"
          transform="translate(-64 -893)"
          fill="#0B1A33"
        />
        <g id="Frame 624776" clipPath="url(#clip1_0_1)">
          <rect
            width="933"
            height="266"
            transform="translate(-24 -212)"
            fill="white"
          />
          <circle id="Ellipse 20" cx="6.5" cy="6.5" r="17.5" fill="#D9D9D9" />
          <g id="Group 1754">
            <path
              id="Vector"
              d="M13 5.6958L7 1.00003L1 5.6958L13 5.6958Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M1 8.30469L7 13.0005L13 8.30469H1Z"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="1440"
            height="2834"
            fill="white"
            transform="translate(-64 -893)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="933"
            height="266"
            fill="white"
            transform="translate(-24 -212)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
