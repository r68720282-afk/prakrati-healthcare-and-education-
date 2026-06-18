import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import HealthcareQueryForm from "../components/HealthcareQueryForm";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Prakrati Healthcare & Education</title>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <HealthcareQueryForm />
    </>
  );
}
