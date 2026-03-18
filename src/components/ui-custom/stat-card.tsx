export function StatCard({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
      <div className="text-4xl font-extrabold text-slate-900 mb-2">{value}</div>
      <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
