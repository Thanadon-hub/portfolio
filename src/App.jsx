
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/project'
import Resume from './pages/Resume'
import Transcript from './pages/Transcript'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-50 to-sky-100 text-sky-900">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}