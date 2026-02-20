const progressBars = [
  { label: "Sem 1", height: 40, posts: 3 },
  { label: "Sem 2", height: 65, posts: 5 },
  { label: "Sem 3", height: 85, posts: 7, active: true },
  { label: "Sem 4", height: 70, posts: 5 },
  { label: "Final", height: 30, posts: 1 },
];

const activeDays = 14; // jours "faits" sur 20

const ProofSection = () => {
  return (
    <section className="bg-navy-mid py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texte gauche */}
          <div className="observe-section">
            <span className="text-gold font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
              La Preuve
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Mes 5 premiers clients sont venus de mes{" "}
              <span className="text-gold">actions quotidiennes</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Je n'ai pas attendu qu'ils viennent à moi. J'ai utilisé ce système — écriture quotidienne,
                cohérence, et engagement authentique — pour atteindre mes 5 premiers coachés sur LinkedIn.
              </p>
              <p>
                Cette année, je transforme cette formule en offre structurée. C'est pour cela que{" "}
                <strong className="text-gold font-semibold">je recherche 5 bêta-testeurs motivés</strong>{" "}
                afin de co-construire cette offre ensemble et gagner en crédibilité mutuelle.
              </p>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { value: "20", label: "jours" },
                { value: "20+", label: "posts" },
                { value: "5", label: "bêta-testeurs" },
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
                <h3 className="text-white font-display font-semibold text-base">Votre progression</h3>
                <p className="text-white/50 text-xs mt-0.5">20 jours d'actions concrètes</p>
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
                <h3 className="text-white font-display font-semibold text-base">Calendrier d'action</h3>
                <p className="text-white/50 text-xs mt-0.5">20 posts en 20 jours</p>
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
