import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Zap, Shield, Users, Crown } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Autoconhecimento Profundo",
    description: "Descubra seu corpo e suas preferências de forma segura e respeitosa"
  },
  {
    icon: Star,
    title: "Confiança e Autoestima",
    description: "Desenvolva uma relação saudável com sua sexualidade e sensualidade"
  },
  {
    icon: Zap,
    title: "Energia Renovada",
    description: "Desperte uma nova vitalidade e conexão com seu poder feminino"
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Espaço livre de julgamentos para explorar e crescer com confiança"
  },
  {
    icon: Users,
    title: "Suporte Personalizado",
    description: "Mentoria individual adaptada às suas necessidades específicas"
  },
  {
    icon: Crown,
    title: "Empoderamento Feminino",
    description: "Torne-se a protagonista da sua própria jornada de prazer"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefícios da 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Mentoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme sua relação com o prazer e descubra uma versão mais confiante e empoderada de si mesma
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-primary/10 shadow-soft hover:shadow-elegant transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
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

export default BenefitsSection;