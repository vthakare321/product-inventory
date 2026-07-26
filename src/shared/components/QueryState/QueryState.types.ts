import { ReactNode } from "react";

export interface QueryStateProps<T> {
  data: T | undefined;

  isLoading: boolean;

  isError: boolean;

  children: (data: T) => ReactNode;
}