import { ReactNode } from "react";

import type { Product } from "../../types/product.types";

export interface ProductGridProps {
  products: Product[];

  renderActions?: (
    product: Product,
  ) => ReactNode;
}