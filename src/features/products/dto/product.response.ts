import type { ProductDto } from "./product.dto";

export interface ProductsResponseDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}