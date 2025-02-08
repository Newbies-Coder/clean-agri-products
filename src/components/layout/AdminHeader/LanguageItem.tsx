
type LanguageItemProps = {
  src: string;
  alt: string;
  name: string;
  className?: string;
};

export default function LanguageItem({
  src,
  alt,
  name,
  className,
}: LanguageItemProps) {
  return (
    <button
      className={`hidden h-10 items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-[10px] text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 xl:inline-flex ${className}`}
      type="button"
    >
      <span className="me-1.5 h-6 w-6 rounded-full">
        <img
          className="h-full w-full rounded-full object-cover"
          src={src}
          alt={alt}
        />
      </span>
      <span className="text-sm capitalize text-gray-600">{name}</span>
    </button>
  );
}
