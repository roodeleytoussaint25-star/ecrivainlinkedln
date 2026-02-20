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

const SketchHand = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 8V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 8V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M8 14V20C8 24 11 27 16 27C21 27 24 24 24 20V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14C8 12.5 9 11 10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 14C24 12.5 23 11 22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const cards = [
  {
    icon: SketchX,
    title: "Tu ne sais pas",
    highlight: "quoi raconter",
    text: "C'est normal de ne pas savoir par où commencer. Pourtant, ton quotidien regorge d'expériences intéressantes à documenter !",
  },
  {
    icon: SketchForbidden,
    title: "Tu ne te sens pas",
    highlight: "légitime",
    text: "Personne ne se sent 100% légitime. C'est un sentiment universel et tous les créateurs ont douté avant de démarrer. Rassure-toi, c'est normal !",
  },
  {
    icon: SketchHand,
    title: "Tu as peur de",
    highlight: "flopper",
    text: "Nous cherchons tous de la validation. C'est un sentiment naturel qui découle de la peur du rejet, du temps où nous vivions en petites tribus.",
  },
];

const InvitationSection = () => {
  return (
    <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(224_76%_40%/0.3),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-14 observe-section">
          Ce qui te bloque{" "}
          <span className="text-gold italic">aujourd'hui</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`observe-section bg-[#f5f0eb] rounded-2xl p-7 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                i === 2
                  ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto"
                  : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#f0ead6] flex items-center justify-center mb-5 text-navy-deep">
                <card.icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-deep mb-2">
                {card.title}{" "}
                <span className="text-gold relative">
                  {card.highlight}
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gold rounded-full" />
                </span>
              </h3>
              <p className="text-navy-deep/70 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="observe-section mt-14 bg-gold/10 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg sm:text-xl font-semibold text-gold">
            Votre impact réel vient de l'écriture quotidienne, pas des
            impressions ou likes superficiels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
