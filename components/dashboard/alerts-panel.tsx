const alerts = [
  {
    title: "ICU-12 septic shock risk ↑",
    detail: "MAP < 60 for 6 min. Lactate trending upward.",
    timestamp: "2 min ago",
    badge: "Critical"
  },
  {
    title: "ICU-03 ventilator compliance drop",
    detail: "Plateau pressures rising > 30 cmH2O.",
    timestamp: "9 min ago",
    badge: "Watch"
  },
  {
    title: "ICU-02 neuro consult follow-up",
    detail: "Repeat CT interpretation available from RadiAnt model.",
    timestamp: "17 min ago",
    badge: "Info"
  }
];

const badgeStyles: Record<string, string> = {
  Critical: "bg-alert-red/20 text-alert-red",
  Watch: "bg-aqua/20 text-aqua",
  Info: "bg-soft-white/20 text-soft-white"
};

export function AlertsPanel() {
  return (
    <section
      id="alerts"
      className="glass-panel flex flex-col gap-4 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-soft-white">Live alerts</h2>
          <p className="text-sm text-white/50">
            Prioritized notifications with shared context for the care team.
          </p>
        </div>
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/50 transition hover:border-white/40 hover:text-soft-white">
          Acknowledge all
        </button>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <article
            key={alert.title}
            className="flex items-start justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-soft-white">
                  {alert.title}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-widest ${badgeStyles[alert.badge]}`}
                >
                  {alert.badge}
                </span>
              </div>
              <p className="text-xs text-white/60">{alert.detail}</p>
            </div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              {alert.timestamp}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
