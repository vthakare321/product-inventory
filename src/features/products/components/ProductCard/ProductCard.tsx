import { Card } from "@/shared/components/Card/Card";

import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({
  product,
  children,
}: ProductCardProps) {
  return (
    <Card>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 h-52 w-full rounded-lg object-cover"
      />

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold">
            ${product.price}
          </span>

          <span>
             {product.rating}
          </span>
        </div>

        <div className="pt-3">
          {children}
        </div>
      </div>
    </Card>
  );
}