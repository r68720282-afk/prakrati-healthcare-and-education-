import { Helmet } from "react-helmet-async";

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import HealthcareQueryForm from "../components/HealthcareQueryForm";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Prakrati Healthcare & Education
        </title>

        <meta
          name="description"
          content="Healthcare guidance, health awareness programs, wellness initiatives, student health screening and education support services."
        />
      </Helmet>

      <HeroSection />

      <WhyChooseUs />
      
      <AboutSection />

      <ServicesSection />

      <GallerySection />

      <HealthcareQueryForm />
    </>
  );
}
