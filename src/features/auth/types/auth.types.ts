import type { Role } from "@/shared/constants/roles";

export interface User {
  username: string;
  role: Role;
}

export interface Session {
  token: string;
  user: User;
}