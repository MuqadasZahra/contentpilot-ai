import "./globals.css";

export const metadata = {
  title: "ContentPilot AI - Plan and write content with AI",
  description:
    "AI-powered content planning, generation, and scheduling for small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
