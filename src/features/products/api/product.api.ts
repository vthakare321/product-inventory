import { client } from "@/lib/axios";

import type { ProductFilters } from "../types/product-filter.types";
import type { ProductsResponseDto } from "../dto/product.response";
import type { ProductDto } from "../dto/product.dto";
import type { UpdateProductRequestDto } from "../dto/product.request";

export const productApi = {
  async getProducts(filters: ProductFilters) {
    const {
      page,
      limit,
      search,
      sortBy,
      order,
    } = filters;

    const skip = (page - 1) * limit;

    const endpoint = search
      ? "/products/search"
      : "/products";

    const { data } = await client.get<ProductsResponseDto>(
      endpoint,
      {
        params: {
          limit,
          skip,
          q: search || undefined,
          sortBy: sortBy || undefined,
          order: order || undefined,
        },
      }
    );

    return data;
  },

  async getProduct(id: number) {
    const { data } = await client.get<ProductDto>(
      `/products/${id}`
    );

    return data;
  },

  async updateProduct(
    id: number,
    payload: UpdateProductRequestDto
  ) {
    const { data } = await client.put<ProductDto>(
      `/products/${id}`,
      payload
    );

    return data;
  },
};