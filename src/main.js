import './style.css'
import { router } from './router.js'
import { initializeNavigation } from './navigation.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation()
  router.init()
})