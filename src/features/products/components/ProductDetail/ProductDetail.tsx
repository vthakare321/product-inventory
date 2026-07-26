import { Card } from "@/shared/components/Card/Card";

import type { ProductDetailProps } from "./ProductDetail.types";

export function ProductDetail({
  product,
}: ProductDetailProps) {
  return (
    <Card title={product.title}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-6 h-72 w-full rounded-lg object-cover"
      />

      <div className="space-y-3">
        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p>
          <strong>Price:</strong> ${product.price}
        </p>

        <p>
          <strong>Rating:</strong>  {product.rating}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{product.description}</p>
      </div>
    </Card>
  );
}