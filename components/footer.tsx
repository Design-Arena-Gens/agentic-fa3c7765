export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-sky/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-soft-white">© {new Date().getFullYear()} Aegis Clinical Intelligence</span>
          <p className="text-xs text-white/40">
            HIPAA-ready, HITRUST aligned. Built for safety-critical environments.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#platform" className="hover:text-soft-white">
            Platform
          </a>
          <a href="#integrations" className="hover:text-soft-white">
            Integrations
          </a>
          <a href="/dashboard" className="hover:text-soft-white">
            Live Console
          </a>
        </div>
      </div>
    </footer>
  );
}
