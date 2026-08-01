"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "W1", engagement: 120 },
  { week: "W2", engagement: 180 },
  { week: "W3", engagement: 160 },
  { week: "W4", engagement: 240 },
  { week: "W5", engagement: 300 },
  { week: "W6", engagement: 280 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Analytics</h1>
      <p className="text-gray-500 mb-8">Engagement across all your posts, past 6 weeks.</p>

      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
            <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#5a67f2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Sample data. Replace with real numbers from your platform APIs (Meta, TikTok, etc.) once connected.
      </p>
    </div>
  );
}
