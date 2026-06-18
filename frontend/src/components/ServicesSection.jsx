export default function ServicesSection() {
  const services = [
    {
      title: "Healthcare Guidance",
      desc: "Reliable healthcare information and support."
    },
    {
      title: "Healthcare Query Support",
      desc: "Submit your healthcare queries and get assistance."
    },
    {
      title: "Health Awareness",
      desc: "Awareness programs for healthier communities."
    },
    {
      title: "Education Guidance",
      desc: "Educational support and career guidance."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Supporting communities through healthcare and education.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
