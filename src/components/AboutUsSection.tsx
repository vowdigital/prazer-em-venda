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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
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