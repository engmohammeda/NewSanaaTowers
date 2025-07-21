import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyTypes } from "@/components/PropertyTypes";
import { OwnerSection } from "@/components/OwnerSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-arabic">
      <Header />
      <Hero />
      <PropertyTypes />
      <OwnerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
