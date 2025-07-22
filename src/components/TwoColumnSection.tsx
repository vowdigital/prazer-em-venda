import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TwoColumnSection = () => {
  return (
    <section className="py-12 px-6 bg-background relative overflow-hidden">
      {/* Animated Circles - behind content */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-full absolute top-16 left-4 md:left-20 animate-bounce hidden sm:block" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="w-6 h-6 md:w-8 md:h-8 bg-accent/20 rounded-full absolute top-32 right-4 md:right-16 animate-bounce hidden sm:block" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-primary rounded-full absolute bottom-20 left-2 md:left-12 animate-bounce opacity-30 hidden sm:block" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/30 rounded-full absolute bottom-32 right-6 md:right-24 animate-bounce hidden sm:block" style={{animationDelay: '2s', animationDuration: '4.5s'}}></div>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full absolute top-48 left-1/3 animate-bounce opacity-40 hidden sm:block" style={{animationDelay: '0.5s', animationDuration: '5s'}}></div>
        <div className="w-10 h-10 md:w-14 md:h-14 bg-accent/15 rounded-full absolute top-20 right-1/3 animate-bounce hidden sm:block" style={{animationDelay: '2.5s', animationDuration: '3.8s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Formatos disponíveis
          </h2>
        </div>
        
        <Card className="shadow-soft border-primary/10">
          <CardContent className="p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Modalidades de Atendimento
                </h3>
                <div className="space-y-3 text-base md:text-lg text-muted-foreground">
                  <p>• Atendimento individual online</p>
                  <p>• Atendimento para casais (com os dois ou com apenas um parceiro)</p>
                  <p>• Sessões semanais, com acompanhamento via WhatsApp</p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Ferramentas que utilizamos
                </h3>
                <div className="space-y-3 text-base md:text-lg text-muted-foreground">
                  <p>• Terapia tântrica (sem práticas corporais)</p>
                  <p>• Ho'oponopono para liberação de crenças</p>
                  <p>• Orientações práticas com produtos da loja Prazer com Luxo</p>
                  <p>• Tarefas e dinâmicas para aplicar no dia a dia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-primary hover:scale-105 transition-transform duration-300" 
            asChild
          >
            <a href="https://wa.me/5511911105896" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;