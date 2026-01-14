import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
        relative min-h-screen
        px-6
        pt-28 md:pt-24
        pb-32 md:pb-24
        bg-gradient-to-br from-sky-50 via-white to-purple-50
        overflow-hidden
      "
    >
      {/* background blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -top-32 -left-32
          w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem]
          bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
          opacity-30 rounded-full blur-3xl
        "
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -bottom-32 -right-32
          w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem]
          bg-gradient-to-tr from-sky-300 via-cyan-300 to-purple-300
          opacity-30 rounded-full blur-3xl
        "
      />

      <div
        className="
          relative z-10
          max-w-5xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-16
          items-center
        "
      >
        {/* LEFT: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            backdrop-blur-xl bg-white/60
            rounded-3xl
            p-6 sm:p-8 md:p-10
            shadow-xl border border-white/40
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-extrabold mb-6
              bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500
              bg-clip-text text-transparent
            "
          >
            About Me
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            I’m a passionate frontend developer who enjoys crafting clean,
            modern and user-friendly web interfaces. I care deeply about
            usability, performance, and thoughtful design.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            My background also includes IoT systems and real-world projects,
            which helps me design software that connects seamlessly between
            hardware and the web.
          </p>

          {/* highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                label: "Frontend Focus",
                value: "C++ / React / UI / HTML / Tailwind",
              },
              { label: "Experience", value: "Web & IoT" },
              { label: "Design Style", value: "Minimal & Clean" },
              {
                label: "Mindset",
                value: "I enjoy learning new things.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/70 backdrop-blur-md
                  rounded-xl
                  p-4
                  border border-white/40
                  shadow-md hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <p className="text-xs sm:text-sm text-sky-500">
                  {item.label}
                </p>
                <p className="font-semibold text-sky-700 text-sm sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div
            className="
              absolute
              w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem]
              rounded-full
              blur-3xl opacity-40
              bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400
            "
          />

          {/* avatar */}
          <div
            className="
              relative
              w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96
              rounded-3xl overflow-hidden
              border border-white/40
              shadow-2xl bg-white
              transition-transform duration-500
              hover:scale-105
            "
          >
            <img
              src="/TYu.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
