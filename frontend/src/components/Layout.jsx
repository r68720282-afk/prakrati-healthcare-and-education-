import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

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

            <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#query">Healthcare Query</a>
            </nav>

            <a
              href="tel:8962222552"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              Call Now
            </a>

          </div>
        </div>
      </header>

      <main>{children}</main>

      <a
        href="https://wa.me/918962222552"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        WhatsApp
      </a>

    </div>
  );
}
