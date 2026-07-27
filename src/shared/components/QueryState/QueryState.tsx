import { Loader } from "../Loader";
import { ErrorState } from "../ErrorState/ErrorState";
import { EmptyState } from "../EmptyState/EmptyState";

import type { QueryStateProps } from "./QueryState.types";
import { ApiError } from "@/lib/axios/ApiError";

export function QueryState<T>({
  data,
  isLoading,
  isError,
  error,
  onRetry,
  children,
}: QueryStateProps<T>) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    if (error instanceof ApiError) {
      return (
        <ErrorState
          title={error.title}
          message={error.message}
          onRetry={onRetry}
        />
      );
    }

    return (
      <ErrorState
        title="Unexpected Error"
        message="Something went wrong."
        onRetry={onRetry}
      />
    );
  }

  if (!data) {
    return <EmptyState />;
  }

  return <>{children(data)}</>;
}