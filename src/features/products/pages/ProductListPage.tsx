import { useNavigate } from "react-router-dom";

import { useProducts } from "../hooks/useProducts";
import { useProductFilters } from "../hooks/useProductFilters";

import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { ProductHeader } from "../components/ProductHeader/ProductHeader";
import { ProductSearch } from "../components/ProductSearch/ProductSearch";

import { Loader } from "@/shared/components/Loader";
import { EmptyState } from "@/shared/components/EmptyState/EmptyState";
import { ErrorState } from "@/shared/components/ErrorState/ErrorState";
import { Pagination } from "@/shared/components/Pagination/Pagination";

import { useAuthStore } from "@/features/auth/store/auth.store";

import {
  hasPermission,
  PERMISSIONS,
} from "@/shared/constants/permissions";

import { ROUTES } from "@/shared/constants/routes";

export function ProductListPage() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const {
    filters,
    setPage,
    setSearch,
  } = useProductFilters();

  const {
    data,
    isLoading,
    isError,
  } = useProducts(filters);

  const canEdit = hasPermission(
    user?.role ?? "",
    PERMISSIONS.PRODUCT_EDIT,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (!data) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <ProductHeader total={data.total} />

      <ProductSearch
        value={filters.search ?? ""}
        onChange={setSearch}
      />

      {data.products.length === 0 ? (
        <EmptyState message="No products found." />
      ) : (
        <ProductGrid
          products={data.products}
          canEdit={canEdit}
          onView={(id) =>
            navigate(ROUTES.PRODUCT_DETAIL(id))
          }
          onEdit={(id) =>
            navigate(ROUTES.PRODUCT_EDIT(id))
          }
        />
      )}

      <Pagination
        currentPage={filters.page}
        pageSize={filters.limit}
        totalItems={data.total}
        onPageChange={setPage}
      />
    </div>
  );
}