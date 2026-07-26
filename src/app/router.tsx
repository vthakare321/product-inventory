import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import { ProductListPage } from "@/features/products/pages/ProductListPage";
import { ProductDetailPage } from "@/features/products/pages/ProductDetailPage";
import { ProductEditPage } from "@/features/products/pages/ProductEditPage";
import { AppLayout } from "@/layouts/AppLayout";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { PermissionRoute } from "@/routes/PermissionRoute";
import { PERMISSIONS } from "@/shared/constants/permissions";
import { ROUTES } from "@/shared/constants/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.PRODUCTS} replace />,
  },

  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            element: (
              <PermissionRoute
                permission={PERMISSIONS.PRODUCT_VIEW}
              />
            ),
            children: [
              {
                path: ROUTES.PRODUCTS,
                element: <ProductListPage />,
              },
            ],
          },

          {
            element: (
              <PermissionRoute
                permission={PERMISSIONS.PRODUCT_DETAIL}
              />
            ),
            children: [
              {
                path: "/products/:id",
                element: <ProductDetailPage />,
              },
            ],
          },

          {
            element: (
              <PermissionRoute
                permission={PERMISSIONS.PRODUCT_EDIT}
              />
            ),
            children: [
              {
                path: "/products/:id/edit",
                element: <ProductEditPage />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: ROUTES.FORBIDDEN,
    element: <ForbiddenPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);