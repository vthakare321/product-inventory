import { Navigate, Outlet } from "react-router-dom";

import { hasPermission } from "@/shared/constants/permissions";
import { ROUTES } from "@/shared/constants/routes";
import type { Permission } from "@/shared/constants/permissions";
import { useAuthStore } from "@/features/auth/store/auth.store";

interface PermissionRouteProps {
  permission: Permission;
}

export function PermissionRoute({
  permission,
}: PermissionRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (!hasPermission(user.role, permission)) {
    return <Navigate to={ROUTES.FORBIDDEN} replace />;
  }

  return <Outlet />;
}
