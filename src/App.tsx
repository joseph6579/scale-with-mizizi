import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomePage from './pages/HomePage.js'
import ServicesPage from './pages/ServicesPage.js'
import { AssessmentPage } from './pages/AssessmentPage.js'
import { AboutPage } from './pages/AboutPage.js'
import ContactPage from './pages/ContactPage.js'
import { CompliancePage } from './pages/CompliancePage.js'
import StrategicPlanningPage from './pages/StrategicPlanningPage.js'

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