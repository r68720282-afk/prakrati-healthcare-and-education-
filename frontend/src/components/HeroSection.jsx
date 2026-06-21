export default function HeroSection() {
return ( <section className="bg-white overflow-hidden"> <div className="max-w-[1500px] mx-auto">

```
    <div className="grid lg:grid-cols-[42%_58%] items-center min-h-[650px]">

      {/* LEFT CONTENT */}
      <div className="px-8 lg:px-12 py-10">

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
          Prakrati Healthcare & Education is committed to providing
          healthcare guidance, awareness, education support and
          healthcare query assistance.
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

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[650px]">

        <img
          src="/hero.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-4 gap-6 px-8 lg:px-12 py-12 bg-slate-50">

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-xl font-bold mb-3">
          Healthcare Support
        </h3>
        <p className="text-gray-600">
          Providing trusted guidance for better health and well-being.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-xl font-bold mb-3">
          Health Awareness
        </h3>
        <p className="text-gray-600">
          Spreading awareness for a healthier community.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-xl font-bold mb-3">
          Yoga & Wellness
        </h3>
        <p className="text-gray-600">
          Promoting a balanced and healthy lifestyle.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-xl font-bold mb-3">
          Education Guidance
        </h3>
        <p className="text-gray-600">
          Supporting students with education and career guidance.
        </p>
      </div>

    </div>

  </div>
</section>
```

);
}
