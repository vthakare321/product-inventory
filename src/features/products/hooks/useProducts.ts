import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/react-query";

import { productService } from "../services/product.service";
import type { ProductFilters } from "../types/product-filter.types";

export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: queryKeys.products.list(filters),

    queryFn: () =>
      productService.getProducts(filters),

    placeholderData: (previousData) => previousData,
  });
}