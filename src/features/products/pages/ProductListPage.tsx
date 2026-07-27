import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/components/Button";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import { QueryState } from "@/shared/components/QueryState";

import { ROUTES } from "@/shared/constants/routes";
import {
  PERMISSIONS,
  hasPermission,
} from "@/shared/constants/permissions";

import { useAuthStore } from "@/features/auth/store/auth.store";

import { ProductGrid } from "../components/ProductGrid/ProductGrid";
import { ProductHeader } from "../components/ProductHeader/ProductHeader";
import { ProductSearch } from "../components/ProductSearch/ProductSearch";

import { useProductFilters } from "../hooks/useProductFilters";
import { useProducts } from "../hooks/useProducts";
import {ProductSort} from "../components/ProductSort/ProductSort";

export function ProductListPage() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const {
    filters,
    setPage,
    setSearch,
    setSort,
  } = useProductFilters();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useProducts(filters);

  const canEdit = hasPermission(
    user?.role ?? "",
    PERMISSIONS.PRODUCT_EDIT,
  );

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={refetch}
    >
      {(response) => (
        <div className="space-y-6">
          <ProductHeader
            total={response.total}
          />

          <ProductSearch
            value={filters.search ?? ""}
            onChange={setSearch}
          />

          <ProductSort
    sortBy={filters.sortBy}
    order={filters.order}
    onSortChange={setSort}
  />

          <ProductGrid
            products={response.products}
            renderActions={(product) => (
              <div className="flex gap-2">
                <Button
                  fullWidth
                  onClick={() =>
                    navigate(
                      ROUTES.PRODUCT_DETAIL(
                        product.id,
                      ),
                    )
                  }
                >
                  View
                </Button>

                {canEdit && (
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() =>
                      navigate(
                        ROUTES.PRODUCT_EDIT(
                          product.id,
                        ),
                      )
                    }
                  >
                    Edit
                  </Button>
                )}
              </div>
            )}
          />

          <Pagination
            currentPage={filters.page}
            pageSize={filters.limit}
            totalItems={response.total}
            onPageChange={setPage}
          />
        </div>
      )}
    </QueryState>
  );
}