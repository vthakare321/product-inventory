import { Outlet, useNavigate } from "react-router-dom";

import { ROUTES } from "@/shared/constants/routes";
import { useAuthStore } from "@/features/auth/store/auth.store";

export function AppLayout() {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    logout();

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b p-4">
        <h1 className="font-bold">Inventory Management</h1>

        <div className="flex items-center gap-4">
          <span>{user?.role}</span>

          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-3 py-1 text-white"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}