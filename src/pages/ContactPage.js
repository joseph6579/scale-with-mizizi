import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class ContactPage {
  constructor() {
    this.name = 'ContactPage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Let's Start a Conversation</h1>
            <p class="text-large">Connect with our expert team for personalized financial guidance</p>
          </div>
        </section>

        <!-- Contact Form & Info -->
        <section class="section-large bg-neutral-50">
          <div class="container">
            <div class="modern-contact-container">
              <!-- Contact Form -->
              <div class="modern-form-section">
                <div class="form-header-modern">
                  <h2>Get Expert Guidance</h2>
                  <p>Tell us about your needs and we'll connect you with the right specialist within 24 hours.</p>
                </div>
                
                <form id="contactForm" class="modern-contact-form">
                  <div class="form-row">
                    <div class="modern-form-group">
                      <input type="text" class="modern-input" name="firstName" id="firstName" required>
                      <label class="modern-label" for="firstName">First Name</label>
                      <div class="input-highlight"></div>
                    </div>
                    
                    <div class="modern-form-group">
                      <input type="text" class="modern-input" name="lastName" id="lastName" required>
                      <label class="modern-label" for="lastName">Last Name</label>
                      <div class="input-highlight"></div>
                    </div>
                  </div>
                  
                  <div class="modern-form-group">
                    <input type="email" class="modern-input" name="email" id="email" required>
                    <label class="modern-label" for="email">Email Address</label>
                    <div class="input-highlight"></div>
                  </div>
                  
                  <div class="form-row">
                    <div class="modern-form-group">
                      <input type="tel" class="modern-input" name="phone" id="phone">
                      <label class="modern-label" for="phone">Phone Number</label>
                      <div class="input-highlight"></div>
                    </div>
                    
                    <div class="modern-form-group">
                      <input type="text" class="modern-input" name="company" id="company">
                      <label class="modern-label" for="company">Company Name</label>
                      <div class="input-highlight"></div>
                    </div>
                  </div>
                  
                  <div class="modern-form-group">
                    <select class="modern-select" name="serviceInterest" id="serviceInterest">
                      <option value="">Select your primary interest</option>
                      <option value="compliance-assessment">Compliance Assessment</option>
                      <option value="strategic-planning">Strategic Financial Planning</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="business-advisory">Business Advisory</option>
                      <option value="other">Other Services</option>
                    </select>
                    <label class="modern-label select-label" for="serviceInterest">Service Interest</label>
                    <div class="select-arrow">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div class="modern-form-group">
                    <textarea class="modern-textarea" name="message" id="message" rows="4" required></textarea>
                    <label class="modern-label" for="message">How can we help you?</label>
                    <div class="input-highlight"></div>
                  </div>
                  
                  <div class="modern-checkbox-group">
                    <input type="checkbox" name="consent" id="consent" class="modern-checkbox" required>
                    <label for="consent" class="checkbox-label">
                      <span class="checkbox-custom"></span>
                      I consent to being contacted by Apex Financial Consultancy regarding my inquiry and understand that my information will be kept confidential.
                    </label>
                  </div>
                  
                  <button type="submit" class="modern-submit-btn">
                    <span class="btn-text">Send Message</span>
                    <span class="btn-loading">
                      <svg class="loading-spinner" width="20" height="20" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="50.27" stroke-dashoffset="50.27">
                          <animate attributeName="stroke-dashoffset" values="50.27;0;50.27" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                      </svg>
                      Sending...
                    </span>
                  </button>
                </form>
              </div>
              
              <!-- Contact Information -->
              <div class="contact-info-section">
                <div class="contact-info-header">
                  <h3>Connect With Us</h3>
                  <p>Multiple ways to reach our expert team</p>
                </div>
                
                <div class="contact-methods">
                  <div class="contact-method">
                    <div class="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="contact-details">
                      <h4>Email</h4>
                      <p>info@apexfinancial.com</p>
                      <span class="contact-note">Response within 24 hours</span>
                    </div>
                  </div>
                  
                  <div class="contact-method">
                    <div class="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.52 21.39 21 20.77 21C9.39 21 0 11.61 0 0.23C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.39 5.08 0.23C5.08 2.23 5.48 4.23 6.28 6.03C6.48 6.43 6.38 6.93 6.08 7.23L4.08 9.23C5.68 12.43 8.57 15.32 11.77 16.92L13.77 14.92C14.07 14.62 14.57 14.52 14.97 14.72C16.77 15.52 18.77 15.92 20.77 15.92C21.39 15.92 22 16.4 22 16.92Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div class="contact-details">
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                      <span class="contact-note">Mon-Fri, 9AM-6PM EST</span>
                    </div>
                  </div>
                  
                  <div class="contact-method">
                    <div class="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="contact-details">
                      <h4>Office</h4>
                      <p>123 Financial District<br>New York, NY 10004</p>
                      <span class="contact-note">By appointment only</span>
                    </div>
                  </div>
                  
                  <div class="contact-method">
                    <div class="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="contact-details">
                      <h4>Emergency Support</h4>
                      <p>+1 (555) 123-4568</p>
                      <span class="contact-note">24/7 for existing clients</span>
                    </div>
                  </div>
                </div>
                
                <div class="cta-section">
                  <h4>Prefer to Start with an Assessment?</h4>
                  <p>Get a comprehensive evaluation of your current financial position and compliance status.</p>
                  <a href="/assessment" class="assessment-cta-btn" data-link>
                    <span>Start Free Assessment</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="section bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Frequently Asked Questions</h2>
              <p class="text-large text-neutral-600">Quick answers to common questions</p>
            </div>
            
            <div class="faq-grid">
              <div class="faq-item">
                <h4>How quickly can you start working with us?</h4>
                <p>We can typically begin initial assessments within 48-72 hours of our first consultation. For urgent compliance matters, we offer expedited services.</p>
              </div>
              
              <div class="faq-item">
                <h4>What industries do you specialize in?</h4>
                <p>We work across all industries, with particular expertise in financial services, healthcare, technology, manufacturing, and real estate sectors.</p>
              </div>
              
              <div class="faq-item">
                <h4>Do you work with small businesses?</h4>
                <p>Absolutely! We provide scalable solutions for businesses of all sizes, from startups to large enterprises, with pricing models to match.</p>
              </div>
              
              <div class="faq-item">
                <h4>Is the initial consultation free?</h4>
                <p>Yes, we offer a complimentary 30-minute consultation to understand your needs and determine how we can best assist your business.</p>
              </div>
              
              <div class="faq-item">
                <h4>How do you ensure data security?</h4>
                <p>We maintain SOC 2 compliance, use enterprise-grade encryption, and follow strict data handling protocols to protect your sensitive information.</p>
              </div>
              
              <div class="faq-item">
                <h4>What are your payment terms?</h4>
                <p>We offer flexible payment arrangements including project-based, retainer, and ongoing advisory agreements to suit your budget and needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      ${createFooter()}
    `
    
    this.attachEventListeners()
  }

  attachEventListeners() {
    const form = document.getElementById('contactForm')
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e))
    }

    // Enhanced input interactions
    const inputs = document.querySelectorAll('.modern-input, .modern-textarea')
    inputs.forEach(input => {
      input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused')
      })
      
      input.addEventListener('blur', (e) => {
        if (!e.target.value) {
          e.target.parentElement.classList.remove('focused')
        }
        e.target.parentElement.classList.remove('focused')
        if (e.target.value) {
          e.target.parentElement.classList.add('filled')
        } else {
          e.target.parentElement.classList.remove('filled')
        }
      })
      
      // Check if input has value on load
      if (input.value) {
        input.parentElement.classList.add('filled')
      }
    })

    // Select interactions
    const select = document.querySelector('.modern-select')
    if (select) {
      select.addEventListener('change', (e) => {
        if (e.target.value) {
          e.target.parentElement.classList.add('filled')
        } else {
          e.target.parentElement.classList.remove('filled')
        }
      })
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    
    const submitButton = e.target.querySelector('.modern-submit-btn')
    const btnText = submitButton.querySelector('.btn-text')
    const btnLoading = submitButton.querySelector('.btn-loading')
    
    // Show loading state
    submitButton.classList.add('loading')
    submitButton.disabled = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Show success state
      this.showSuccessMessage(data)
      
    } catch (error) {
      // Reset button state
      submitButton.classList.remove('loading')
      submitButton.disabled = false
      
      // Show error message
      this.showErrorMessage()
    }
  }

  showSuccessMessage(data) {
    const formSection = document.querySelector('.modern-form-section')
    formSection.innerHTML = `
      <div class="success-message">
        <div class="success-animation">
          <div class="success-checkmark">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="var(--success)" class="success-circle"/>
              <path d="M20 32L28 40L44 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="success-check"/>
            </svg>
          </div>
        </div>
        
        <div class="success-content">
          <h2>Message Sent Successfully!</h2>
          <p class="success-subtitle">Thank you for reaching out to Apex Financial Consultancy</p>
          
          <div class="success-details">
            <div class="success-info">
              <div class="info-item">
                <span class="info-label">Confirmation sent to:</span>
                <span class="info-value">${data.email}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Reference ID:</span>
                <span class="info-value">#AF${Date.now().toString().slice(-6)}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Expected response:</span>
                <span class="info-value">Within 24 hours</span>
              </div>
            </div>
            
            <div class="next-steps">
              <h4>What happens next?</h4>
              <div class="steps-list">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <strong>Immediate confirmation</strong>
                    <span>You'll receive an email confirmation shortly</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <strong>Expert review</strong>
                    <span>Our specialists will review your inquiry</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <strong>Personal response</strong>
                    <span>We'll contact you within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="success-actions">
            <a href="/assessment" class="btn btn-primary" data-link>
              <span>Start Free Assessment</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="/" class="btn btn-outline" data-link>Return Home</a>
          </div>
        </div>
      </div>
    `
  }

  showErrorMessage() {
    // Create a temporary error message
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error-message'
    errorDiv.innerHTML = `
      <div class="error-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="var(--error)" stroke-width="2"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke="var(--error)" stroke-width="2"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="var(--error)" stroke-width="2"/>
        </svg>
        <span>There was an error sending your message. Please try again.</span>
      </div>
    `
    
    const form = document.getElementById('contactForm')
    form.insertBefore(errorDiv, form.firstChild)
    
    // Remove error message after 5 seconds
    setTimeout(() => {
      errorDiv.remove()
    }, 5000)
  }

  destroy() {
    // Cleanup if needed
  }
}