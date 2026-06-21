export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
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

            <h2 className="text-4xl font-bold text-slate-800 mt-3 mb-6">
              Trusted Healthcare & Education Support
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              Prakrati Healthcare & Education is dedicated to
              supporting individuals and communities through
              healthcare guidance, wellness initiatives,
              awareness programs and educational assistance.
            </p>

            <p className="text-slate-600 leading-8 mb-8">
              Our goal is to provide reliable information,
              healthcare support and community-focused services
              that help people make informed decisions for a
              healthier and better future.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-green-700">
                  Healthcare Guidance
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-green-700">
                  Health Awareness
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-green-700">
                  Yoga & Wellness
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-green-700">
                  Education Support
                </h3>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
