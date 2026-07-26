import type { ProductDto } from "../dto/product.dto";
import type { ProductsResponseDto } from "../dto/product.response";
import type { Product } from "../types/product.types";

export const mapProduct = (dto: ProductDto): Product => ({
  id: dto.id,
 title: dto.title,
  description: dto.description,
  category: dto.category,
  price: dto.price,
  rating: dto.rating,
  stock: dto.stock,
  brand: dto.brand,
  thumbnail: dto.thumbnail,
});

export const mapProducts = (response: ProductsResponseDto) => ({
  ...response,
  products: response.products.map(mapProduct),
});