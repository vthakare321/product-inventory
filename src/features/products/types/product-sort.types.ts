export const PRODUCT_SORT_FIELDS = [
  "title",
  "price",
  "rating",
  "stock",
] as const;

export type ProductSortField =
  (typeof PRODUCT_SORT_FIELDS)[number];

export type SortOrder = "asc" | "desc";