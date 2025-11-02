import { AlertTriangle, HeartPulse, ShieldCheck } from "lucide-react";

const metrics = [
  {
    label: "Escalations in queue",
    value: "5",
    change: "+2 vs last 4h",
    icon: AlertTriangle,
    tone: "alert"
  },
  {
    label: "Stabilized patients",
    value: "12",
    change: "+4 discharged past 24h",
    icon: ShieldCheck,
    tone: "positive"
  },
  {
    label: "Average ICU acuity",
    value: "0.78",
    change: "risk trending downward",
    icon: HeartPulse,
    tone: "neutral"
  }
];

const toneStyles: Record<string, string> = {
  alert: "bg-alert-red/20 text-alert-red",
  positive: "bg-calm-green/20 text-calm-green",
  neutral: "bg-aqua/20 text-aqua"
};

export function SummaryPanels() {
  return (
    <section id="overview" className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="glass-panel flex flex-col gap-4 p-6">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneStyles[metric.tone]}`}
          >
            <metric.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">
              {metric.label}
            </p>
            <p className="text-3xl font-semibold text-soft-white">
              {metric.value}
            </p>
            <p className="text-sm text-white/50">{metric.change}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
