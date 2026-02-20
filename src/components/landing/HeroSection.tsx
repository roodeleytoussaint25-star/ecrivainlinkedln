import { ArrowRight, Eye, Linkedin, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import hero3 from "@/assets/hero/hero-3.png";
import hero4 from "@/assets/hero/hero-4.png";
import hero5 from "@/assets/hero/hero-5.png";

const heroImages = [
  { src: hero1, rotation: "-rotate-6", alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "1 708" },
  { src: hero2, rotation: "rotate-3", alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "251" },
  { src: hero3, rotation: "-rotate-3", alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "231" },
  { src: hero4, rotation: "rotate-6", alt: "Post LinkedIn", author: "Hugo Marquet", engagement: "142" },
  { src: hero5, rotation: "-rotate-2", alt: "Post LinkedIn", author: "Hugo Marquet", engagement: "324" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy-deep overflow-hidden pt-20 pb-10">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsla(270, 80%, 45%, 0.6) 0%, hsla(260, 70%, 30%, 0.3) 40%, transparent 70%)",
            top: "-10%",
            left: "20%",
            animation: "auroraFloat1 8s ease-in-out infinite",
          }}
        />
        {/* Secondary glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsla(280, 90%, 50%, 0.5) 0%, hsla(250, 60%, 35%, 0.2) 50%, transparent 70%)",
            top: "10%",
            right: "10%",
            animation: "auroraFloat2 10s ease-in-out infinite",
          }}
        />
        {/* Deep blue accent */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsla(240, 70%, 40%, 0.5) 0%, transparent 60%)",
            bottom: "20%",
            left: "40%",
            animation: "auroraFloat3 12s ease-in-out infinite",
          }}
        />
        {/* Light streaks */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] opacity-20"
            style={{
              width: `${80 + i * 40}px`,
              background: "linear-gradient(90deg, transparent, hsla(270, 80%, 60%, 0.8), transparent)",
              bottom: `${15 + i * 8}%`,
              right: `${5 + i * 12}%`,
              transform: "rotate(-35deg)",
              animation: `streakGlow ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Linkedin className="w-4 h-4 text-gold" />
          <span className="text-white/80 text-sm font-medium">Coaching 1:1 · Prompts IA personnalisés</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-delay-1">
          Transformez votre histoire en{" "}
          <span className="text-gold">1 post LinkedIn par jour</span>{" "}
          qui génère des leads
        </h1>

        <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto animate-fade-in-delay-2">
          20 jours · 20 posts · Profil optimisé · Offre + Landing page inclus.
          Feedback et correction sur chaque post.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-105"
          >
            <a href="#investissement">
              Réservez votre place
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-display font-bold text-base px-8 py-6 rounded-full transition-all hover:border-white/50"
          >
            <a href="#vehicule">
              <Eye className="w-5 h-5 mr-1" />
              Voir le programme
            </a>
          </Button>
        </div>
      </div>

      {/* Tilted Image Gallery */}
      <div className="relative z-10 w-full mt-16 animate-fade-in-delay-3">
        <div className="absolute -top-4 left-[10%] sm:left-[15%] z-20 bg-gold text-navy-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-fade-in-delay-2">
          Coaching 1:1
        </div>
        <div className="absolute -top-4 right-[10%] sm:right-[15%] z-20 bg-white/90 text-navy-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-fade-in-delay-2">
          <Bot className="w-3 h-3 inline mr-1" />
          IA Prompts
        </div>

        <div className="flex justify-center items-end gap-4 sm:gap-6 px-4 overflow-hidden" style={{ perspective: "1000px" }}>
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`relative flex-shrink-0 w-36 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden transform ${img.rotation} transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-2xl`}
              style={{ transformOrigin: "bottom center" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 pointer-events-none">
                <p className="text-white text-[10px] sm:text-xs font-medium truncate">{img.author}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-gold text-xs sm:text-sm font-bold">{img.engagement}</span>
                  <span className="text-white/60 text-[9px] sm:text-[10px]">réactions</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Author */}
      <p className="relative z-10 mt-12 text-white/40 text-sm font-display tracking-wider uppercase animate-fade-in-delay-3">
        par Toussaint Roodeley
      </p>
    </section>
  );
};

export default HeroSection;
