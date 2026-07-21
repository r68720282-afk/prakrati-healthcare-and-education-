import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
  to="/"
  className="text-2xl font-bold text-green-600"
>
  Prakrati Healthcare
</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">

            <Link to="/" className="hover:text-green-600">
  Home
</Link>

            <a href="#services" className="hover:text-green-600">
              Services
            </a>

            <a href="#gallery" className="hover:text-green-600">
              Gallery
            </a>

            <a href="#about" className="hover:text-green-600">
              About
              <Link to="/careers" className="hover:text-green-600">
  Careers
</Link>
            </a>
             
            <a
              href="#query"
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Healthcare Query
            </a>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden pb-6 flex flex-col gap-4">

            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
            <a href="#services">Services</a>

            <a href="#gallery">Gallery</a>

            <a href="#about">About</a>

            <a href="#query">Healthcare Query</a>

          </div>
        )}

      </div>
    </header>
  );
}
