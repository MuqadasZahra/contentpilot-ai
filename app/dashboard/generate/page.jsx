"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("friendly");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, platform, tone }),
    });

    const data = await res.json();
    setLoading(false);
    setResult(data.caption || data.error || "Something went wrong.");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">AI Content Generator</h1>
      <p className="text-gray-500 mb-8">
        Describe what you're posting about, and let AI draft the caption.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <form
          onSubmit={handleGenerate}
          className="bg-white rounded-xl border border-gray-100 p-6"
        >
          <label className="text-sm font-medium block mb-1">Topic / product</label>
          <input
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. our new autumn coffee blend"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium block mb-1">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option>Instagram</option>
                <option>Facebook</option>
                <option>LinkedIn</option>
                <option>TikTok</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option>friendly</option>
                <option>professional</option>
                <option>playful</option>
                <option>bold</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-500 text-white rounded-lg py-2 font-medium hover:bg-brand-600 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate with AI"}
          </button>
        </form>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold mb-3">Result</h2>
          {result ? (
            <p className="text-sm whitespace-pre-wrap text-gray-700">{result}</p>
          ) : (
            <p className="text-sm text-gray-400">
              Your AI-generated caption will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
