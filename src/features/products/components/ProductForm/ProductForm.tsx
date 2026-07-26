import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

import {
  productSchema,
  type ProductFormData,
} from "../../validation/product.schema";

import type { ProductFormProps } from "../../types/ProductForm.types";
import { useEffect } from "react";

export function ProductForm({
  defaultValues,
  isSubmitting,
  onSubmit,
}: ProductFormProps) {
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<ProductFormData>({
  resolver: zodResolver(productSchema),
  defaultValues,
});

useEffect(() => {
  reset(defaultValues);
}, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <Input
        label="Title"
        error={errors.title?.message}
        {...register("title")}
      />

      <Input
        label="Description"
        error={errors.description?.message}
        {...register("description")}
      />

      <Input
        type="number"
        label="Price"
        error={errors.price?.message}
        {...register("price", {
          valueAsNumber: true,
        })}
      />

      <Input
        type="number"
        label="Stock"
        error={errors.stock?.message}
        {...register("stock", {
          valueAsNumber: true,
        })}
      />

      <Button
        type="submit"
        loading={isSubmitting}
      >
        Save Product
      </Button>
    </form>
  );
}