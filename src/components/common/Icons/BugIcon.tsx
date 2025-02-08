import type { Icon } from "@/@types/icon.type";

export default function ChatIcon({ className }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={`h-5 w-5 ${className}`}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 11.938V15a7.001 7.001 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7.001 7.001 0 0 1 5 15v-3.062A3.939 3.939 0 0 1 8.938 8h6.124A3.939 3.939 0 0 1 19 11.938"
        clipRule="evenodd"
        opacity="0.45"
      />
      <path
        fill="currentColor"
        d="M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5zm-1.504 4.586c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34zM5.703 18.06c.221.455.49.883.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342zM5 13.25H2a.75.75 0 0 0 0 1.5h3zm12.354-4.515l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a3.958 3.958 0 0 0-1.065-1.144M6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.94 3.94 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"
      />
      <path
        fill="currentColor"
        d="M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.502 4.502 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.502 4.502 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z"
        opacity="0.85"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
}
