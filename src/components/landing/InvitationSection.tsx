const SketchX = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 8L8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10C7 9 9 7 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 6C23 7 25 9 26 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SketchForbidden = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 17C5.5 16.5 5 15.5 5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M27 15C26.5 15.5 27 16.5 27 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SketchBrain = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 18C16 14 12 12 10 13C8 14 8 17 10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 18C16 14 20 12 22 13C24 14 24 17 22 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13C9 11 10 8 13 7C14 6.5 15 6 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 13C23 11 22 8 19 7C18 6.5 17 6 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="13" cy="10" r="1" fill="currentColor" />
    <circle cx="19" cy="10" r="1" fill="currentColor" />
  </svg>
);

const cards = [
  {
    icon: SketchX,
    title: "Ton profil ne parle pas",
    highlight: "à la bonne cible",
    text: "Titre confus, résumé générique, aucun message clair. Les bonnes personnes arrivent sur ton profil et ne comprennent pas ce que tu fais. Elles partent.",
  },
  {
    icon: SketchForbidden,
    title: "Tu publies mais",
    highlight: "personne ne réagit",
    text: "Tu postes de temps en temps. Sans calendrier, sans niche définie, sans système. L'algorithme t'ignore. Ton audience aussi.",
  },
  {
    icon: SketchBrain,
    title: "Tu n'as pas le temps",
    highlight: "de créer du contenu",
    text: "Entre tes clients et tes projets, créer des posts de qualité chaque semaine est la dernière de tes priorités. Tu publies quand tu peux, ce que tu peux.",
  },
];

const InvitationSection = () => {
  return (
    <section className="relative bg-navy paper-texture-dark py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(224_76%_40%/0.3),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-14 observe-section">
          Pourquoi ton LinkedIn ne génère{" "}
          <span className="text-gold">aucune traction</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`observe-section group relative rounded-3xl p-[1px] transition-all hover:-translate-y-2 hover:shadow-2xl ${
                i === 2
                  ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto"
                  : ""
              }`}
              style={{
                background:
                  "linear-gradient(160deg, hsla(270, 60%, 50%, 0.4), hsla(224, 76%, 33%, 0.3), hsla(270, 80%, 30%, 0.5))",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_50%_100%,hsla(270,60%,50%,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              {/* Card inner */}
              <div
                className="relative rounded-3xl p-7 sm:p-8 backdrop-blur-xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(170deg, hsla(224, 76%, 20%, 0.95) 0%, hsla(260, 40%, 15%, 0.95) 60%, hsla(270, 50%, 20%, 0.9) 100%)",
                }}
              >
                {/* Subtle gradient glow at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[hsla(270,60%,40%,0.15)] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5 text-gold">
                    <card.icon />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {card.title}{" "}
                    <span className="relative text-gold">
                      {card.highlight}
                      <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gold/50 rounded-full" />
                    </span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="observe-section mt-14 bg-gold/10 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg sm:text-xl font-semibold text-gold">
             Le vrai problème : tu n'as pas de système. Pas de positionnement clair. Pas de contenu prêt. <em>Sprint Visibilité</em> règle les 3 en 30 jours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
