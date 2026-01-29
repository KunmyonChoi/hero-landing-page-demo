import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Studio - Transform Your Media with AI",
  description:
    "Enhance video quality, separate audio tracks, generate subtitles, and more. All powered by cutting-edge artificial intelligence.",
  keywords: [
    "AI",
    "video enhancement",
    "super resolution",
    "audio separation",
    "subtitle generation",
    "media processing",
  ],
  openGraph: {
    title: "AI Studio - Transform Your Media with AI",
    description:
      "Enhance video quality, separate audio tracks, generate subtitles, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
