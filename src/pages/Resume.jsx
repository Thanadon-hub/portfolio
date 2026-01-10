import React  from "react";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

export default function Resume() {
    const [open, setOpen] = useState(false)

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-sky-700 mb-16 text-center"
        >
          Resume
        </motion.h2>

        {/* layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Resume Image + Download */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="sticky top-28 space-y-6">
              {/* image */}
              <div
                onClick={() => setOpen(true)}
                className="bg-white rounded-2xl shadow-lg p-4 border border-sky-100
             cursor-zoom-in"
              >
                <img
                  src="/github.jpg"
                  alt="Resume"
                  className="rounded-xl w-full object-cover
               hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* download button */}
              <a
                href="/resume.pdf"
                download
                className="
                  flex items-center justify-center gap-3
                  w-full py-4 rounded-xl font-semibold
                  bg-sky-500 text-white shadow-lg
                  hover:bg-sky-600 hover:shadow-xl
                  transition-all duration-300
                "
              >
                ⬇️ Download Resume
              </a>
            </div>
          </motion.div>

          {/* Resume Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-sky-100"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                🎓 Education
              </h3>
              <p className="text-sky-700">
                Bachelor’s Degree in Computer / Engineering / IT
              </p>
              <p className="text-sm text-sky-500 mt-1">
                University Name · 2021 – 2025
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-sky-100"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-6">
                💻 Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML / CSS",
                  "Git & GitHub",
                  "Basic Backend",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-sky-100"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-4">
                🛠 Experience
              </h3>

              <ul className="space-y-4 text-sky-700">
                <li>• Built responsive web apps with React & Tailwind</li>
                <li>• Developed IoT projects with ESP8266 / ESP32</li>
                <li>• Integrated frontend with Firebase & APIs</li>
              </ul>
            </motion.div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-white/80 backdrop-blur
                 flex items-center justify-center px-6"
                  onClick={() => setOpen(false)}
                >
                  {/* image container */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-3xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* close button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute -top-4 -right-4
                     w-10 h-10 rounded-full
                     bg-sky-500 text-white
                     shadow-lg hover:bg-sky-600
                     transition"
                    >
                      ✕
                    </button>

                    <img
                      src="/github.jpg"
                      alt="Resume Full"
                      className="w-full rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
