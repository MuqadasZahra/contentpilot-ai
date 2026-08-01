# ContentPilot AI

An AI-powered content planning and scheduling tool for small businesses.
Built to be the flagship, "full-stack" project in Muqadas Zahra's portfolio —
real auth, real database, real AI calls, real billing UI, not just static screens.

## What makes this different from your other 27 projects

- **Real authentication** via Supabase (signup/login actually creates users)
- **Real backend API route** (`app/api/generate/route.js`) that calls an AI model
  server-side, so your API key is never exposed in the browser
- **Ready for a real database** (Supabase Postgres) instead of hardcoded data
- **Billing UI** structured for Stripe, showing you understand SaaS pricing tiers
- **Responsive dashboard** reusing the dashboard skills you're already strong at

## Tech stack

- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (auth + database)
- OpenAI API (swap for Anthropic if you prefer)
- Recharts (analytics)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a free Supabase project at https://supabase.com
   - Go to Project Settings → API
   - Copy your Project URL and anon public key

3. Copy the env file and fill in your keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Get an OpenAI API key at https://platform.openai.com/api-keys
   (the app works in demo mode without one, so you can run it immediately)

5. Run locally:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## Deploy (free)

1. Push this folder to a new GitHub repo
2. Go to https://vercel.com → New Project → import the repo
3. Add your environment variables (same as `.env.local`) in Vercel's project settings
4. Deploy — you'll get a live URL to add to your portfolio

## Next steps to make it even stronger (optional, in priority order)

1. **Connect the calendar and generator to a real Supabase table** called `posts`
   so generated content can be saved and scheduled, not just displayed once.
2. **Add Stripe test mode checkout** on the pricing page (Stripe has a great
   Next.js quickstart) — this alone signals "production-ready SaaS."
3. **Write a short case study** (300–400 words) covering: the problem, why you
   chose this stack, one hard decision you made, and a couple of screenshots.
   Add it as a dedicated page linked from your portfolio's project card —
   this is what turns "she built a project" into "she can think like an engineer."
4. Turn on PWA support (`next-pwa` package) so it installs like a mobile app —
   covers your "mobile" gap without a separate React Native build.

## Folder structure

```
contentpilot-ai/
├── app/
│   ├── page.jsx              # Landing/marketing page
│   ├── login/page.jsx        # Supabase auth login
│   ├── signup/page.jsx       # Supabase auth signup
│   ├── api/generate/route.js # Backend: calls the AI model
│   └── dashboard/
│       ├── page.jsx          # Overview
│       ├── generate/page.jsx # AI content generator (flagship feature)
│       ├── calendar/page.jsx # Content calendar
│       ├── analytics/page.jsx# Engagement charts
│       └── pricing/page.jsx  # Billing plans
├── components/Sidebar.jsx
├── lib/supabaseClient.js
└── .env.local.example
```
