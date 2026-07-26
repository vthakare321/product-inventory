import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";
import { loginSchema } from "../validation/login.schema";
import type { LoginSchema } from "../validation/login.schema";

import { ROUTES } from "@/shared/constants/routes";

export function LoginPage() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    try {
      const session = authService.login(
        data.username,
        data.password,
      );

      login(session);

      navigate(ROUTES.PRODUCTS, {
        replace: true,
      });
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Login failed",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">
          Inventory Login
        </h1>

        <div className="mb-4">
          <input
            {...register("username")}
            placeholder="Username"
            className="w-full rounded border p-2"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.username?.message}
          </p>
        </div>

        <div className="mb-4">
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full rounded border p-2"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <p className="mb-3 text-sm text-red-500">
          {errors.root?.message}
        </p>

        <button
          className="w-full rounded bg-blue-600 p-2 text-white"
          type="submit"
        >
          Login
        </button>

        <div className="mt-6 text-sm">
          <p>Manager : manager / manager123</p>
          <p>Viewer : viewer / viewer123</p>
        </div>
      </form>
    </div>
  );
}