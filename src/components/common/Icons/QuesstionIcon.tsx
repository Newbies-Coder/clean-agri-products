import type { Icon } from "@/@types/icon.type";
import { cn } from "@/lib/utils";

export default function QuestionIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(`size-5`, className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5"
      />
    </svg>
  );
}
