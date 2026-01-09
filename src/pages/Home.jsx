
import React from "react"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">



            {/* floating gradient blobs */}
            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl"
            />

            <motion.div
                animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-sky-200/40 rounded-full blur-3xl"
            />

            {/* content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6
                     bg-gradient-to-r from-sky-600 to-sky-400
                     bg-clip-text text-transparent"
                >
                    Your Name
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-sky-700/80 text-lg md:text-xl mb-12 leading-relaxed"
                >
                    Frontend Developer who loves building modern,
                    clean and interactive web experiences with React.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="/resume"
                        className="px-10 py-4 rounded-full font-semibold
                       bg-sky-500 text-white shadow-lg
                       hover:bg-sky-600 hover:shadow-xl
                       transition-all duration-300"
                    >
                        View Resume
                    </a>

                    <a
                        href="/contact"
                        className="px-10 py-4 rounded-full font-semibold
                       border border-sky-400 text-sky-600
                       hover:bg-sky-100 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 text-sky-500 text-xs tracking-[0.3em]"
            >
                SCROLL
            </motion.div>
        </section>
    )
}