import Link from "next/link";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Integrations", href: "#integrations" },
  { label: "Use Cases", href: "#use-cases" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night-sky/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10 text-aqua">
            AE
          </span>
          Aegis Clinical Intelligence
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-soft-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/dashboard"
            className="rounded-full border border-aqua/50 px-4 py-2 text-sm font-semibold text-aqua transition hover:border-aqua hover:bg-aqua hover:text-night-sky"
          >
            Launch Console
          </Link>
        </div>
      </div>
    </header>
  );
}
