import type { ProductFilters } from "@/features/products/types/product-filter.types";

export const queryKeys = {
  products: {
    all: ["products"] as const,

    list: (filters: ProductFilters) =>
      [...queryKeys.products.all, "list", filters] as const,

    detail: (id: number) =>
      [...queryKeys.products.all, "detail", id] as const,
  },
};