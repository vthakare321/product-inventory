import type { ProductFormData } from "../validation/product.schema";

export interface ProductFormProps {
  defaultValues: ProductFormData;

  isSubmitting: boolean;

  onSubmit: (
    values: ProductFormData,
  ) => void;
}