interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = "No data found.",
}: EmptyStateProps) {
  return (
    <div className="py-10 text-center text-gray-500">
      {message}
    </div>
  );
}
