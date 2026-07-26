import { useSearchParams } from "react-router-dom";

import type { ProductFilters } from "../types/product-filter.types";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 12;

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: ProductFilters = {
    page: Number(searchParams.get("page")) || DEFAULT_PAGE,

    limit: Number(searchParams.get("limit")) || DEFAULT_LIMIT,

    search: searchParams.get("search") ?? "",

    sortBy: searchParams.get("sortBy") ?? "",

    order:
      (searchParams.get("order") as
        | "asc"
        | "desc") ?? "asc",
  };

  const updateFilters = (
    values: Partial<ProductFilters>,
  ) => {
    const updated = {
      ...filters,
      ...values,
    };

    const params = new URLSearchParams();

    params.set("page", String(updated.page));

    params.set("limit", String(updated.limit));

    if (updated.search) {
      params.set("search", updated.search);
    }

    if (updated.sortBy) {
      params.set("sortBy", updated.sortBy);
    }

    if (updated.order) {
      params.set("order", updated.order);
    }

    setSearchParams(params);
  };

  return {
    filters,

    setPage: (page: number) =>
      updateFilters({ page }),

    setSearch: (search: string) =>
      updateFilters({
        page: 1,
        search,
      }),

    setSort: (
      sortBy: string,
      order: "asc" | "desc",
    ) =>
      updateFilters({
        sortBy,
        order,
      }),
  };
}