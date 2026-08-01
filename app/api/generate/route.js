import { NextResponse } from "next/server";

export async function POST(req) {
  const { topic, platform, tone } = await req.json();

  if (!topic) {
    return NextResponse.json({ error: "Topic is required" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      caption: `[Demo mode - add OPENAI_API_KEY to .env.local]\n\n${platform || "Instagram"} caption idea for "${topic}" in a ${tone || "friendly"} tone: "Discover what makes ${topic} worth talking about today. Swipe to see why our customers love it. #${topic.replace(/\s+/g, "")} #smallbusiness"`,
      hashtags: ["#" + topic.replace(/\s+/g, ""), "#smallbusiness", "#contentmarketing"],
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You write short, high-converting social media captions for small businesses. Keep it under 60 words, then add 5 relevant hashtags on a new line.",
          },
          {
            role: "user",
            content: `Platform: ${platform || "Instagram"}\nTone: ${tone || "friendly"}\nTopic: ${topic}`,
          },
        ],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "Could not generate content.";

    return NextResponse.json({ caption: text });
  } catch (err) {
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
