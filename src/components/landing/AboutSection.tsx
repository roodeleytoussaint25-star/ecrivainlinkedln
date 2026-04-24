import { Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-navy-mid paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="observe-section flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="shrink-0">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-gold/20 to-white/5 border border-white/15 flex items-center justify-center overflow-hidden">
              <span className="text-white/30 text-xs font-medium uppercase tracking-wider text-center px-4">Photo à venir</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-gold font-display text-sm font-semibold tracking-wider uppercase mb-3 block">Qui suis-je ?</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Toussaint Roodeley</h2>
            <div className="space-y-3 text-white/65 text-sm leading-relaxed">
              <p>J'ai accompagné un menuisier à 400 000 impressions en 14 jours. Un coach diplômé à 184 000 en un mois. Les deux partaient de zéro.</p>
              <p>J'ai construit le Système LWAI après des mois d'expérimentation : Positionnement, Profil, Contenu. Tout en async, sans appels, sans temps perdu.</p>
              <p>Aujourd'hui, j'ouvre 3 places pour Sprint Visibilité. Tu reçois mon système déployé pour toi en 30 jours.</p>
            </div>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-gold hover:text-gold-hover transition-colors text-sm font-semibold">
              <Linkedin className="w-4 h-4" />
              Voir mon profil LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
