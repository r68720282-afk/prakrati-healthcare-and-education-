export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-11 w-11 rounded-full font-semibold transition ${
            page === currentPage
              ? "bg-green-600 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:text-green-700"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
