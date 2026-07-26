export interface ProductFilters {
  search: string;
  category: string;
  page: number;
  limit: number;
  sortBy?: string;
  order?: "asc" | "desc";
}