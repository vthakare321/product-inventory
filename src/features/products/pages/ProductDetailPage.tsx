import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/shared/components/Button";
// import { Loader } from "@/shared/components/Loader";
// import { ErrorState } from "@/shared/components/ErrorState/ErrorState";

import { ROUTES } from "@/shared/constants/routes";

import { useProduct } from "../hooks";
import { ProductDetail } from "../components/ProductDetail";
import { QueryState } from "@/shared/components/QueryState";
export function ProductDetailPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useProduct(Number(id));

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={refetch}
    >
      {(product) => (
        <div className="space-y-6">
          <Button
            variant="secondary"
            onClick={() =>
              navigate(ROUTES.PRODUCTS)
            }
          >
            Back
          </Button>

          <ProductDetail product={product} />
        </div>
      )}
    </QueryState>
  );
}