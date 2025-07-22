import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TwoColumnSection = () => {
  return (
    <section className="py-12 px-6 bg-background">
      
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