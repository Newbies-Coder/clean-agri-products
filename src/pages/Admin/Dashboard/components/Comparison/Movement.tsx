import { DecreaseIcon, IncreaseIcon } from "@/components/common/Icons";

interface MovementProps {
  title: string;
  children: React.ReactNode; // icon
  data: string;
  change: string;
  status?: 'increase' | 'decrease';
  description?: string;
};

export default function Movement({
  title,
  children,
  data,
  change,
  status = 'increase',
  description = 'vs Previous 30 Days',
}: MovementProps) {
  return (
    <div className="rounded-md bg-card text-card-foreground shadow-sm">
      <div className="mb-0 flex flex-col-reverse flex-wrap gap-2 space-y-1.5 border-b border-none border-border px-4 py-4 pb-0 sm:flex-row">
        <span className="flex-1 text-sm font-medium text-gray-900">
          {title}
        </span>
        {children}
      </div>
      <div className="p-6 px-4 pb-4 pt-0">
        <span className="mb-2.5 text-2xl font-semibold text-gray-900">
          {data}
        </span>
        <div className="flex items-center gap-1 font-semibold">
          {status === 'increase' ? (
            <>
              <span className="text-green-500">{change}</span>
              <span className="text-green-500">
                <IncreaseIcon className="h-5 w-5" />
              </span>
            </>
          ) : (
            <>
              <span className="text-red-500">{change}</span>
              <span className="text-red-500">
                <DecreaseIcon className="h-5 w-5" />
              </span>
            </>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}
