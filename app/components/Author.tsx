export default function Author() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs uppercase tracking-[0.25em] text-slate-400">
        Photo
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-100">Mika Tanaka</div>
        <div className="text-xs uppercase tracking-[0.3em] text-amber-300">
          Senior IT Recruiter
        </div>
      </div>
    </div>
  );
}
