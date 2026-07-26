import type { Product } from "../../types/product.types";

export interface ProductCardProps {
  product: Product;
  canEdit: boolean;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
}