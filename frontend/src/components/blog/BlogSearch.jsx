export default function BlogSearch({ searchTerm, onSearchChange }) {
  return (
    <label className="block">
      <span className="sr-only">Search blog posts</span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search health topics..."
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
      />
    </label>
  );
}
