import { AlertsPanel } from "@/components/dashboard/alerts-panel";
import { BedGrid } from "@/components/dashboard/bed-grid";
import { ChatPanel } from "@/components/dashboard/chat-panel";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { PatientTable } from "@/components/dashboard/patient-table";
import { SummaryPanels } from "@/components/dashboard/summary-panels";
import { VitalTrendsChart } from "@/components/dashboard/vital-trends-chart";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-night-sky">
      <DashboardSidebar />
      <main className="flex-1 px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-soft-white">
              Critical Care Operations
            </h1>
            <p className="text-sm text-white/40">
              Monitoring 24 beds | Telemetry unit | Last sync: 12 seconds ago
            </p>
          </div>
          <SummaryPanels />
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <AlertsPanel />
            <VitalTrendsChart />
          </div>
          <BedGrid />
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <PatientTable />
            <ChatPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
