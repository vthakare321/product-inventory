import type { Product } from "../../types/product.types";

import { ProductCard } from "../ProductCard";

interface ProductGridProps {
  products: Product[];

  canEdit: boolean;

  onView: (id: number) => void;

  onEdit: (id: number) => void;
}

export function ProductGrid({
  products,
  canEdit,
  onView,
  onEdit,
}: ProductGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          canEdit={canEdit}
          onView={onView}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}