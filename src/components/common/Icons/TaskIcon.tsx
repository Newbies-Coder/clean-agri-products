import type { Icon } from "@/@types/icon.type";
import { cn } from "@/lib/utils";

export default function TaskIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      className={cn(`size-5`, className)}
    >
      <path
        fill="currentColor"
        d="M12.492.667H5.508C2.475.667.667 2.475.667 5.509v6.983c0 3.033 1.808 4.842 4.841 4.842h6.984c3.033 0 4.841-1.809 4.841-4.842V5.509c0-3.034-1.808-4.842-4.841-4.842"
        opacity="0.35"
      ></path>
      <path
        fill="currentColor"
        d="M14.258 6.392a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 5.584 5.433 7.46a.62.62 0 0 1-.441.183.6.6 0 0 1-.442-.183l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883M14.258 12.226a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 11.417l-1.875 1.875a.62.62 0 0 1-.441.184.6.6 0 0 1-.442-.184l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883"
      ></path>
    </svg>
  );
}
