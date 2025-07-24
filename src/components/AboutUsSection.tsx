import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutUsSection = () => {
  const images = [
    "/lovable-uploads/7e003463-387c-4e65-bf45-7995e318b6a0.png",
    "/lovable-uploads/1218d1f2-8293-4cca-9d06-8b0d792d06ce.png", 
    "/lovable-uploads/832b8138-27c4-4f6f-bb90-d295e04f8e7b.png",
    "/lovable-uploads/915c5489-c8cf-44c3-9571-ea0e75492f46.png"
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Nós</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="flex justify-center">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[3/4] overflow-hidden rounded-xl">
                      <img 
                        src={image} 
                        alt={`Sobre nós ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Nossa História
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Prazer com Luxo nasceu com uma missão audaciosa: desafiar tabus e explorar, de maneira discreta e respeitosa, o universo do prazer e da sexualidade. Acreditamos que o prazer não é apenas um direito, mas um componente essencial para uma vida plena e saudável.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde de sempre, enfrentamos o desafio de desvincular a sexualidade da vulgaridade e temos orgulho de cada dia superar esses obstáculos. Reinventamos a abordagem, associando o prazer a um luxo necessário, especialmente para as pessoas "mais maduras" que cresceram em ambientes tradicionais e machistas.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa jornada é guiada por um compromisso sólido de oferecer não apenas produtos de alta qualidade, mas também experiências que enriquecem e valorizam a vida de cada indivíduo. Enfatizamos a importância do auto cuidado, do amor próprio e da autoestima, acreditando no poder transformador desses elementos.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos também empenhados em redefinir a identidade desse mercado e por isso, estamos substituindo o termo sexshop por Curadoria de Produtos Íntimos e de Bem-Estar, estabelecendo um novo relacionamento com você que busca uma conexão mais profunda consigo mesmo e com seu parceiro(a).
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com respeito, te convido a entrar nesta jornada de descoberta e aceitação, onde o luxo se entrelaça com a intimidade e o respeito está presente em cada passo que daremos. Juntos, vamos elevar o prazer a um novo patamar, resgatando a verdadeira essência do cuidado e do amor próprio.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Venha explorar, conhecer e celebrar o prazer verdadeiro consigo mesma e com o parceiro escolhido para trilhar sua vida.
            </p>
            
            <div className="mt-8 text-right">
              <p className="text-lg text-muted-foreground italic">Com carinho,</p>
              <p className="text-xl font-semibold text-foreground mt-2">Luciana Patricio</p>
              <p className="text-sm text-muted-foreground">CEO da Prazer com Luxo</p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-foreground font-semibold">Experiência e Dedicação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;