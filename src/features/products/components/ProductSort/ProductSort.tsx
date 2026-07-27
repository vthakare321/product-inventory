import { Select } from "@/shared/components/Select/Select";

import type { ChangeEvent } from "react";
import type { ProductSortProps } from "./ProductSort.types";
import type {
  ProductSortField,
  SortOrder,
} from "../../types/product-sort.types";

const SORT_OPTIONS = [
  { label: "Title", value: "title" },
  { label: "Price", value: "price" },
  { label: "Rating", value: "rating" },
  { label: "Stock", value: "stock" },
] as const;

const ORDER_OPTIONS = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
] as const;

export function ProductSort({
  sortBy = "title",
  order = "asc",
  onSortChange,
}: ProductSortProps) {
  const handleSortChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    onSortChange(
      event.target.value as ProductSortField,
      order,
    );
  };

  const handleOrderChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    onSortChange(
      sortBy,
      event.target.value as SortOrder,
    );
  };

  return (
    <div className="flex items-end gap-4">
      <Select
        label="Sort By"
        value={sortBy}
        options={SORT_OPTIONS}
        onChange={handleSortChange}
      />

      <Select
        label="Order"
        value={order}
        options={ORDER_OPTIONS}
        onChange={handleOrderChange}
      />
    </div>
  );
}