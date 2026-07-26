import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/react-query";

import { productService } from "../services/product.service";

export function useProduct(id: number) {
  return useQuery({
    queryKey: queryKeys.products.detail(id),

    queryFn: () =>
      productService.getProduct(id),

    enabled: !!id,
  });
}