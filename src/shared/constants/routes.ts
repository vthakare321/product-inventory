export const ROUTES = {
  LOGIN: "/login",

  PRODUCTS: "/products",

  PRODUCT_DETAIL: (id: number | string) => `/products/${id}`,

  PRODUCT_EDIT: (id: number | string) => `/products/${id}/edit`,

  FORBIDDEN: "/forbidden",

  NOT_FOUND: "*",
} as const;