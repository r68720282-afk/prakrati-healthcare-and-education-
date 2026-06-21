import { motion } from "framer-motion";

export default function HeroSection() {
return ( <section className="bg-white overflow-hidden"> <div className="max-w-[1500px] mx-auto">

```
    <div className="grid lg:grid-cols-[42%_58%] items-center min-h-[650px]">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="px-8 lg:px-12 py-10"
      >

        <div className="inline-flex items-center border border-green-200 bg-green-50 text-green-700 px-5 py-3 rounded-full text-sm font-semibold mb-6">
          Trusted Healthcare Guidance & Support
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6">
          Your Health,
          <br />
          <span className="text-green-600">
            Our Responsibility
          </span>
        </h1>

        <p className="text-slate-600 text-xl leading-9 mb-8 max-w-xl">
          Prakrati Healthcare & Education provides healthcare
          guidance, awareness programs, wellness initiatives,
          educational support and healthcare query assistance.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">

          <a
            href="tel:8962222552"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918962222552"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            WhatsApp
          </a>

          <a
            href="#query"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Submit Query
          </a>

        </div>

        <div className="bg-white shadow-xl rounded-2xl p-5 flex flex-wrap gap-6 text-slate-700 text-sm">
          <span>✓ Reliable Support</span>
          <span>✓ Confidential & Secure</span>
          <span>✓ Quick Response</span>
        </div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[550px] lg:h-[650px]"
      >

        <img
          src="/hero.jpg"
          alt="Healthcare"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            rounded-l-[50px]
          "
        />

      </motion.div>

    </div>

    {/* FEATURE CARDS */}

    <div className="grid md:grid-cols-4 gap-6 px-8 lg:px-12 py-12 bg-slate-50">

      <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold mb-3">
          Healthcare Support
        </h3>

        <p className="text-gray-600">
          Providing trusted healthcare guidance and support.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold mb-3">
          Health Awareness
        </h3>

        <p className="text-gray-600">
          Promoting awareness for healthier communities.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold mb-3">
          Yoga & Wellness
        </h3>

        <p className="text-gray-600">
          Encouraging healthy and balanced lifestyles.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold mb-3">
          Education Guidance
        </h3>

        <p className="text-gray-600">
          Supporting students with education assistance.
        </p>
      </div>

    </div>

  </div>
</section>
```

);
}
