import { Heart, Mail, Phone, Instagram, MessageCircle, Facebook, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Prazer e Luxo</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transformando vidas através do autoconhecimento e empoderamento feminino. 
              Sua jornada de prazer e bem-estar começa aqui.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">contato@prazercomluxo.store</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">(11) 91110-5896</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="text-white/80">WhatsApp disponível 24h</span>
              </div>
            </div>
          </div>
          
          {/* Social & Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/prazercomluxo.store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer"
              >
                <Instagram className="w-6 h-6 text-accent" />
              </a>
              <a 
                href="https://wa.me/5511911105896" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 text-accent" />
              </a>
              <a 
                href="https://www.facebook.com/people/Prazer-com-Luxo/61575784844823/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer"
              >
                <Facebook className="w-6 h-6 text-accent" />
              </a>
              <a 
                href="https://www.prazercomluxo.store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer"
              >
                <Globe className="w-6 h-6 text-accent" />
              </a>
            </div>
            
            <div className="pt-6">
              <p className="text-white/60 text-sm">
                © 2024 Prazer e Luxo. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-sm mt-2">
                Feito com ❤️ para empoderar mulheres
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;