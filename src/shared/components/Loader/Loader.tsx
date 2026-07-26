interface LoaderProps {
  text?: string;
}

export function Loader({
  text = "Loading...",
}: LoaderProps) {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

        <span>{text}</span>
      </div>
    </div>
  );
}