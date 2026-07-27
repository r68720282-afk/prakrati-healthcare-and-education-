import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Us | Prakrati Healthcare & Education | Healthcare & Education
        </title>

        <meta
          name="description"
          content="Learn about Prakrati Healthcare & Education. We provide healthcare guidance, wellness awareness, education support, and community-focused initiatives to improve lives across India."
        />

        <meta
          name="keywords"
          content="Prakrati Healthcare & Education, healthcare, education, wellness, telemedicine, healthcare awareness, community health, student guidance, Madhya Pradesh, India"
        />

        <meta name="author" content="Prakrati Healthcare & Education" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://yourdomain.com/about"
        />

        <meta
          property="og:title"
          content="About Prakrati Healthcare & Education"
        />

        <meta
          property="og:description"
          content="Empowering communities through healthcare guidance, education support, and wellness awareness."
        />

        <meta
          property="og:image"
          content="https://yourdomain.com/images/about-banner.jpg"
        />

        <meta
          property="og:url"
          content="https://yourdomain.com/about"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Prakrati Healthcare & Education
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-8">
            We are committed to promoting better healthcare awareness,
            educational support, and community wellbeing through trusted
            guidance and meaningful initiatives.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-green-700">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8 mb-5">
              Prakrati Healthcare & Education is dedicated to helping
              individuals and families access reliable healthcare guidance,
              wellness awareness programs, and educational support.
            </p>

            <p className="text-gray-700 leading-8">
              Our goal is to build healthier communities by spreading
              knowledge, encouraging preventive healthcare, and supporting
              education for people of all ages.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-7">
              To make healthcare guidance and education accessible, helping
              individuals make informed decisions for healthier and better
              lives.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-700 leading-7">
              To create a healthier, educated, and empowered society through
              awareness, innovation, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">🏥</div>

              <h3 className="text-xl font-semibold mb-4">
                Healthcare Guidance
              </h3>

              <p className="text-gray-600">
                Reliable information, awareness, and support for better health
                and wellbeing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">🎓</div>

              <h3 className="text-xl font-semibold mb-4">
                Education Support
              </h3>

              <p className="text-gray-600">
                Helping students and families access educational guidance and
                useful resources.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">🤝</div>

              <h3 className="text-xl font-semibold mb-4">
                Community Impact
              </h3>

              <p className="text-gray-600">
                Working with communities to improve awareness, wellness, and
                quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-green-700 text-white rounded-2xl p-10 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-4 text-lg">
              <p>📞 Phone : +91 8962222552</p>

              <p>💬 WhatsApp : +91 8962222552</p>

              <p>📍 Madhya Pradesh, India</p>

              <p>✉️ Email : info@prakratihealthcare.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
