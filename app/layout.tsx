import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupTracker — Track Who Skips Daily Standups",
  description: "Monitor Slack standup channels, track absence patterns, and send automated reminders to non-participants. Built for remote team leads and scrum masters."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d3b3d67-5525-481b-867c-52854a372af1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
