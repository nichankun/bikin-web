export function WorkflowStep({
  step,
  title,
  desc,
  isReversed,
}: {
  step: number;
  title: string;
  desc: string;
  isReversed?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal group ${isReversed ? "md:odd:flex-row-reverse" : ""}`}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-brand-500 font-bold shrink-0 z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
        {step}
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm group-hover:border-brand-500 transition-colors">
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
