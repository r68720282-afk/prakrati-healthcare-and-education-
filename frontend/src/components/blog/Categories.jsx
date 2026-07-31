export default function Categories({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-green-600 text-white shadow-lg shadow-green-100"
              : "bg-white text-slate-600 border border-slate-200 hover:border-green-300 hover:text-green-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
