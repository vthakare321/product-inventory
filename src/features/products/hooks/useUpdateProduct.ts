import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/lib/react-query";

import { productService } from "../services/product.service";
import type { UpdateProductPayload } from "../types/product-mutation.types";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateProductPayload) =>
      productService.updateProduct(id, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.products.detail(variables.id),
      });
    },
  });
}