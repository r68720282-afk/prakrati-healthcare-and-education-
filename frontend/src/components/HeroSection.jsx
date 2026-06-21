export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
              Trusted Healthcare Guidance & Support
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Your Health,
              <br />
              <span className="text-green-600">
                Our Responsibility
              </span>
            </h1>

            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              Prakrati Healthcare & Education provides healthcare guidance,
              health awareness, yoga & wellness initiatives, education support
              and healthcare query assistance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="tel:8962222552"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918962222552"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                WhatsApp
              </a>

              <a
                href="#query"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Submit Query
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/hero.jpg"
              alt="Healthcare"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-5 mt-12">

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-slate-800">
              Healthcare Support
            </h3>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-slate-800">
              Health Awareness
            </h3>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-slate-800">
              Yoga & Wellness
            </h3>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-slate-800">
              Education Guidance
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}
