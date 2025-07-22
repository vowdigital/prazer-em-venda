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
        
        {/* Floating circles with gentle bounce animation */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 md:w-20 md:h-20 bg-accent/10 rounded-full animate-bounce -z-10 hidden sm:block" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full animate-bounce -z-10 hidden sm:block" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 md:w-12 md:h-12 bg-secondary/15 rounded-full animate-bounce -z-10 hidden sm:block" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;