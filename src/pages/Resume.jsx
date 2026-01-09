import React from 'react'
import { motion } from "framer-motion"

export default function Resume() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-24 px-6">
            <div className="max-w-4xl mx-auto">

                {/* title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-sky-700 mb-16 text-center"
                >
                    Resume
                </motion.h2>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-sky-100"
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
                    transition={{ delay: 0.35 }}
                    className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-sky-100"
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
                                className="px-4 py-2 rounded-full
                           bg-sky-100 text-sky-700 text-sm font-medium"
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
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-sky-100"
                >
                    <h3 className="text-xl font-semibold text-sky-600 mb-4">
                        🛠 Experience
                    </h3>

                    <ul className="space-y-4 text-sky-700">
                        <li>
                            • Built responsive web applications using React & Tailwind CSS
                        </li>
                        <li>
                            • Developed IoT projects with Arduino, ESP8266 / ESP32
                        </li>
                        <li>
                            • Integrated frontend with Firebase and REST APIs
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
