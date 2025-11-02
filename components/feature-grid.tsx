"use client";

import { features } from "@/lib/data";
import { motion } from "framer-motion";

export function FeatureGrid() {
  return (
    <section id="platform" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-aqua">
          Platform stack
        </span>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          One command center for bedside, telemetric, and operational data.
        </h2>
        <p className="max-w-3xl text-lg text-white/65">
          Stream vitals, waveform analytics, laboratory trends, and ventilator
          data into an adaptive knowledge graph that aligns every signal to the
          patient journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="glass-panel flex flex-col gap-4 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-soft-white">
              {feature.title}
            </h3>
            <p className="text-sm text-white/65">{feature.summary}</p>
            <ul className="space-y-2 text-sm text-white/50">
              {feature.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2"
                >
                  <span className="text-aqua">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
