const stats = [
  { label: "Posts scheduled", value: "12" },
  { label: "AI drafts this week", value: "27" },
  { label: "Active platforms", value: "3" },
  { label: "Team members", value: "2" },
];

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Welcome back 👋</h1>
      <p className="text-gray-500 mb-8">Here's what's happening with your content this week.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="font-semibold mb-4">Quick actions</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/dashboard/generate" className="px-4 py-2 bg-brand-500 text-white rounded-lg text-sm font-medium">
            Generate content with AI
          </a>
          <a href="/dashboard/calendar" className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium">
            View content calendar
          </a>
        </div>
      </div>
    </div>
  );
}
