import type { ButtonProps } from "./Button.types";

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-green-600 text-white hover:bg-green-700",

  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-3 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      disabled={loading || disabled}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-md
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}