
import { ROLES } from "./roles";

export const PERMISSIONS = {
  PRODUCT_VIEW: "product:view",
  PRODUCT_DETAIL: "product:detail",
  PRODUCT_EDIT: "product:edit",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const rolePermissions: Record<string, Permission[]> = {
  [ROLES.MANAGER]: [
    PERMISSIONS.PRODUCT_VIEW,
    PERMISSIONS.PRODUCT_DETAIL,
    PERMISSIONS.PRODUCT_EDIT,
  ],

  [ROLES.VIEWER]: [
    PERMISSIONS.PRODUCT_VIEW,
    PERMISSIONS.PRODUCT_DETAIL,
  ],
};

export const hasPermission = (
  role: string,
  permission: Permission,
) => {
  return rolePermissions[role]?.includes(permission);
};