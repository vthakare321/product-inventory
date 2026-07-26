interface ProductHeaderProps {
  total: number;
}

export function ProductHeader({
  total,
}: ProductHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="text-gray-500">
          Total Products : {total}
        </p>
      </div>
    </div>
  );
}