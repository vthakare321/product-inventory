import { ROLES } from "@/shared/constants/roles";

export const USERS = [
  {
    username: "manager",
    password: "manager123",
    role: ROLES.MANAGER,
  },

  {
    username: "viewer",
    password: "viewer123",
    role: ROLES.VIEWER,
  },
] as const;