const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const samplePosts = {
  Mon: [{ title: "Autumn blend launch", platform: "Instagram" }],
  Wed: [{ title: "Customer spotlight", platform: "Facebook" }],
  Fri: [
    { title: "Weekend hours reminder", platform: "Instagram" },
    { title: "New product teaser", platform: "TikTok" },
  ],
};

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Content Calendar</h1>
      <p className="text-gray-500 mb-8">This week's scheduled posts across all platforms.</p>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day) => (
          <div key={day} className="bg-white rounded-xl border border-gray-100 p-3 min-h-[160px]">
            <p className="text-xs font-semibold text-gray-400 mb-2">{day}</p>
            <div className="flex flex-col gap-2">
              {(samplePosts[day] || []).map((post, i) => (
                <div
                  key={i}
                  className="bg-brand-50 text-brand-700 text-xs rounded-lg px-2 py-2 font-medium"
                >
                  {post.title}
                  <div className="text-[10px] text-brand-400 mt-1">{post.platform}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Note: this is sample data. Wire this up to your Supabase "posts" table to make it real.
      </p>
    </div>
  );
}
