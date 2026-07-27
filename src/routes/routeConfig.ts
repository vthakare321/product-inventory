
import type { ComponentType } from "react";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProductDetailPage } from "@/features/products/pages/ProductDetailPage";
import { ProductEditPage } from "@/features/products/pages/ProductEditPage";
import { ProductListPage } from "@/features/products/pages/ProductListPage";
import { PERMISSIONS } from "@/shared/constants/permissions";
import { ROUTES } from "@/shared/constants/routes";

export interface AppRoute {
  path: string;
  component: ComponentType;
  protected?: boolean;
  permission?: string;
  showInSidebar?: boolean;
  title?: string;
}

export const appRoutes: AppRoute[] = [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },

  {
    path: ROUTES.PRODUCTS,
    component: ProductListPage,
    protected: true,
    permission: PERMISSIONS.PRODUCT_VIEW,
    showInSidebar: true,
    title: "Products",
  },

  {
    path: "/products/:id",
    component: ProductDetailPage,
    protected: true,
    permission: PERMISSIONS.PRODUCT_DETAIL,
  },

  {
    path: "/products/:id/edit",
    component: ProductEditPage,
    protected: true,
    permission: PERMISSIONS.PRODUCT_EDIT,
  },

  {
    path: ROUTES.FORBIDDEN,
    component: ForbiddenPage,
  },

  {
    path: "*",
    component: NotFoundPage,
  },
];