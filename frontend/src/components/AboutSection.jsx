export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/gallery3.jpg"
              alt="About Prakrati"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <span className="text-green-600 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              Prakrati Healthcare & Education
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              Prakrati Healthcare & Education provides healthcare guidance,
              health awareness initiatives, yoga & wellness programs and
              education support for communities and individuals.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Our goal is to connect people with trusted information,
              healthcare assistance and educational guidance through a
              professional and accessible platform.
            </p>

            <a
              href="/about"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Learn More
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
