"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, SpotLight } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mesh } from "three";
import Image from "next/image";
import BentoCard from "./BentoCard";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Abstract Images (Unsplash)
// ─────────────────────────────────────────────────────────────────────────────

const abstractImages = {
  fluidChrome: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
  neonGlass: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000",
  darkVoid: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1000",
};

// ─────────────────────────────────────────────────────────────────────────────
// Scroll Steps Data
// ─────────────────────────────────────────────────────────────────────────────

const scrollSteps = [
  {
    id: 1,
    label: "The Hook",
    title: "Capture attention with a clear promise",
    description:
      "The best stories start with a question or tension. Lead with what matters most to your reader—the answer they came for.",
    image: null,
  },
  {
    id: 2,
    label: "Visual Break",
    title: null,
    description: null,
    image: "fluidChrome",
    triggerRotation: true,
  },
  {
    id: 3,
    label: "The Context",
    title: "Ground the reader in why this matters",
    description:
      "Once hooked, provide just enough background. Don't overwhelm—layer information progressively as the scroll deepens.",
    image: null,
  },
  {
    id: 4,
    label: "The Insight",
    title: "Deliver unexpected value",
    description:
      "This is where transformation happens. Share the insight, data point, or perspective that changes how they see the topic.",
    image: null,
  },
  {
    id: 5,
    label: "Visual Break",
    title: null,
    description: null,
    image: "neonGlass",
    triggerRotation: true,
  },
  {
    id: 6,
    label: "The Evidence",
    title: "Support claims with credibility",
    description:
      "Quotes, statistics, case studies. Build trust through specificity. Vague claims erode authority; precision builds it.",
    image: null,
  },
  {
    id: 7,
    label: "Visual Break",
    title: null,
    description: null,
    image: "darkVoid",
    triggerRotation: true,
  },
  {
    id: 8,
    label: "The Action",
    title: "Empower with clear next steps",
    description:
      "Great content doesn't just inform—it equips. End with what the reader can do, think, or explore next.",
    image: null,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3D Model with Enhanced Rotation Trigger
// ─────────────────────────────────────────────────────────────────────────────

function ScrollModel({ 
  progressRef, 
  rotationBoostRef 
}: { 
  progressRef: MutableRefObject<number>;
  rotationBoostRef: MutableRefObject<number>;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    const progress = progressRef.current;
    const rotationBoost = rotationBoostRef.current;
    
    // Base rotation from scroll progress + boost from image triggers
    const baseRotation = progress * Math.PI * 2;
    const totalRotation = baseRotation + (rotationBoost * Math.PI);
    
    const scale = 1 + progress * 0.6;
    
    meshRef.current.rotation.y = totalRotation;
    meshRef.current.rotation.x = totalRotation * 0.5;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#fbbf24" roughness={0.2} metalness={0.6} />
    </mesh>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Abstract Image Component
// ─────────────────────────────────────────────────────────────────────────────

function AbstractImage({ 
  src, 
  alt,
  onInView,
}: { 
  src: string; 
  alt: string;
  onInView?: () => void;
}) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !onInView) return;

    const trigger = ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: onInView,
    });

    return () => trigger.kill();
  }, [onInView]);

  return (
    <div ref={imageRef} className="relative w-full aspect-[16/9] my-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress Indicator
// ─────────────────────────────────────────────────────────────────────────────

function ProgressIndicator({ progress }: { progress: number }) {
  const textSteps = scrollSteps.filter(s => s.title !== null);
  const activeCount = Math.ceil(progress * textSteps.length);

  return (
    <div className="hidden lg:flex flex-col items-center gap-2 fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {textSteps.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index < activeCount
              ? "bg-amber-400 scale-125"
              : "bg-white/20"
          }`}
        />
      ))}
      <div className="mt-4 text-xs text-slate-500 font-mono">
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ScrollytellingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const rotationBoostRef = useRef(0);
  const [progress, setProgress] = useState(0);

  // Track how many image triggers have fired
  const rotationCountRef = useRef(0);

  const handleImageInView = () => {
    rotationCountRef.current += 1;
    // Smoothly animate the rotation boost
    gsap.to(rotationBoostRef, {
      current: rotationCountRef.current,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const textSteps = scrollSteps.filter(s => s.title !== null);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      {/* Progress Indicator */}
      <ProgressIndicator progress={progress} />

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column - Scrolling Bento Cards */}
          <div className="relative z-10 py-16 lg:py-32">
            {/* Section Header */}
            <BentoCard className="mb-12" glow>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-4">
                Scrollytelling
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                The narrative stays anchored while the object evolves.
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Scroll to see how the 3D form responds to your journey through the content.
              </p>
            </BentoCard>

            {/* Content Steps */}
            <div className="space-y-8">
              {scrollSteps.map((step, index) => {
                // Image step
                if (step.image) {
                  return (
                    <AbstractImage
                      key={step.id}
                      src={abstractImages[step.image as keyof typeof abstractImages]}
                      alt={`Abstract visual ${step.id}`}
                      onInView={step.triggerRotation ? handleImageInView : undefined}
                    />
                  );
                }

                // Text step in Bento Card
                const stepNumber = textSteps.findIndex(s => s.id === step.id) + 1;
                
                return (
                  <BentoCard key={step.id}>
                    {/* Step Number & Label */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-sm font-bold text-amber-400">
                        {stepNumber}
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        {step.label}
                      </span>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </BentoCard>
                );
              })}

              {/* Final CTA Card */}
              <BentoCard className="mt-12" glow>
                <div className="text-center py-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-amber-300 mb-3">
                    Continue Reading
                  </p>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    Ready to dive deeper?
                  </h3>
                  <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                    Explore More Articles
                  </button>
                </div>
              </BentoCard>
            </div>
          </div>

          {/* Right Column - Pinned 3D Canvas */}
          <div className="hidden lg:block relative">
            <div className="sticky top-[15vh] h-[70vh]">
              {/* Glass container for 3D */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-10">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>

                {/* Step Counter */}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-slate-900/60 px-4 py-2 text-xs font-medium text-amber-300 backdrop-blur-sm border border-white/10">
                  {Math.round(progress * 100)}% Complete
                </div>

                {/* Rotation indicator */}
                <div className="absolute bottom-4 left-4 z-10 rounded-full bg-slate-900/60 px-4 py-2 text-xs font-mono text-slate-400 backdrop-blur-sm border border-white/10">
                  Rotations: {rotationCountRef.current}
                </div>

                {/* 3D Canvas */}
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <Environment preset="city" />
                  <ambientLight intensity={0.12} />
                  <directionalLight position={[4, 4, 2]} intensity={2} />
                  <SpotLight position={[2, 3, 4]} intensity={30} angle={0.4} penumbra={0.6} />
                  <ScrollModel progressRef={progressRef} rotationBoostRef={rotationBoostRef} />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile 3D Canvas - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-4 right-4 w-32 h-32 z-40">
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <directionalLight position={[4, 4, 2]} intensity={2} />
            <ScrollModel progressRef={progressRef} rotationBoostRef={rotationBoostRef} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
