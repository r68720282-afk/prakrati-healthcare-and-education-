export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
              Trusted Healthcare Guidance & Support
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Your Health,
              <br />
              <span className="text-green-600">
                Our Responsibility
              </span>
            </h1>

            <p className="text-slate-600 text-lg leading-8 mb-8">
              Prakrati Healthcare & Education provides healthcare guidance,
              health awareness, yoga & wellness initiatives, education support
              and healthcare query assistance.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">

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
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Submit Query
              </a>

            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span>✓ Reliable Support</span>
              <span>✓ Confidential & Secure</span>
              <span>✓ Quick Response</span>
            </div>

          </div>

          {/* Right Side Image */}
          <div>
            <img
              src="/hero.jpg"
              alt="Healthcare"
              className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-5 mt-12">

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Healthcare Support
            </h3>
            <p className="text-sm text-gray-600">
              Trusted guidance for better health and well-being.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Health Awareness
            </h3>
            <p className="text-sm text-gray-600">
              Building awareness for a healthier community.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Yoga & Wellness
            </h3>
            <p className="text-sm text-gray-600">
              Promoting healthy and balanced lifestyles.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">
              Education Guidance
            </h3>
            <p className="text-sm text-gray-600">
              Supporting students with education assistance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
