import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-50 p-6 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-white font-dancing">Prazer com Luxo</h1>
      </header>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
