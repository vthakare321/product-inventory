import { forwardRef } from "react";

import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`
            w-full
            rounded-md
            border
            border-gray-300
            px-3
            py-2
            outline-none
            transition
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";