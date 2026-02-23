import { useEffect, useRef, useState } from "react";
import { ArrowRight, Eye, Linkedin, Bot, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import hero3 from "@/assets/hero/hero-3.png";
import hero4 from "@/assets/hero/hero-4.png";
import hero5 from "@/assets/hero/hero-5.png";

const heroImages = [
  { src: hero1, alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "1 708" },
  { src: hero2, alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "251" },
  { src: hero3, alt: "Post LinkedIn", author: "Sophie Bidaux", engagement: "231" },
  { src: hero4, alt: "Post LinkedIn", author: "Hugo Marquet", engagement: "142" },
  { src: hero5, alt: "Post LinkedIn", author: "Hugo Marquet", engagement: "324" },
];

const PARTICLE_COUNT = 40;

const PhoneMockup = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] md:w-[280px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-white/20 bg-black/80 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="relative aspect-[9/17] overflow-hidden">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 z-10">
            <p className="text-white text-xs font-medium">{heroImages[current].author}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-gold text-sm font-bold">{heroImages[current].engagement}</span>
              <span className="text-white/60 text-[10px]">réactions</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-1 w-28 mx-auto bg-white/30 rounded-full my-2" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? "bg-gold w-4" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      hue: 260 + Math.random() * 40,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy-deep paper-texture-dark overflow-hidden pt-20 pb-10">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      />
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsla(270, 80%, 45%, 0.6) 0%, hsla(260, 70%, 30%, 0.3) 40%, transparent 70%)",
            top: "-10%",
            left: "20%",
            animation: "auroraFloat1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsla(280, 90%, 50%, 0.5) 0%, hsla(250, 60%, 35%, 0.2) 50%, transparent 70%)",
            top: "10%",
            right: "10%",
            animation: "auroraFloat2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsla(240, 70%, 40%, 0.5) 0%, transparent 60%)",
            bottom: "20%",
            left: "40%",
            animation: "auroraFloat3 12s ease-in-out infinite",
          }}
        />
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Linkedin className="w-4 h-4 text-gold" />
              <span className="text-white/80 text-sm font-medium">Coaching 1:1 · 20 jours</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-delay-1">
              <span className="text-gold italic">20 Pas</span> sur{" "}
              <span className="text-gold italic">20 Jours</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-xl animate-fade-in-delay-2 font-medium">
              Vous avez mille possibilités avec l'IA, mais vous restez bloqué au stade 0 ?
            </p>

            <p className="text-base text-white/60 mb-10 max-w-xl animate-fade-in-delay-2">
              En 20 jours, publiez votre premier post LinkedIn aligné avec qui vous êtes vraiment — pas ce que l'IA décide pour vous. Coaching 1:1, exercices quotidiens, feedback sur chaque post.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-delay-3">
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

          {/* Right: Phone Mockup */}
          <div className="flex-shrink-0 animate-fade-in-delay-2">
            <div className="relative">
              {/* Floating badges */}
              <div className="absolute -top-4 -left-6 z-20 bg-gold text-navy-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Coaching 1:1
              </div>
              <div className="absolute -top-4 -right-6 z-20 bg-white/90 text-navy-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <Bot className="w-3 h-3 inline mr-1" />
                IA Prompts
              </div>
              
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Author */}
      <p className="relative z-10 mt-12 text-white/50 text-sm font-display tracking-wider uppercase animate-fade-in-delay-3">
        par Toussaint Roodeley
      </p>
    </section>
  );
};

export default HeroSection;
