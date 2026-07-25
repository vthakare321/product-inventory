export const queryKeys = {
  products: {
    all: ["products"] as const,

    list: (params?: Record<string, unknown>) =>
      [...queryKeys.products.all, "list", params] as const,

    detail: (id: number) =>
      [...queryKeys.products.all, "detail", id] as const,
  },

  categories: {
    all: ["categories"] as const,
  },
};