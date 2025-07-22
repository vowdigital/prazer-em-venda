import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            DÚVIDAS FREQUENTES
          </h2>
        </div>
        
        {/* Info Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-primary/5 border-primary/20 shadow-soft transition-transform duration-300 hover:scale-110">
            <CardContent className="p-6">
              <h3 className="text-[1.35rem] font-bold text-foreground mb-4">O que é essa consultoria?</h3>
              <p className="text-[1.10rem] text-muted-foreground mb-4">
                Essa é uma jornada individual (ou em casal) criada especialmente para mulheres que desejam reconectar-se com sua intimidade. É um espaço seguro, sem julgamentos, onde vamos juntas identificar bloqueios, padrões e crenças que limitam seu prazer e, por consequência, sua expressão afetiva e sexual.
              </p>
              <p className="text-[1.10rem] text-muted-foreground">
                Através de uma abordagem holística com base na terapia tântrica, no Ho'oponopono e em ferramentas de reconexão energética, vamos construir um caminho possível e respeitoso de autoconhecimento.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary/5 border-accent/20 shadow-soft transition-transform duration-300 hover:scale-110 border border-solid border-accent/40">
            <CardContent className="p-6">
              <h3 className="text-[1.35rem] font-bold text-foreground mb-4">Para quem é?</h3>
              <div className="text-[1.10rem] text-muted-foreground space-y-2">
                <p>• Mulheres acima de 40 anos que se sentem desconectadas de si ou do parceiro</p>
                <p>• Casais que desejam aprofundar a intimidade</p>
                <p>• Pessoas que desejam trabalhar suas energias e crenças em torno da sexualidade</p>
                <p>• Quem nunca falou abertamente sobre o tema, mas sente que chegou a hora</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-primary/5 border-primary/20 shadow-soft transition-transform duration-300 hover:scale-110">
            <CardContent className="p-6">
              <h3 className="text-[1.35rem] font-bold text-foreground mb-4">Como funciona?</h3>
              <div className="text-[1.10rem] text-muted-foreground space-y-3">
                <div>
                  <p className="font-semibold text-foreground">1. Sessão Diagnóstica Online</p>
                  <p className="text-[1.10rem]">(gratuita ou paga, você escolhe) Uma conversa inicial para entender sua história, suas dúvidas, desafios e desejos.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">2. Proposta personalizada</p>
                  <p className="text-[1.10rem]">Sugestão de um plano com sessões semanais online, usando exercícios práticos, orientações energéticas e produtos sensoriais.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">3. Caminho com presença</p>
                  <p className="text-[1.10rem]">Cada encontro é único, respeitando o seu tempo e seu momento.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;