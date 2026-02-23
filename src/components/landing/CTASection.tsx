import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <>
      <section className="bg-navy paper-texture-dark py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Trouvez votre voix. Attirez vos clients. En{" "}
            <span className="text-gold">20 jours.</span>
          </h2>

          <p className="text-white/65 mb-10 max-w-lg mx-auto">
            Places limitées : 5 places uniquement pour ce lancement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base px-10 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-105"
            >
              <a href="mailto:toussaint@example.com">
                Réservez maintenant
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-display px-10 py-6 rounded-full"
            >
              <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
                Contactez via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-white/30 text-sm">
            © 2026 Toussaint Roodeley · 20 Pas sur 20 Jours
          </p>
        </div>
      </footer>
    </>
  );
};

export default CTASection;
