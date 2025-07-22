import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    text: "A mentoria mudou completamente minha perspectiva sobre meu próprio corpo. Hoje me sinto mais confiante e conectada comigo mesma.",
    rating: 5
  },
  {
    name: "Mariana Silva",
    text: "Finalmente encontrei um espaço seguro para explorar questões que sempre tive medo de abordar. Gratidão infinita por essa transformação.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    text: "O suporte personalizado e a abordagem respeitosa fizeram toda a diferença. Recomendo para todas as mulheres que buscam autoconhecimento.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Dizem Nossas 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e empoderamento feminino
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-primary/5 border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Cliente Satisfeita</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;