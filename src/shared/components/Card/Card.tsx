import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title?: string;
}

export function Card({
  title,
  children,
}: CardProps) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-semibold">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}