import type { Icon } from "@/@types/icon.type";

export default function CheckIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} h-4 w-4 flex-none text-gray-700 ltr:ml-auto rtl:mr-auto`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
