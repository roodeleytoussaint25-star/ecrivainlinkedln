import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-deep overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Linkedin className="w-4 h-4 text-gold" />
          <span className="text-white/80 text-sm font-medium">Coaching 1:1 · Prompts IA personnalisés</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-delay-1">
          En 20 jours, transformez votre histoire pour publier{" "}
          <span className="text-gold">1 post LinkedIn par jour</span>{" "}
          qui génère des leads qualifiés
        </h1>

        <p className="text-lg sm:text-xl text-white/70 mb-4 max-w-2xl mx-auto animate-fade-in-delay-2">
          20 jours · 20 posts · Profil optimisé · Offre + Landing page inclus
        </p>

        <p className="text-white/50 text-sm mb-10 animate-fade-in-delay-2">
          Feedback et correction sur chaque post
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-105"
          >
            <a href="#investissement">
              Réservez votre place maintenant
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>

        <p className="mt-12 text-white/40 text-sm font-display tracking-wider uppercase animate-fade-in-delay-3">
          par Toussaint Roodeley
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
