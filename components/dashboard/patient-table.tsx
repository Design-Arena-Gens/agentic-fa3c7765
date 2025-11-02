import { patients } from "@/lib/patients";
import clsx from "clsx";

export function PatientTable() {
  return (
    <section
      id="patients"
      className="glass-panel flex flex-col overflow-hidden rounded-3xl border border-white/5"
    >
      <header className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-soft-white">Patient roster</h2>
          <p className="text-sm text-white/50">
            Live feeds from bedside monitors, ventilators, and nursing notes.
          </p>
        </div>
        <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-soft-white">
          Export summary
        </button>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-sm text-white/70">
          <thead className="bg-white/5 uppercase tracking-widest text-xs text-white/40">
            <tr>
              <th className="px-6 py-3 text-left">Bed</th>
              <th className="px-6 py-3 text-left">Patient</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Escalation</th>
              <th className="px-6 py-3 text-left">Primary dx</th>
              <th className="px-6 py-3 text-left">Latest vitals</th>
              <th className="px-6 py-3 text-left">Updates</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-white/5">
                <td className="whitespace-nowrap px-6 py-4 font-semibold text-soft-white">
                  {patient.bed}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-soft-white">
                      {patient.name}
                    </span>
                    <span className="text-xs text-white/40">
                      {patient.age} yrs | {patient.attending}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      patient.status === "Critical" && "bg-alert-red/20 text-alert-red",
                      patient.status === "Watch" && "bg-aqua/20 text-aqua",
                      patient.status === "Stable" &&
                        "bg-calm-green/20 text-calm-green"
                    )}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-soft-white">
                  {patient.escalationScore}
                </td>
                <td className="px-6 py-4">{patient.diagnosis}</td>
                <td className="px-6 py-4 text-xs text-white/60">
                  HR {patient.vitals.heartRate} | RR {patient.vitals.respiratoryRate} |
                  SpO2 {patient.vitals.spo2}% | MAP {patient.vitals.map}
                </td>
                <td className="px-6 py-4 text-xs text-white/50">
                  <ul className="space-y-1">
                    {patient.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                  <p className="pt-2 text-[11px] uppercase tracking-widest text-white/30">
                    {patient.lastEvent}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
