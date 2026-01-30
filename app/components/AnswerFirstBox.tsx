"use client";

import { useState } from "react";

const summaryText = `G Magazine's latest editorial explores how quiet technology, human storytelling, and sculptural interfaces combine to build trust. This 50-word snapshot highlights the most actionable takeaways for design leaders: keep motion purposeful, elevate the author voice, and use tactile, glassy visuals to guide the reader through complex ideas.`;

export default function AnswerFirstBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      console.log("Summary copied to clipboard for citation");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      aria-label="Key Takeaways"
      className="relative mb-12 rounded-2xl border border-white/20 border-l-2 border-yellow-500 bg-gradient-to-r from-slate-800/90 to-transparent p-8 text-sm text-slate-100 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.15)]"
    >
      {/* Label */}
      <div className="absolute -top-4 left-6 rounded-full border border-yellow-500/60 bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
        Answer First
      </div>

      {/* Copy/Share Button */}
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 transition hover:border-amber-400 hover:text-amber-300"
        aria-label="Copy summary to clipboard"
      >
        {copied ? (
          <>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Cite
          </>
        )}
      </button>

      {/* Content */}
      <div className="relative z-20 pt-4 pr-16">
        <p className="leading-relaxed text-slate-200">{summaryText}</p>
      </div>
    </section>
  );
}
