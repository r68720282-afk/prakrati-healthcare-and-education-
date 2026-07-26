import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import GallerySection from "../components/GallerySection";
import HealthcareQueryForm from "../components/HealthcareQueryForm";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Prakrati Healthcare & Education</title>

        <meta
          name="description"
          content="Healthcare guidance, health awareness programs, wellness initiatives, student health screening and education support services."
        />
      </Helmet>

      {/* Temporary Admin Login Button */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/admin-login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-lg font-semibold"
        >
          Admin Login
        </Link>
      </div>

      <HeroSection />

      <WhyChooseUs />

      <AboutSection />

      <ServicesSection />

      <ProcessSection />

      <GallerySection />

      <HealthcareQueryForm />
    </>
  );
}
