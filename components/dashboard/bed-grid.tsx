import { patients } from "@/lib/patients";
import clsx from "clsx";

const bedStatusStyles: Record<string, string> = {
  Critical: "from-alert-red/40 to-alert-red/20 border-alert-red/50",
  Watch: "from-aqua/40 to-aqua/10 border-aqua/40",
  Stable: "from-calm-green/40 to-calm-green/10 border-calm-green/40"
};

export function BedGrid() {
  return (
    <section
      id="beds"
      className="glass-panel flex flex-col gap-6 p-6"
    >
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-soft-white">
            Bedside simulation
          </h2>
          <p className="text-sm text-white/50">
            Swipe-ready floor plan with real-time acuity overlays.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-alert-red" /> Critical
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-aqua" /> Watch
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-calm-green" /> Stable
          </span>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={clsx(
              "relative overflow-hidden rounded-3xl border bg-gradient-to-br p-5 transition hover:-translate-y-1 hover:shadow-glow",
              bedStatusStyles[patient.status]
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  {patient.bed}
                </p>
                <h3 className="text-lg font-semibold text-soft-white">
                  {patient.name}
                </h3>
                <p className="text-xs text-white/60">
                  {patient.diagnosis}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/50">Escalation</p>
                <p className="text-3xl font-semibold text-soft-white">
                  {patient.escalationScore}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/70">
              <div className="rounded-2xl bg-black/20 px-3 py-2">
                HR <span className="font-semibold">{patient.vitals.heartRate}</span>
              </div>
              <div className="rounded-2xl bg-black/20 px-3 py-2">
                RR <span className="font-semibold">{patient.vitals.respiratoryRate}</span>
              </div>
              <div className="rounded-2xl bg-black/20 px-3 py-2">
                SpO2 <span className="font-semibold">{patient.vitals.spo2}%</span>
              </div>
              <div className="rounded-2xl bg-black/20 px-3 py-2">
                MAP <span className="font-semibold">{patient.vitals.map}</span>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
              {patient.lastEvent}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
