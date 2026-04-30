import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <>
      <section className="bg-navy paper-texture-dark py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            30 jours pour <span className="text-gold">sortir du flou.</span>
          </h2>
          <p className="text-white/65 mb-10 max-w-lg mx-auto">3 places disponibles. 197€. Paiement unique.</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base px-10 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-105">
              <a href="https://wa.me/50956173528?text=Bonjour%20Toussaint%2C%20je%20souhaite%20r%C3%A9server%20ma%20place%20pour%20le%20Sprint%20Visibilit%C3%A9." target="_blank" rel="noopener noreferrer">
                Obtenir ma place
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-navy-deep py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-white/30 text-sm">© 2026 Toussaint Roodeley · Sprint Visibilité</p>
        </div>
      </footer>
    </>
  );
};

export default CTASection;
