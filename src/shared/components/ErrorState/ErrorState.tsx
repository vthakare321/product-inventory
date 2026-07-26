interface ErrorStateProps {
  message?: string;
}

export function ErrorState({
  message = "Something went wrong.",
}: ErrorStateProps) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
      {message}
    </div>
  );
}
