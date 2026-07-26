import { EmptyState } from "@/shared/components/EmptyState/EmptyState";

import { ProductCard } from "../ProductCard";

import type { ProductGridProps } from "./ProductGrid.types";

export function ProductGrid({
  products,
  renderActions,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState message="No products found." />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        >
          {renderActions?.(product)}
        </ProductCard>
      ))}
    </div>
  );
}