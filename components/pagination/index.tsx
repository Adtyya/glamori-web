import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const generatePages = () => {
    const pages: (number | "...")[] = [];
    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    pages.push(1);

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = generatePages();

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className="flex items-center justify-center text-sm list-none text-slate-700 md:gap-1">
        {/* First */}
        <li>
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="items-center justify-center hidden h-10 px-4 font-medium transition duration-300 rounded md:inline-flex hover:bg-glamorig-100 hover:text-glamorig-500 disabled:opacity-40"
          >
            First
          </button>
        </li>

        {/* Prev */}
        <li>
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="inline-flex items-center justify-center h-10 gap-4 px-4 font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-glamorig-100 hover:stroke-glamorig-500 hover:text-glamorig-500 disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {/* Page Numbers (with ellipsis) */}
        {pages.map((page, idx) => (
          <li key={idx}>
            {page === "..." ? (
              <span className="items-center justify-center hidden h-10 px-3 md:inline-flex text-slate-400">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`hidden md:inline-flex h-10 items-center justify-center rounded px-4 font-medium transition duration-300
                  ${
                    page === currentPage
                      ? "bg-glamorig-500 text-white"
                      : "text-slate-700 hover:bg-glamorig-100 hover:text-glamorig-500"
                  }`}
                aria-current={page === currentPage ? "true" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="inline-flex items-center justify-center h-10 gap-4 px-4 font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-glamorig-100 hover:stroke-glamorig-500 hover:text-glamorig-500 disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>

        {/* Last */}
        <li>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="items-center justify-center hidden h-10 px-4 font-medium transition duration-300 rounded md:inline-flex hover:bg-glamorig-100 hover:text-glamorig-500 disabled:opacity-40"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
