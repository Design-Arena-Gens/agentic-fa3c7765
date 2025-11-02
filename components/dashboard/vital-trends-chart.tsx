"use client";

import { vitalTrends } from "@/lib/patients";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis
} from "recharts";

export function VitalTrendsChart() {
  return (
    <section
      id="vitals"
      className="glass-panel flex flex-col gap-4 p-6"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-soft-white">
          High acuity patient trend
        </h2>
        <p className="text-sm text-white/50">
          Overlaying heart rate, mean arterial pressure, and oxygen saturation.
        </p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={vitalTrends} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5A5F" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#FF5A5F" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorMap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#31C6F4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#31C6F4" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorSpo2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#20C997" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#20C997" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="label" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(5, 12, 27, 0.9)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F7FAFC"
              }}
            />
            <Area
              type="monotone"
              dataKey="heartRate"
              stroke="#FF5A5F"
              fill="url(#colorHr)"
              strokeWidth={2}
              name="Heart rate"
            />
            <Area
              type="monotone"
              dataKey="map"
              stroke="#31C6F4"
              fill="url(#colorMap)"
              strokeWidth={2}
              name="MAP"
            />
            <Area
              type="monotone"
              dataKey="spo2"
              stroke="#20C997"
              fill="url(#colorSpo2)"
              strokeWidth={2}
              name="SpO2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
