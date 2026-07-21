export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Submit Query",
      desc: "Share your healthcare concern through our online query form.",
    },
    {
      number: "02",
      title: "Expert Review",
      desc: "Our team carefully reviews and understands your query.",
    },
    {
      number: "03",
      title: "Get Guidance",
      desc: "Receive trusted healthcare guidance and recommendations.",
    },
    {
      number: "04",
      title: "Follow-Up Support",
      desc: "We stay connected and provide further assistance when needed.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            Simple & Easy Process
          </h2>

          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            We make healthcare assistance simple, transparent and easy for
            everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold mb-5">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
