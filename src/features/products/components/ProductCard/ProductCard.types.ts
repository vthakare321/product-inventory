import { ReactNode } from "react";

import type { Product } from "../../types/product.types";

export interface ProductCardProps {
  product: Product;
  children?: ReactNode;
}