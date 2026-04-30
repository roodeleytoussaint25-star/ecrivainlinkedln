import statsLinkedin from "@/assets/stats-linkedin.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const progressBars = [
  { label: "Sem 1", height: 50, posts: 4 },
  { label: "Sem 2", height: 50, posts: 4 },
  { label: "Sem 3", height: 50, posts: 4, active: true },
  { label: "Sem 4", height: 50, posts: 4 },
];

// Jours de livraison : J3 (1 post), J5 (3), J8 (4), J11 (4), J14 (4)
const deliveryDays = [3, 5, 8, 11, 14];
const deliveryCounts: Record<number, number> = { 3: 1, 5: 3, 8: 4, 11: 4, 14: 4 };

const ProofSection = () => {
  return (
    <section className="bg-navy-mid paper-texture-dark py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texte gauche */}
          <div className="observe-section">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              <span className="text-gold">
                <AnimatedCounter value={400000} /> impressions
              </span>{" "}
              en 14 jours pour une coach diplômée.{" "}
              <span className="text-gold">
                <AnimatedCounter value={184000} /> impressions
              </span>{" "}
              en 1 mois pour un menuisier artisan.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Le premier client de LWAI fut un menuisier. Il voulait mettre en valeur l'artisanat français et parlait de bois récupéré. Il publiait une fois par semaine, avait un profil confus et une niche presque invisible.
              </p>
              <p>
                En 1 mois avec le Système LWAI : 184 000 impressions et une vraie reconnaissance auprès des leaders de son secteur, avec un de ses posts liké par un haut responsable de sa ville en matière d'écologie.
              </p>
              <p>
                La seconde fut une coach récemment diplômée : 400 000 impressions en 14 jours, plusieurs posts à plus de 1 000 likes et des centaines de personnes de sa cible qu'elle pouvait contacter pour engager la conversation.
              </p>
              <blockquote className="border-l-2 border-gold pl-4 mt-2">
                <p className="text-gold font-display font-semibold text-lg">
                  "Le menuisier et la coach. La méthode est identique pour les deux."
                </p>
              </blockquote>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { value: "184K–400K", label: "impressions" },
                { value: "14j–1 mois", label: "délai" },
                { value: "2", label: "clients testés" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/8 border border-white/15 rounded-full px-5 py-2.5 flex items-center gap-2"
                >
                  <span className="text-gold font-display font-bold text-lg">{s.value}</span>
                  <span className="text-white/60 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Widgets droite */}
          <div className="observe-section space-y-5">
            {/* Preuve : capture statistiques LinkedIn */}
            <div className="relative bg-white/8 backdrop-blur-sm border border-gold/30 rounded-2xl p-5 hover:border-gold/50 transition-colors shadow-lg shadow-gold/5">
              <div className="absolute -top-3 left-5 bg-gold text-navy-deep text-[10px] font-display font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                Preuve réelle
              </div>
              <div className="mb-4 mt-1">
                <h3 className="text-white font-display font-semibold text-base">Statistiques LinkedIn</h3>
                <p className="text-white/50 text-xs mt-0.5">+9 066% d'impressions sur 7 jours</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
                <img
                  src={statsLinkedin}
                  alt="Statistiques LinkedIn : 443 726 impressions de posts, +9066% sur 7 jours, 637 abonnés, 564 vues du profil"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Widget 1 : Barres de progression */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:border-gold/20 transition-colors">
              <div className="mb-5">
                <h3 className="text-white font-display font-semibold text-base">Ta progression</h3>
                <p className="text-white/50 text-xs mt-0.5">4 posts par semaine · 16 au total</p>
              </div>
              <div className="flex items-end justify-between gap-3 h-36">
                {progressBars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col items-center justify-end h-28">
                      {bar.active && (
                        <span className="text-gold text-[10px] font-bold mb-1">{bar.posts} posts</span>
                      )}
                      <div
                        className={`w-full max-w-[28px] rounded-full transition-all ${
                          bar.active
                            ? "bg-gold shadow-[0_0_12px_hsla(48,97%,53%,0.3)]"
                            : "bg-white/15"
                        }`}
                        style={{ height: `${bar.height}%` }}
                      />
                    </div>
                    <span className={`text-[11px] font-medium ${bar.active ? "text-gold" : "text-white/40"}`}>
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                <span className="text-white/30 text-[11px]">Posts livrés</span>
                <span className="text-white/30 text-[11px]">4 posts / semaine</span>
              </div>
            </div>

            {/* Widget 2 : Calendrier dots */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:border-gold/20 transition-colors">
              <div className="mb-5">
                <h3 className="text-white font-display font-semibold text-base">Calendrier de livraison</h3>
                <p className="text-white/50 text-xs mt-0.5">16 posts livrés en 14 jours</p>
              </div>
              <div className="space-y-2.5">
                {deliveryDays.map((day) => (
                  <div key={day} className="flex items-center gap-3">
                    <div className="w-12 shrink-0 text-white/50 text-[11px] font-medium">Jour {day}</div>
                    <div className="flex gap-1.5">
                      {Array.from({ length: deliveryCounts[day] }, (_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-md bg-gold text-navy-deep flex items-center justify-center text-[10px] font-bold shadow-[0_0_8px_hsla(48,97%,53%,0.25)]"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <span className="text-white/40 text-[11px] ml-auto">
                      +{deliveryCounts[day]} post{deliveryCounts[day] > 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                <span className="text-white/30 text-[11px]">Total</span>
                <span className="text-gold text-[11px] font-bold">16 posts livrés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
