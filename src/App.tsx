import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AssessmentPage from './pages/AssessmentPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CompliancePage from './pages/CompliancePage'
import StrategicPlanningPage from './pages/StrategicPlanningPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/strategic-planning" element={<StrategicPlanningPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App