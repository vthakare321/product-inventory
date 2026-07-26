import { productApi } from "../api/product.api";
import { mapProduct, mapProducts } from "../mappers/product.mapper";

import type { ProductFilters } from "../types/product-filter.types";
import type { UpdateProductRequestDto } from "../dto/product.request";

export const productService = {
  async getProducts(filters: ProductFilters) {
    const response = await productApi.getProducts(filters);

    return mapProducts(response);
  },

  async getProduct(id: number) {
    const response = await productApi.getProduct(id);

    return mapProduct(response);
  },

  async updateProduct(
    id: number,
    payload: UpdateProductRequestDto,
  ) {
    const response = await productApi.updateProduct(id, payload);

    return mapProduct(response);
  },
};