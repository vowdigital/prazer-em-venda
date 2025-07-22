import { Card, CardContent } from "@/components/ui/card";

const TwoColumnSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-soft border-primary/10">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Título da Primeira Coluna
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conteúdo da primeira coluna. Aqui você pode adicionar texto, imagens ou outros elementos conforme necessário.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mais conteúdo para demonstrar o layout da coluna esquerda.
                </p>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Título da Segunda Coluna
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conteúdo da segunda coluna. Este layout oferece uma apresentação equilibrada do conteúdo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Texto adicional para preencher a coluna direita e mostrar como ficará o layout final.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TwoColumnSection;