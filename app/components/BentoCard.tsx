"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  delay?: number;
  animateOnScroll?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  size = "md",
  glow = false,
  delay = 0,
  animateOnScroll = true,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !animateOnScroll) return;

    const card = cardRef.current;

    // Initial state
    gsap.set(card, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    });

    // Scroll-triggered animation
    const animation = gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === card) t.kill();
      });
    };
  }, [delay, animateOnScroll]);

  const sizeClasses = {
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative
        bg-white/[0.03]
        backdrop-blur-xl
        border border-white/[0.08]
        rounded-3xl
        overflow-hidden
        transition-all duration-500 ease-out
        hover:bg-white/[0.06]
        hover:border-white/[0.15]
        hover:scale-[1.02]
        hover:shadow-[0_20px_80px_-20px_rgba(251,191,36,0.15)]
        group
        ${sizeClasses[size]}
        ${glow ? "shadow-[0_0_80px_-20px_rgba(251,191,36,0.2)]" : ""}
        ${className}
      `}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {/* Animated gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)",
        }}
      />

      {/* Inner shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
        }}
      />
      
      {/* Glow accent */}
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-transparent to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
