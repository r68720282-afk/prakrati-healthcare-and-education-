export default function ServicesSection() {
  const services = [
    {
      title: "Healthcare Guidance",
      icon: "🩺",
    },
    {
      title: "Health Checkup Camps",
      icon: "🏥",
    },
    {
      title: "Yoga & Wellness",
      icon: "🧘",
    },
    {
      title: "Health Awareness",
      icon: "📢",
    },
    {
      title: "Student Health Screening",
      icon: "👨‍🎓",
    },
    {
      title: "Education Guidance",
      icon: "📚",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Services
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We provide healthcare guidance, awareness programs,
            wellness initiatives and educational support for
            individuals and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-white
                border
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
