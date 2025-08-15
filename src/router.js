import { HomePage } from './pages/HomePage.js'
import { ServicesPage } from './pages/ServicesPage.js'
import { AssessmentPage } from './pages/AssessmentPage.js'
import { AboutPage } from './pages/AboutPage.js'
import { ContactPage } from './pages/ContactPage.js'
import { CompliancePage } from './pages/CompliancePage.js'
import { StrategicPlanningPage } from './pages/StrategicPlanningPage.js'

class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/services': ServicesPage,
      '/assessment': AssessmentPage,
      '/about': AboutPage,
      '/contact': ContactPage,
      '/compliance': CompliancePage,
      '/strategic-planning': StrategicPlanningPage
    }
    this.currentPage = null
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute())
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault()
        this.navigateTo(e.target.href)
      }
    })
    this.handleRoute()
  }

  navigateTo(url) {
    history.pushState(null, null, url)
    this.handleRoute()
  }

  handleRoute() {
    const path = window.location.pathname
    const PageClass = this.routes[path] || this.routes['/']
    
    if (this.currentPage) {
      this.currentPage.destroy()
    }
    
    this.currentPage = new PageClass()
    this.currentPage.render()
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === path) {
        link.classList.add('active')
      }
    })
  }
}

export const router = new Router()