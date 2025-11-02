"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-aqua/20 blur-3xl" />
      <div className="absolute bottom-12 right-16 h-60 w-60 rounded-full bg-calm-green/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-aqua">
            Precision Critical Care
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            See the ICU through an intelligent, multimodal command center.
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Aegis surfaces real-time clinical risk, orchestrates workflows, and
            empowers teams with an AI copilot that understands vitals, imaging,
            and narrative data in context.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/dashboard"
              className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-night-sky transition hover:bg-soft-white"
            >
              Explore Live Dashboard
            </Link>
            <a
              href="#integrations"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-soft-white transition hover:border-white/40"
            >
              See Integrations
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel relative overflow-hidden border-white/5 p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-aqua/20 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wider text-white/50">
                Escalation Score
              </p>
              <p className="text-4xl font-semibold text-aqua">92</p>
              <p className="text-sm text-white/60">
                Risk-aware scoring engine blending vitals, labs, and nursing
                assessments to surface hidden deterioration.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wider text-white/50">
                Deterioration Lead Time
              </p>
              <p className="text-4xl font-semibold text-calm-green">3.1h</p>
              <p className="text-sm text-white/60">
                Average lead time granted before critical events using adaptive
                signal detection.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wider text-white/50">
                Clinical AI Sessions
              </p>
              <p className="text-4xl font-semibold text-soft-white">4,832</p>
              <p className="text-sm text-white/60">
                Real-time, explainable LLM consultations across imaging, labs,
                and longitudinal EHR narratives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
