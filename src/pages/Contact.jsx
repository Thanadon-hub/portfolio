import React from 'react'
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-sky-50 via-white to-sky-100">


            {/* title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold text-sky-700 mb-4"
            >
                Contact Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sky-600 mb-14 max-w-md"
            >
                You can contact me through the channels below.
            </motion.p>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Email */}
                <motion.a
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:aon59079@email.com"
                    className="group bg-white rounded-2xl px-10 py-8 shadow-lgborder border-sky-100 cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        📧
                    </div>
                    <h3 className="font-semibold text-sky-700">Email</h3>
                    <p className="text-sm text-sky-500 mt-1">aon59079@email.com</p>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Thanadon-hub"
                    target="_blank"
                    className="group bg-white rounded-2xl px-10 py-8 shadow-lgborder border-sky-100 cursor-pointer"
                >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-sky-600 group-hover:text-white transition"
                        >
                            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.29-1.72-1.29-1.72-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.29-5.23-5.75 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.2a10.9 10.9 0 0 1 5.8 0c2.21-1.51 3.18-1.2 3.18-1.2.63 1.59.23 2.76.11 3.05.74.82 1.19 1.86 1.19 3.13 0 4.47-2.69 5.45-5.25 5.73.41.36.77 1.07.77 2.16v3.2c0 .31.21.66.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
                        </svg>

                    </div>
                    <h3 className="font-semibold text-sky-700">GitHub</h3>
                    <p className="text-sm text-sky-500 mt-1">Thanadon-hub</p>
                </motion.a>

                {/* Facebook */}
                <motion.a
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/ThanadonChiwisit"
                    target="_blank"
                    className="group bg-white rounded-2xl px-10 py-8 shadow-lgborder border-sky-100 cursor-pointer"
                >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-sky-600
             group-hover:text-white transition-all duration-300"
                        >
                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.41h3.13V8.797c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.296h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                        </svg>

                    </div>
                    <h3 className="font-semibold text-sky-700">Facebook</h3>
                    <p className="text-sm text-sky-500 mt-1">Thanadon Chiwisit</p>
                </motion.a>

                {/* Line */}
                <motion.a
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://line.me/ti/p/4uTbdf-6if"
                    target="_blank"
                    className="group bg-white rounded-2xl px-10 py-8 shadow-lgborder border-sky-100 cursor-pointer"
                >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-300"
                        >
                            <path d="M19.365 4.998C17.303 2.93 14.43 2 11.988 2 6.522 2 2 5.71 2 10.26c0 4.063 3.344 7.46 7.864 8.13.306.07.723.214.83.492.096.252.063.65.03.91 0 0-.11.66-.135.8-.04.236-.187.92.804.503.99-.416 5.34-3.146 7.29-5.38 1.344-1.474 2.002-2.96 2.002-4.455 0-2.44-1.12-4.67-2.98-6.262z" />
                        </svg>


                    </div>
                    <h3 className="font-semibold text-sky-700">Line</h3>
                    <p className="text-sm text-sky-500 mt-1">Thanadon Chiwisit</p>
                </motion.a>

            </div>

            {/* floating decoration */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 w-72 h-72 rounded-fullbg-sky-300/30 blur-3xl"
            />
        </section>
    )
}