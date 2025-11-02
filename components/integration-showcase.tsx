"use client";

import { motion } from "framer-motion";
import { BrainCircuit, FileUp, ScanEye, Stethoscope } from "lucide-react";

const integrations = [
  {
    title: "FHIR & HL7 Streams",
    description:
      "Connect to Epic, Cerner, MEDITECH, and Athena with out-of-the-box FHIR event ingestion or legacy HL7 listeners.",
    icon: Stethoscope
  },
  {
    title: "Multimodal Upload Portal",
    description:
      "Drag-and-drop MRI, CT, labs, and clinical PDFs into a secure vault that is instantly queryable by the AI copilot.",
    icon: FileUp
  },
  {
    title: "LLM Model Orchestration",
    description:
      "Route prompts to the optimal health-trained foundation model with audit trails, guardrails, and PHI isolation.",
    icon: BrainCircuit
  },
  {
    title: "Imaging Intelligence",
    description:
      "Native hooks for PACS systems with windowing presets, structured findings, and AI-generated follow-up actions.",
    icon: ScanEye
  }
];

export function IntegrationShowcase() {
  return (
    <section
      id="integrations"
      className="relative mx-auto max-w-6xl px-6 py-24 md:flex md:items-center md:gap-12"
    >
      <motion.div
        className="glass-panel relative flex-1 space-y-6 p-10"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -left-24 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-aqua/20 blur-3xl md:block" />
        <h2 className="text-3xl font-semibold tracking-tight">
          Built to harmonize every data modality.
        </h2>
        <p className="text-white/65">
          Rapidly deploy the bridge between bedside devices, EHR history, and
          AI-enabled reasoning while maintaining traceability for every clinical
          decision.
        </p>
        <ul className="grid gap-4">
          {integrations.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-2xl bg-white/5 p-4">
              <item.icon className="mt-1 h-10 w-10 text-aqua" />
              <div>
                <h3 className="text-lg font-semibold text-soft-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="mt-10 flex-1 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="glass-panel relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-aqua/10 via-transparent to-calm-green/10" />
          <div className="relative space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              AI COORDINATOR
            </p>
            <h3 className="text-2xl font-semibold text-soft-white">
              Multimodal clinical copilot
            </h3>
            <div className="space-y-3 text-sm text-white/65">
              <p>
                Upload imaging, labs, or free-text notes and receive structured
                summaries with suggested actions grounded in guidelines.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  SAMPLE OUTPUT
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  For Bed 12, consider escalating sepsis bundle. Lactate rise
                  2.1 -&gt; 3.5 mmol/L, MAP trending below 60, cultures pending.
                  Bolus completed 20 minutes ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
