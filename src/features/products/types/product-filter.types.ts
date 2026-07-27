import { ProductSortField, SortOrder } from "./product-sort.types";

export interface ProductFilters {
  page: number;
  limit: number;

  search?: string;

  sortBy?: ProductSortField;

  order?: SortOrder;
}