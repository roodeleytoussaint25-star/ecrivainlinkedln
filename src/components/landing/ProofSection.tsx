const progressBars = [
  { label: "Sem 1", height: 40, posts: 4 },
  { label: "Sem 2", height: 65, posts: 4 },
  { label: "Sem 3", height: 85, posts: 4, active: true },
  { label: "Sem 4", height: 70, posts: 4 },
  { label: "Final", height: 30, posts: 0 },
];

const activeDays = 14; // jours livrés sur 30

const ProofSection = () => {
  return (
    <section className="bg-navy-mid paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texte gauche */}
          <div className="observe-section">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Le système qui a produit{" "}
              <span className="text-gold">400 000 impressions</span> en 14 jours
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Un menuisier. Artisanat français, bois récupéré. Il publiait une fois par semaine. Profil confus. Niche invisible.
              </p>
              <p>
                En 14 jours avec le Système LWAI : 400 000 impressions, des prospects qui le contactaient directement.
              </p>
              <p>
                Un coach récemment diplômé : 184 000 impressions en 1 mois et des prises de contact avec des leaders de son secteur.
              </p>
              <blockquote className="border-l-2 border-gold pl-4 mt-2">
                <p className="text-gold font-display font-semibold text-lg">
                  "Ce n'est pas du talent. C'est un système."
                </p>
              </blockquote>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { value: "400K", label: "impressions" },
                { value: "14", label: "jours" },
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
            {/* Widget 1 : Barres de progression */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:border-gold/20 transition-colors">
              <div className="mb-5">
                <h3 className="text-white font-display font-semibold text-base">Ta progression</h3>
                <p className="text-white/50 text-xs mt-0.5">16 posts livrés sur 30 jours</p>
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
                <span className="text-white/30 text-[11px]">Posts publiés</span>
                <span className="text-white/30 text-[11px]">Moyenne : 1 post/jour</span>
              </div>
            </div>

            {/* Widget 2 : Calendrier dots */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:border-gold/20 transition-colors">
              <div className="mb-5">
                <h3 className="text-white font-display font-semibold text-base">Calendrier de livraison</h3>
                <p className="text-white/50 text-xs mt-0.5">Tout livré en moins de 30 jours</p>
              </div>
              <div className="grid grid-cols-5 gap-3 justify-items-center">
                {Array.from({ length: 20 }, (_, i) => {
                  const done = i < activeDays;
                  return (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                        done
                          ? "bg-gold text-navy-deep shadow-[0_0_8px_hsla(48,97%,53%,0.25)]"
                          : "bg-white/10 text-white/30"
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-5 mt-4 pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                  <span className="text-white/40 text-[11px]">Fait</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-white/40 text-[11px]">À venir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
