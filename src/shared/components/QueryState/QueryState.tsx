import { Loader } from "../Loader";
import { ErrorState } from "../ErrorState/ErrorState";
import { EmptyState } from "../EmptyState/EmptyState";

import type { QueryStateProps } from "./QueryState.types";

export function QueryState<T>({
  data,
  isLoading,
  isError,
  children,
}: QueryStateProps<T>) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (!data) {
    return <EmptyState />;
  }

  return <>{children(data)}</>;
}