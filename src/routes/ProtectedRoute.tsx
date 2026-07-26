import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/constants/routes";
import { useAuthStore } from "@/features/auth/store/auth.store";

export function ProtectedRoute() {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}