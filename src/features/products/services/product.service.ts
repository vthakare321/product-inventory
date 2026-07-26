import { productApi } from "../api/product.api";
import { mapProduct, mapProducts } from "../mappers/product.mapper";

import type { UpdateProductRequestDto } from "../dto/product.request";

export const productService = {
  async getProducts(limit = 10, skip = 0) {
    const response = await productApi.getProducts(
      limit,
      skip,
    );

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
    const response = await productApi.updateProduct(
      id,
      payload,
    );

    return mapProduct(response);
  },
};