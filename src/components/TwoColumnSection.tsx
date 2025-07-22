import { Card, CardContent } from "@/components/ui/card";

const TwoColumnSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Formatos disponíveis
          </h2>
        </div>
        
        <Card className="shadow-soft border-primary/10">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Modalidades de Atendimento
                </h3>
                <div className="space-y-3 text-lg text-muted-foreground">
                  <p>• Atendimento individual online</p>
                  <p>• Atendimento para casais (com os dois ou com apenas um parceiro)</p>
                  <p>• Sessões semanais, com acompanhamento via WhatsApp</p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ferramentas que utilizamos
                </h3>
                <div className="space-y-3 text-lg text-muted-foreground">
                  <p>• Terapia tântrica (sem práticas corporais)</p>
                  <p>• Ho'oponopono para liberação de crenças</p>
                  <p>• Orientações práticas com produtos da loja Prazer com Luxo</p>
                  <p>• Tarefas e dinâmicas para aplicar no dia a dia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TwoColumnSection;