"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Super Resolution",
    titleKo: "슈퍼레솔루션",
    description:
      "Transform low-resolution videos into stunning 4K quality. Our AI analyzes each frame and intelligently upscales while preserving details and reducing noise.",
    input: "Video",
    output: "Enhanced Video",
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Image Enhancement",
    titleKo: "화질개선",
    description:
      "Breathe new life into your images with AI-powered enhancement. Remove blur, reduce noise, and boost clarity while maintaining natural appearance.",
    input: "Image",
    output: "Enhanced Image",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
    ),
    title: "AutoReframe",
    titleKo: "화면비 자동 조정 (16:9, 9:16)",
    description:
      "Intelligently reframe videos for any aspect ratio. Perfect for converting horizontal videos to vertical format for social media, or vice versa.",
    input: "Video",
    output: "Reframed Video",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    title: "SoundStill",
    titleKo: "악기, BGM, 보컬 분리",
    description:
      "Separate audio tracks into individual stems - vocals, instruments, and background music. Perfect for remixing, karaoke, or creating instrumentals.",
    input: "Audio",
    output: "Separated Tracks",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    title: "Subtitle Generation",
    titleKo: "자막 생성",
    description:
      "Automatically generate accurate subtitles from audio using advanced speech recognition. Supports multiple languages with high accuracy.",
    input: "Audio",
    output: "SRT Subtitle",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Subtitle Sync",
    titleKo: "자막 동기화",
    description:
      "Perfectly synchronize subtitles with audio. Our AI aligns text timing with speech patterns for seamless viewing experience.",
    input: "SRT + Audio",
    output: "Synced SRT",
    gradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    title: "Subtitle Translation",
    titleKo: "자막 번역",
    description:
      "Translate subtitles to any language while preserving timing and context. Reach global audiences with localized content.",
    input: "SRT",
    output: "Translated SRT",
    gradient: "bg-gradient-to-br from-red-500 to-pink-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-indigo-300 text-sm font-medium mb-6"
          >
            AI-Powered Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need for
            <br />
            <span className="gradient-text">Media Processing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools handles every aspect of video,
            audio, and subtitle processing with professional-grade quality.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 mb-6">
            Ready to transform your media workflow?
          </p>
          <motion.a
            href="#"
            className="btn-primary inline-flex items-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
