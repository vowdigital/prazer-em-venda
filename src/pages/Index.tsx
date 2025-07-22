import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white font-dancing drop-shadow-lg">Prazer com Luxo</h1>
      </header>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FAQSection />
      <TwoColumnSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
