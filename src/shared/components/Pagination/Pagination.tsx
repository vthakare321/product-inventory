import { Button } from "../Button";

import type { PaginationProps } from "./Pagination.types";

export function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}