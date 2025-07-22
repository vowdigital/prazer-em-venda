import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Redescobrindo sua intimidade com leveza,
              <span className="bg-gradient-primary bg-clip-text text-transparent"> consciência e conexão</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Você sente que vive um bom relacionamento, mas ainda assim falta algo na sua conexão íntima?
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Talvez você tenha parado de se olhar com desejo, de se tocar com amor, ou de se permitir sentir prazer de forma plena. E está tudo bem sentir isso. Muitas mulheres passam por essa fase – especialmente após os 40 anos – carregando a ideia de que a sexualidade é algo mecânico ou apenas para agradar o outro.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mas a verdade é: o prazer é seu. E ele pode ser leve, sensorial, espiritual, profundo. E mais do que isso: pode transformar seus relacionamentos, sua autoestima e sua presença no mundo.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-foreground font-semibold">Certificada e Especializada</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 relative overflow-hidden rounded-xl flex items-center justify-center">
              {/* Floating Circles */}
              <div className="absolute inset-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full absolute top-8 left-12 animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}></div>
                <div className="w-8 h-8 bg-accent/70 rounded-full absolute top-20 right-16 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
                <div className="w-12 h-12 bg-primary/80 rounded-full absolute bottom-24 left-8 animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
                <div className="w-20 h-20 bg-gradient-secondary rounded-full absolute bottom-16 right-8 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
                <div className="w-6 h-6 bg-primary rounded-full absolute top-32 left-32 animate-bounce" style={{animationDelay: '2s', animationDuration: '2s'}}></div>
                <div className="w-14 h-14 bg-accent/60 rounded-full absolute top-48 right-12 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '4s'}}></div>
                <div className="w-10 h-10 bg-gradient-primary rounded-full absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '2.2s', animationDuration: '2.8s'}}></div>
                <div className="w-24 h-24 bg-primary/40 rounded-full absolute top-16 right-24 animate-bounce" style={{animationDelay: '1.2s', animationDuration: '3.2s'}}></div>
              </div>
            </div>
          </div>
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

export default AboutSection;