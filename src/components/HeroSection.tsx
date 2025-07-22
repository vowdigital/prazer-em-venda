import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Redescubra Seu 
          <span className="block bg-gradient-secondary bg-clip-text text-transparent">
            Prazer Feminino
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in">
          Uma jornada de autoconhecimento e empoderamento para mulheres que desejam 
          reconectar-se com sua sensualidade e bem-estar íntimo
        </p>
        
        <div className="flex justify-center items-center animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="https://wa.me/5511911105896" target="_blank" rel="noopener noreferrer">
              Começar Minha Jornada
            </a>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;