import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Transcript() {
    const [open, setOpen] = useState(false)

    return (
        <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100
                        flex items-center justify-center px-6 py-24">

            {/* card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl w-full bg-white rounded-2xl shadow-xl
                   border border-sky-100 p-10 text-center"
            >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full
                        bg-sky-100 flex items-center justify-center
                        text-4xl text-sky-500">
                    📄
                </div>

                <h2 className="text-3xl font-bold text-sky-700 mb-3">
                   Transcript
                </h2>

                <p className="text-sky-600 mb-8">
                    Official academic record of my studies
                </p>

                {/* preview */}
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    onClick={() => setOpen(true)}
                    className="cursor-zoom-in mb-10 rounded-xl overflow-hidden
                     border border-sky-100 shadow-md"
                >
                    <img
                        src="/github.jpg"
                        alt="Transcript Preview"
                        className="w-full object-cover"
                    />
                </motion.div>

                <div className="flex justify-center gap-6">
                    <a
                        href="/student.pdf"
                        target="_blank"
                        className="px-8 py-3 rounded-full font-semibold
                       bg-sky-500 text-white shadow-lg
                       hover:bg-sky-600 hover:shadow-xl
                       transition-all duration-300"
                    >
                        View PDF
                    </a>

                    <a
                        href="/student.pdf"
                        download
                        className="px-8 py-3 rounded-full font-semibold
                       border border-sky-400 text-sky-600
                       hover:bg-sky-100 transition-all duration-300"
                    >
                        Download
                    </a>
                </div>
            </motion.div>

            {/* modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/60 backdrop-blur-md cursor-zoom-out"
                        onClick={() => setOpen(false)}
                    >
                        {/* close button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 text-white/70
                         hover:text-white text-3xl transition"
                        >
                            ×
                        </button>

                        {/* image */}
                        <motion.img
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            src="/github.jpg"
                            className="max-h-[90vh] max-w-[90vw]
                         rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
