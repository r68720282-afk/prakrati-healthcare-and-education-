export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="text-lg mb-3">
            Your Health, Our Responsibility
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Prakrati Healthcare & Education
          </h1>

          <p className="text-lg">
            Health guidance, healthcare support and educational assistance.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="tel:8962222552"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918962222552"
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <img
            src="/hero.jpg"
            alt="Healthcare"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
