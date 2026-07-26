import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title is required"),

  description: z
    .string()
    .trim()
    .min(10, "Description is required"),

  price: z
    .number({
      error: "Price is required",
    })
    .positive(),

  stock: z
    .number({
      error: "Stock is required",
    })
    .min(0),
});

export type ProductFormData = z.infer<
  typeof productSchema
>;