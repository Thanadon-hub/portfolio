import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6 py-24">
      <div className="max-w-5xl mx-auto grid gap-16 md:grid-cols-2 items-center">

        {/* text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-sky-700 mb-6">
            About Me
          </h2>

          <p className="text-sky-700/80 leading-relaxed mb-6">
            I’m a passionate frontend developer who enjoys crafting clean,
            modern and user-friendly web interfaces. I care deeply about
            usability, performance and thoughtful design.
          </p>

          <p className="text-sky-700/80 leading-relaxed mb-10">
            My background also includes IoT systems and real-world projects,
            which helps me design software that connects seamlessly between
            hardware and the web.
          </p>

          {/* highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Frontend Focus", value: "React / UI" },
              { label: "Experience", value: "Web & IoT" },
              { label: "Design Style", value: "Minimal & Clean" },
              { label: "Mindset", value: "Always Learning" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-sky-100
                           shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm text-sky-500">{item.label}</p>
                <p className="font-semibold text-sky-700">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* visual / avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div className="absolute w-72 h-72 rounded-full
                          bg-sky-300/30 blur-3xl" />

          {/* avatar */}
          <div className="relative w-64 h-64 rounded-3xl overflow-hidden
                          border border-sky-100 shadow-xl bg-white
                          flex items-center justify-center text-6xl">
            <img src="github.jpg" alt="Profile" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
