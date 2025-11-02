import {
  Activity,
  Bell,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users
} from "lucide-react";
import Link from "next/link";

const items = [
  { label: "Overview", icon: LayoutDashboard, href: "#overview" },
  { label: "Alerts", icon: Bell, href: "#alerts" },
  { label: "Patients", icon: Users, href: "#patients" },
  { label: "Vitals", icon: Activity, href: "#vitals" },
  { label: "Chat", icon: MessageSquare, href: "#chat" }
];

export function DashboardSidebar() {
  return (
    <aside className="hidden w-72 flex-col gap-6 border-r border-white/5 bg-night-sky/60 px-6 py-8 md:flex">
      <Link href="/" className="text-xl font-semibold text-soft-white">
        Aegis Console
      </Link>
      <nav className="flex flex-1 flex-col gap-2 text-sm text-white/60">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-soft-white"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </a>
        ))}
      </nav>
      <button className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-soft-white transition hover:bg-white/20">
        <span>Settings</span>
        <Settings className="h-4 w-4" />
      </button>
    </aside>
  );
}
