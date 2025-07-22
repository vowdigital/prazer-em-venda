import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Calendar, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronta Para Começar Sua 
            <span className="block text-accent">Transformação?</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Não espere mais para reconectar-se com seu prazer e empoderar-se como mulher. 
            Sua jornada de autoconhecimento começa agora.
          </p>
        </div>
        
        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-elegant">
            <CardContent className="p-6 text-center text-white">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Consulta Inicial</h3>
              <p className="text-sm text-white/80">Conversa gratuita de 30 minutos</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-elegant">
            <CardContent className="p-6 text-center text-white">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Mentoria Personalizada</h3>
              <p className="text-sm text-white/80">Programa adaptado para você</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-elegant">
            <CardContent className="p-6 text-center text-white">
              <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-sm text-white/80">Acompanhamento durante toda jornada</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Main CTA */}
        <div className="space-y-6">
          <Button variant="elegant" size="lg" className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90" asChild>
            <a href="https://wa.me/5511911105896" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita
            </a>
          </Button>
          
          <p className="text-white/70 text-sm">
            * Primeira consulta sem compromisso • Ambiente seguro e confidencial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;