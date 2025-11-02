import Link from "next/link";

export function CTA() {
  return (
    <section className="relative mx-auto my-24 max-w-6xl overflow-hidden rounded-[32px] border border-aqua/20 bg-gradient-to-br from-aqua/10 via-night-sky to-calm-green/10 px-6 py-16 md:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(49,198,244,0.25),_transparent_60%)]" />
      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aqua">
            Elevated care delivery
          </span>
          <h2 className="text-3xl font-semibold text-soft-white">
            Deliver proactive, data-driven care for every patient.
          </h2>
          <p className="text-white/70">
            Launch the Aegis console to orchestrate bedside teams, surface early
            warnings, and partner with an AI copilot that reads the entire
            patient story.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3">
          <Link
            href="/dashboard"
            className="rounded-full bg-soft-white px-6 py-3 text-sm font-semibold text-night-sky transition hover:bg-aqua"
          >
            Launch Clinical Console
          </Link>
          <a
            href="mailto:partners@aegis.health"
            className="text-center text-sm font-medium text-aqua hover:text-soft-white"
          >
            Request enterprise briefing -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
