import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Prakrati"
                className="h-12 w-auto"
              />

              <div>
                <h2 className="font-bold text-green-700 text-xl">
                  PRAKRATI
                </h2>

                <p className="text-xs text-slate-500">
                  Healthcare & Education
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
              <Link
                to="/"
                className="hover:text-green-600 transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-green-600 transition-all duration-300"
              >
                About Us
              </Link>

              <Link
                to="/#services"
                className="hover:text-green-600 transition-all duration-300"
              >
                Services
              </Link>

              <Link
                to="/#gallery"
                className="hover:text-green-600 transition-all duration-300"
              >
                Gallery
              </Link>
                <Link
  to="/blog"
  className="hover:text-green-600 transition-all duration-300"
>
  Blog
</Link>
              <Link
                to="/careers"
                className="hover:text-green-600 transition-all duration-300"
              >
                Careers
              </Link>

              <Link
                to="/#query"
                className="hover:text-green-600 transition-all duration-300"
              >
                Healthcare Query
              </Link>
            </nav>

            {/* Call Button */}
            <a
              href="tel:8962222552"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918962222552"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl z-50 hover:scale-110 transition-all duration-300"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
