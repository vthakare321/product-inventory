import type {
  ProductSortField,
  SortOrder,
} from "../../types/product-sort.types";

export interface ProductSortProps {
  sortBy?: ProductSortField;
  order?: SortOrder;

  onSortChange: (
    sortBy: ProductSortField,
    order: SortOrder,
  ) => void;
}