export default function HeroSection() {
return ( <section className="bg-white py-10 overflow-hidden"> <div className="max-w-7xl mx-auto px-6">

```
    <div className="grid lg:grid-cols-2 gap-0 items-center">

      {/* Left Content */}
      <div className="pr-10">

        <span className="inline-flex items-center bg-green-50 text-green-700 border border-green-200 px-5 py-2 rounded-full text-sm font-medium mb-6">
          Trusted Healthcare Guidance & Support
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
          Your Health,
          <br />
          <span className="text-green-600">
            Our Responsibility
          </span>
        </h1>

        <p className="text-slate-600 text-lg leading-8 mb-8">
          Prakrati Healthcare & Education provides healthcare guidance,
          health awareness, yoga & wellness initiatives, education support
          and healthcare query assistance.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href="tel:8962222552"
            className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-xl font-semibold transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918962222552"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-7 py-4 rounded-xl font-semibold transition"
          >
            WhatsApp
          </a>

          <a
            href="#query"
            className="bg-blue-900 hover:bg-blue-800 text-white px-7 py-4 rounded-xl font-semibold transition"
          >
            Submit Query
          </a>

        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <span>✓ Reliable Support</span>
          <span>✓ Confidential & Secure</span>
          <span>✓ Quick Response</span>
        </div>

      </div>

      {/* Right Image */}
      <div>
        <img
          src="/hero.jpg"
          alt="Healthcare"
          className="w-full h-[600px] object-cover rounded-l-[60px] shadow-2xl"
        />
      </div>

    </div>

  </div>
</section>
```

);
}
