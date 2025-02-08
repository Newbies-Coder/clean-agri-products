import React from 'react';

export default function Badge({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary-admin p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      {children}
    </div>
  );
}
