import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20">

      {/* Top Wave */}
      <div className="bg-white">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 text-slate-950"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Top Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 pb-10 border-b border-slate-700">

            <div className="text-center">
              <div className="text-4xl mb-2">🌿</div>
              <h3 className="font-semibold">Better Health</h3>
              <p className="text-sm text-slate-400">Happier You</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">❤️</div>
              <h3 className="font-semibold">Stay Healthy</h3>
              <p className="text-sm text-slate-400">Daily Wellness</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">🧘</div>
              <h3 className="font-semibold">Healthy Lifestyle</h3>
              <p className="text-sm text-slate-400">Small Steps</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm text-slate-400">For Everyone</p>
            </div>

          </div>

          {/* Main Columns */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">

              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.png" alt="Prakrati" className="h-14" />

                <div>
                  <h2 className="text-3xl font-bold text-green-400">
                    PRAKRATI
                  </h2>
                  <p className="text-sm text-slate-400">
                    Healthcare & Education
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-7">
                We share healthcare guidance, wellness awareness,
                nutrition tips and educational resources to help people
                build healthier and better informed lives.
              </p>

              <div className="mt-8 flex gap-4 text-2xl">
                <a href="#" className="hover:scale-110 transition">▶️</a>
                <a href="#" className="hover:scale-110 transition">📘</a>
                <a href="#" className="hover:scale-110 transition">📷</a>
                <a href="#" className="hover:scale-110 transition">❌</a>
              </div>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="text-xl font-semibold mb-5 border-l-4 border-green-500 pl-3">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-300">

                <li><Link to="/" className="hover:text-green-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-green-400">About</Link></li>
                <li><Link to="/blog" className="hover:text-green-400">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-green-400">Careers</Link></li>

              </ul>

            </div>

            {/* Categories */}
            <div>

              <h3 className="text-xl font-semibold mb-5 border-l-4 border-green-500 pl-3">
                Categories
              </h3>

              <ul className="space-y-3 text-slate-300">

                <li>Women's Health</li>
                <li>Nutrition</li>
                <li>Mental Health</li>
                <li>Yoga</li>
                <li>Heart Health</li>
                <li>Diabetes</li>

              </ul>

            </div>

            {/* Newsletter */}
            <div>

              <h3 className="text-xl font-semibold mb-5 border-l-4 border-green-500 pl-3">
                Newsletter
              </h3>

              <p className="text-slate-300 text-sm mb-4">
                Get health tips and new blog updates directly in your inbox.
              </p>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-green-500"
              />

              <button className="mt-4 w-full rounded-xl bg-green-600 hover:bg-green-700 py-3 font-semibold transition">
                Subscribe
              </button>

              <div className="mt-5 text-sm text-slate-400">
                📞 8962222552
              </div>

              <div className="mt-2 text-sm text-slate-400">
                📍 Madhya Pradesh, India
              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm">
              © 2026 Prakrati Healthcare & Education. All rights reserved.
            </p>

            <div className="text-slate-400 text-sm text-center">
              ❤️ Healthy Mind • Healthy Body • Healthy Life
            </div>

            <button
              onClick={scrollTop}
              className="bg-pink-500 hover:bg-pink-600 h-12 w-12 rounded-full text-xl transition hover:scale-110"
            >
              ↑
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}
