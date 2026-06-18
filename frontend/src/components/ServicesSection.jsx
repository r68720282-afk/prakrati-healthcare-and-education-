export default function ServicesSection() {
  const services = [
    "Healthcare Guidance",
    "Healthcare Query Support",
    "Health Awareness Programs",
    "Education Guidance"
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
