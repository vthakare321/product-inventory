import { Button } from "../Button";

import type { ErrorStateProps } from "./ErrorState.types";

export function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4">
      <h3 className="text-lg font-semibold text-red-700">
        {title}
      </h3>

      <p className="mt-2 text-red-600">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-4"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </div>
  );
}