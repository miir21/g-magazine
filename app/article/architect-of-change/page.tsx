"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment, SpotLight } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollytellingSection from "../../components/ScrollytellingSection";
import AnswerFirstBox from "../../components/AnswerFirstBox";

// ─────────────────────────────────────────────────────────────────────────────
// Article Hero with Octahedron
// ─────────────────────────────────────────────────────────────────────────────

function GlassOctahedron() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.25;
  });

  return (
    <>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[0, 0, -7]}>
          <mesh position={[-1.4, 0.8, 0]}>
            <icosahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#FFD700" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[1.5, -0.5, 0.5]}>
            <dodecahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial color="#00008B" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0.4, 1.2, -0.3]}>
            <icosahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial color="#FFD700" roughness={0.25} metalness={0.75} />
          </mesh>
          <mesh position={[-0.8, -1.1, 0.3]}>
            <dodecahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color="#00008B" roughness={0.35} metalness={0.7} />
          </mesh>
        </group>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={1.2}>
          <octahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            transmission={0.99}
            thickness={2.5}
            roughness={0.1}
            chromaticAberration={0.8}
            anisotropy={20}
            resolution={1024}
            color="white"
            ior={1.2}
            backside
          />
        </mesh>
      </Float>
    </>
  );
}

function ArticleHero() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <color attach="background" args={["#0b1220"]} />
        <Environment preset="city" />
        <ambientLight intensity={0.12} />
        <directionalLight position={[4, 4, 2]} intensity={2} />
        <SpotLight position={[2, 3, 4]} intensity={30} angle={0.4} penumbra={0.6} />
        <GlassOctahedron />
      </Canvas>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Article Content Components
// ─────────────────────────────────────────────────────────────────────────────

function InterviewQuestion({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-amber-300 mt-10 mb-4 leading-relaxed">
      {children}
    </h3>
  );
}

function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-slate-300 mb-6">
      {children}
    </p>
  );
}

function ArticleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-50 mt-16 mb-6 md:text-3xl border-l-2 border-amber-400 pl-4">
      {children}
    </h2>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 py-6 border-y border-slate-700/50">
      <p className="text-xl md:text-2xl text-slate-100 font-medium italic leading-relaxed text-center">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}

function AuthorCard() {
  return (
    <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 mt-16">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-xl flex-shrink-0">
        CI
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-100">Chika Imakita</h4>
        <p className="text-amber-400 text-sm mb-2">CEO, Greenpac</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Greenpac&apos;s CEO, Chika Imakita leads the award-winning provider of innovative and sustainable industrial packaging solutions in SEA. A keen environmentalist with over 20 years of supply chain experience, she has positioned Greenpac as an industry leader recognised for its eco-friendly designs that reduce waste and enhance efficiency.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ArchitectOfChangePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Navbar />
      <main>
        <article className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-16">
          {/* Hero Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left Column: Article Header */}
            <div className="order-2 relative z-10 space-y-6 lg:order-1">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-300 font-medium">
                  G Magazine Vol 3
                </span>
                <span>November 26, 2025</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              
              <h1 className="break-words text-4xl font-bold leading-tight text-slate-50 md:text-5xl lg:text-6xl">
                Architect of Change, from Global Logistics to Sustainable Futures
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                In this interview, Greenpac&apos;s CEO, Chika Imakita, outlines her leadership strategy for guiding the company into its next chapter after its entrepreneurial founder. Her philosophy is one of &ldquo;continuity with enhancement,&rdquo; preserving Greenpac&apos;s foundational sustainability mission while evolving its culture from a top-down model to one of collective ownership.
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Interviewer: <span className="text-slate-300">Destiny Goh</span></span>
                <span>•</span>
                <span>Interviewee: <span className="text-slate-300">Chika Imakita</span></span>
              </div>

              <div className="pt-4">
                <AnswerFirstBox />
              </div>
            </div>

            {/* Right Column: Hero with Octahedron */}
            <div className="order-1 relative z-0 h-[50vh] lg:order-2 lg:h-screen">
              <div className="sticky top-0 h-[50vh] lg:h-screen">
                <ArticleHero />
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="mt-16 lg:mt-24 max-w-3xl">
            
            {/* Section 1: The Architect's Foundation */}
            <ArticleHeading>The Architect&apos;s Foundation</ArticleHeading>

            <InterviewQuestion>
              Please share a little about your journey and what drives your current mission as the CEO of Greenpac?
            </InterviewQuestion>

            <ArticleParagraph>
              My journey began in 1999 with an AIESEC internship at UPS, the American courier company headquartered in Atlanta. This opportunity blossomed into more than two decades with the company.
            </ArticleParagraph>

            <ArticleParagraph>
              That path gave me global experience: seven years in the United States, four in Japan, and a return to Singapore, where I was then promoted to Director and ultimately served as Managing Director for Singapore and Malaysia.
            </ArticleParagraph>

            <ArticleParagraph>
              After leaving UPS in 2023 for personal reasons, I began looking for new opportunities and was ultimately drawn to Greenpac for two factors. First, I wanted to contribute my expertise to a local Singaporean company that was making a tangible, positive impact on the community. Second, Greenpac&apos;s mission aligned perfectly with my background in logistics, operations and environmental, social and governance (ESG).
            </ArticleParagraph>

            <ArticleParagraph>
              Packaging is often over-looked but has a significant impact on the supply chain, and my deep experience in this area allows me to consult intelligently with our clients, helping them improve their entire supply chain through more innovative and sustainable solutions.
            </ArticleParagraph>

            <InterviewQuestion>
              The transition from the previous founder&apos;s strong entrepreneurial leadership represented a significant shift at Greenpac. What is your philosophy on leading people through such significant change?
            </InterviewQuestion>

            <ArticleParagraph>
              While there is an element of continuity in our dedication and core commitment to sustainability and innovative design, the transition did necessitate a cultural and mindset shift. When an organisation has a strong, entrepreneurial founder, the culture tends to be top-down.
            </ArticleParagraph>

            <ArticleParagraph>
              My leadership philosophy focuses on cultivating an organisation that operates like a fine watch—a synchronised machine where every individual takes ownership of their role. This approach has created a more agile, scalable, and robust system for Greenpac, with a team of 250 individuals across Singapore and Malaysia, as it doesn&apos;t rely on a single central engine.
            </ArticleParagraph>

            <PullQuote>
              The goal is to build a culture where everyone feels empowered to act rather than waiting to be told what to do.
            </PullQuote>

            <ArticleParagraph>
              To guide the organisation on this journey, my focus has been on empowering our people. We&apos;ve introduced new perspectives at the executive level, where 50% of our committee members are new. This signals that fresh ideas are welcome and helps cascade this new ownership mindset throughout every layer of the company.
            </ArticleParagraph>

            {/* Section 2: Navigating the Human Element */}
            <ArticleHeading>Navigating the Human Element</ArticleHeading>

            <InterviewQuestion>
              When staff face a vast transformation, resistance is often rooted in fear of loss. How do you lead transparent communication, addressing this fear and shifting focus from loss to opportunity?
            </InterviewQuestion>

            <ArticleParagraph>
              When I joined in February 2024, I sensed the natural uncertainty and anxiety that accompanies change. My first step was to provide a vision, but it was intentionally not revolutionary. It was a vision of continuity with enhancements, focused on leveraging Greenpac&apos;s incredible foundation.
            </ArticleParagraph>

            <PullQuote>
              Presenting something entirely different would have alienated people in the organisation; as leaders, you must balance authenticity and truth.
            </PullQuote>

            <ArticleParagraph>
              Secondly, you need to earn trust. When individuals assume power in management or politics, they are given a specific authority and should serve to the best of their abilities. I achieve this by showing up, listening and appreciating the team, but I also have to be firm when necessary.
            </ArticleParagraph>

            <ArticleParagraph>
              My leadership philosophy isn&apos;t a single &lsquo;style&rsquo;; it&apos;s a commitment to serve all our stakeholders—the board, customers, suppliers, and employees. I am responsible for making the best decisions at any given time, balancing empathy with authority.
            </ArticleParagraph>

            <InterviewQuestion>
              How can leaders create safe forums for employee feedback?
            </InterviewQuestion>

            <ArticleParagraph>
              While you can create formal events like lunches or tea sessions, they often prove to be less effective. Because of my title as CEO, ground-level employees rarely share positive or negative feedback honestly in such casual settings.
            </ArticleParagraph>

            <ArticleParagraph>
              To build genuine psychological safety, it&apos;s crucial to foster it through the everyday actions of the management team, rather than relying on a single forum or one-time event. I focus on creating a culture of open listening at every level and ensuring that the leadership team does not operate by fear.
            </ArticleParagraph>

            <InterviewQuestion>
              How do you admit uncertainty or acknowledge mistakes while maintaining the conviction your team needs to follow you through disruption?
            </InterviewQuestion>

            <ArticleParagraph>
              I view mistakes and setbacks as opportunities. Recently, we experienced a significant operational setback in Malaysia. Our first question was, &ldquo;Is everyone okay?&rdquo; Material things can be replaced, but our people are our most important asset.
            </ArticleParagraph>

            <PullQuote>
              If approached with the right mindset, a negative situation can be transformed into a positive one, strengthening the team and improving the organisation.
            </PullQuote>

            <InterviewQuestion>
              What&apos;s the most common leadership behaviour that erodes trust during a change initiative?
            </InterviewQuestion>

            <ArticleParagraph>
              The most significant factor that erodes trust is a lack of empathy. Authentic leadership is about creating an environment where people can be the best versions of themselves, which requires psychological safety.
            </ArticleParagraph>

            <ArticleParagraph>
              When leaders bring about change on a large scale without exercising empathy in the moment, we risk invalidating our employees&apos; concerns and emotions by dismissing their fears and uncertainties in the midst of transformation.
            </ArticleParagraph>

            <PullQuote>
              Establishing trust and providing a safe, psychological space is often more important than being right in human interactions.
            </PullQuote>

            {/* Section 3: The Mechanics of Scaling Change */}
            <ArticleHeading>The Mechanics of Scaling Change</ArticleHeading>

            <InterviewQuestion>
              Having led transformation at a global MNC and now at a purpose-driven SME like Greenpac, what can large companies learn from agile playbooks of smaller firms?
            </InterviewQuestion>

            <ArticleParagraph>
              Large multinational corporations, with their vast resources, often become very functionally focused, which can unintentionally restrict an employee&apos;s growth. In a smaller company like Greenpac, every individual plays multiple roles and develops various skills.
            </ArticleParagraph>

            <ArticleParagraph>
              We have numerous examples of this cross-pollination in action. For instance, our IT personnel has taken on the role of our sustainability lead, and a procurement specialist initiated our entire pricing function. We actively facilitate this by forming cross-functional committees to address key business problems.
            </ArticleParagraph>

            <PullQuote>
              When employees pursue new skills or take on new projects, they will be able to see the direct impact on their roles and understand the ways they can add greater value to the company.
            </PullQuote>

            {/* Section 4: The Lasting Lessons */}
            <ArticleHeading>The Lasting Lessons</ArticleHeading>

            <InterviewQuestion>
              If you were coaching a new leader with a transformation mandate, what&apos;s one critical action they must take in their first 90 days?
            </InterviewQuestion>

            <ArticleParagraph>
              As a fellow leader, I would advise rethinking the entire &lsquo;first 90 days&rsquo; mentality. While being agile is important, some leaders may feel pressured to drive change and make quick decisions upon entering a new position. However, it is wise to exercise restraint.
            </ArticleParagraph>

            <ArticleParagraph>
              When entering a new environment, it&apos;s easy to identify what you perceive as wrong; however, those judgments are often colored by biases stemming from past experiences. The most critical action is not to act immediately but to first observe, listen, and deeply understand why things are the way they are.
            </ArticleParagraph>

            <ArticleParagraph>
              It takes real courage and restraint to maintain the status quo until you achieve true understanding.
            </ArticleParagraph>

            <InterviewQuestion>
              If you were to leave our readers with one thought, what&apos;s the one thing leaders should stop doing as they embark on transformation?
            </InterviewQuestion>

            <ArticleParagraph>
              Leaders should stop searching for a single &lsquo;right style&rsquo; of leadership. There is no one-size-fits-all approach. The key principle should be the role itself: you are there to serve and optimise the interests of all stakeholders—from shareholders, customers, suppliers, to employees.
            </ArticleParagraph>

            <ArticleParagraph>
              To fulfil this responsibility, your actions should be guided by the specific needs of each situation. If that means you need to stop talking and start listening, then that is precisely what you should do.
            </ArticleParagraph>

            {/* Author Card */}
            <AuthorCard />
          </div>

          {/* Scrollytelling Section */}
          <div className="mt-24">
            <ScrollytellingSection />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
