
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import HomePage from './pages/HomePage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import AssessmentPage from './pages/AssessmentPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import CompliancePage from './pages/CompliancePage.tsx'
import StrategicPlanningPage from './pages/StrategicPlanningPage.tsx'

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