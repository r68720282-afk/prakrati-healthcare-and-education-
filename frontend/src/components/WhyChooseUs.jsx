export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Guidance",
      desc: "Reliable healthcare information and support.",
    },
    {
      title: "Quick Response",
      desc: "Fast assistance for healthcare related queries.",
    },
    {
      title: "Professional Support",
      desc: "Guidance from experienced healthcare professionals.",
    },
    {
      title: "Yoga & Wellness",
      desc: "Promoting healthy and balanced lifestyles.",
    },
    {
      title: "Education Assistance",
      desc: "Supporting healthcare and education awareness.",
    },
    {
      title: "Community Care",
      desc: "Working for better community health and wellbeing.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            Healthcare Support You Can Trust
          </h2>

          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            We are committed to providing trusted healthcare guidance,
            wellness awareness and community support with a patient-first
            approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
                ✓
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
