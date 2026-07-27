import { ReactNode } from "react";

export interface QueryStateProps<T> {
  data: T | undefined;

  isLoading: boolean;

  isError: boolean;

  error: unknown;

  onRetry?: () => void;

  children: (data: T) => ReactNode;
}