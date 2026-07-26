import { Button } from "@/shared/components/Button";
import { Card} from "@/shared/components/Card/Card"

import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({
  product,
  canEdit,
  onView,
  onEdit,
}: ProductCardProps) {
  return (
    <Card>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 h-48 w-full rounded object-cover"
      />

      <h3 className="text-lg font-semibold">
        {product.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
        {product.description}
      </p>

      <div className="mt-4 flex justify-between">
        <span className="font-bold">
          ${product.price}
        </span>

        <span>
           {product.rating}
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        <Button
          fullWidth
          onClick={() => onView(product.id)}
        >
          View
        </Button>

        {canEdit && (
          <Button
            variant="secondary"
            fullWidth
            onClick={() => onEdit(product.id)}
          >
            Edit
          </Button>
        )}
      </div>
    </Card>
  );
}