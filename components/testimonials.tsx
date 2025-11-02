import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="use-cases"
      className="relative mx-auto max-w-6xl px-6 py-24 text-white/80"
    >
      <div className="mb-10 flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-aqua">
          Voices from the floor
        </span>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Trusted by frontline clinicians orchestrating complex care.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={item.name}
            className="glass-panel flex flex-col gap-6 p-8 text-lg leading-relaxed text-white/70"
          >
            <span className="text-5xl text-aqua">&quot;</span>
            <p>{item.quote}</p>
            <footer className="flex items-center gap-3 text-sm uppercase tracking-wider text-white/40">
              <span>{item.name}</span>
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
