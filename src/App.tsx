import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import LearningPath from './pages/LearningPath'
import Resources from './pages/Resources'
import Community from './pages/Community'
import Mentorship from './pages/Mentorship'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App