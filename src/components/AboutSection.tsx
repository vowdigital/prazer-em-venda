import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre a 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Mentoria</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma abordagem única e personalizada para o desenvolvimento da sexualidade feminina, 
              baseada em anos de experiência e estudos profundos sobre bem-estar íntimo.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Através de técnicas comprovadas, exercícios práticos e um ambiente seguro de 
              aprendizado, você descobrirá como reconectar-se com seu corpo e despertar 
              seu potencial de prazer.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-foreground font-semibold">Certificada e Especializada</span>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-primary/5 border-primary/20 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Mulheres Transformadas</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary/5 border-accent/20 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-foreground mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-primary/5 border-primary/20 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary/5 border-accent/20 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-foreground mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte Disponível</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;