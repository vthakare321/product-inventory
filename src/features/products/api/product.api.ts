import { client } from "@/lib/axios";

import type { ProductDto } from "../dto/product.dto";
import type { UpdateProductRequestDto } from "../dto/product.request";
import type { ProductsResponseDto } from "../dto/product.response";

export const productApi = {
  getProducts: async (
    limit = 10,
    skip = 0,
  ): Promise<ProductsResponseDto> => {
    const { data } = await client.get<ProductsResponseDto>(
      "/products",
      {
        params: {
          limit,
          skip,
        },
      },
    );

    return data;
  },

  getProduct: async (id: number): Promise<ProductDto> => {
    const { data } = await client.get<ProductDto>(
      `/products/${id}`,
    );

    return data;
  },

  updateProduct: async (
    id: number,
    payload: UpdateProductRequestDto,
  ): Promise<ProductDto> => {
    const { data } = await client.put<ProductDto>(
      `/products/${id}`,
      payload,
    );

    return data;
  },
};