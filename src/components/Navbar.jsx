import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    { path: "/transcript", label: "Transcript" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50
  backdrop-blur
  bg-sky-50/70
  border-b border-sky-200">
      <div className="
        mx-auto max-w-6xl
        rounded-full
        bg-white/70 backdrop-blur-xl
        shadow-lg shadow-sky-200/50
        px-8 py-4
        flex items-center justify-between
      ">
        {/* Logo */}
        <h1 className="
          text-lg font-bold
          bg-gradient-to-r from-sky-500 to-cyan-400
          bg-clip-text text-transparent
        ">
          Portfolio
        </h1>

        {/* Links */}
        <div className="flex gap-2">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${isActive
                  ? "bg-sky-500 text-white shadow-md scale-105"
                  : "text-sky-600 hover:bg-sky-100 hover:scale-105"}
                `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
