import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/shared/components/Button";
import { Loader } from "@/shared/components/Loader";
import { ErrorState } from "@/shared/components/ErrorState/ErrorState";

import { ROUTES } from "@/shared/constants/routes";

import { useProduct } from "../hooks";
import { ProductDetail } from "../components/ProductDetail";

export function ProductDetailPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const productId = Number(id);

  const {
    data,
    isLoading,
    isError,
  } = useProduct(productId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <ErrorState />;
  }

  return (
    <div className="space-y-6">
      <Button
        variant="secondary"
        onClick={() => navigate(ROUTES.PRODUCTS)}
      >
        Back
      </Button>

      <ProductDetail product={data} />
    </div>
  );
}