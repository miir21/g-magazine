"use client";

import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  size = "md",
  glow = false,
}: BentoCardProps) {
  const sizeClasses = {
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <div
      className={`
        relative
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-3xl
        overflow-hidden
        transition-all duration-300
        hover:bg-white/[0.07]
        hover:border-white/20
        ${sizeClasses[size]}
        ${glow ? "shadow-[0_0_60px_-15px_rgba(251,191,36,0.3)]" : ""}
        ${className}
      `}
    >
      {/* Inner glow effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
