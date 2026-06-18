import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>📞 8962222552</span>

          <a
            href="https://wa.me/918962222552"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200"
          >
            WhatsApp Support
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-green-700"
          >
            Prakrati Healthcare & Education
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              About Us
            </Link>

            <Link
              to="/admin"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918962222552"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h3 className="text-xl font-bold mb-3">
            Prakrati Healthcare & Education
          </h3>

          <p className="text-slate-300 mb-4">
            Your Health, Our Responsibility
          </p>

          <div className="space-y-2 text-slate-300">
            <p>📞 Phone: 8962222552</p>
            <p>💬 WhatsApp: 8962222552</p>
          </div>

          <div className="border-t border-slate-700 mt-6 pt-4 text-sm text-slate-400">
            © 2026 Prakrati Healthcare & Education. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
