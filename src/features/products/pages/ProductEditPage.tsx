import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/shared/components/Button";
import { QueryState } from "@/shared/components/QueryState";

import { ROUTES } from "@/shared/constants/routes";

import { useProduct } from "../hooks/useProduct";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

import { ProductForm } from "../components/ProductForm/ProductForm";

export function ProductEditPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const productId = Number(id);

  const {
    data,
    isLoading,
    isError,
  } = useProduct(productId);

  const updateProduct = useUpdateProduct();

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
    >
      {(product) => (
        <div className="space-y-6">
          <Button
            variant="secondary"
            onClick={() => navigate(ROUTES.PRODUCTS)}
          >
            Back
          </Button>

          <ProductForm
            defaultValues={{
              title: product.title,
              description: product.description,
              price: product.price,
              stock: product.stock,
            }}
            isSubmitting={updateProduct.isPending}
            onSubmit={(values) =>
              updateProduct.mutate(
                {
                  id: product.id,
                  payload: values,
                },
                {
                  onSuccess: () => {
                    navigate(ROUTES.PRODUCTS);
                  },
                },
              )
            }
          />
        </div>
      )}
    </QueryState>
  );
}