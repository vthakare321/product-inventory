import type { UpdateProductRequestDto } from "../dto/product.request";

export interface UpdateProductPayload {
  id: number;
  payload: UpdateProductRequestDto;
}