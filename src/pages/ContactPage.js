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
        <section class="section-large bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Contact Us</h1>
            <p class="text-large">Get in touch with our expert team for personalized financial guidance</p>
          </div>
        </section>

        <!-- Contact Form & Info -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="grid grid-2" style="gap: 4rem;">
              <!-- Contact Form -->
              <div>
                <h2>Send Us a Message</h2>
                <p class="text-neutral-600 mb-3">Ready to transform your financial strategy? Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form id="contactForm" class="space-y-4">
                  <div class="grid grid-2">
                    <div class="form-group">
                      <label class="form-label">First Name *</label>
                      <input type="text" class="form-input" name="firstName" required>
                    </div>
                    
                    <div class="form-group">
                      <label class="form-label">Last Name *</label>
                      <input type="text" class="form-input" name="lastName" required>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Email Address *</label>
                    <input type="email" class="form-input" name="email" required>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" class="form-input" name="phone">
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Company Name</label>
                    <input type="text" class="form-input" name="company">
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Service Interest</label>
                    <select class="form-select" name="serviceInterest">
                      <option value="">Select a service</option>
                      <option value="compliance-assessment">Compliance Assessment</option>
                      <option value="strategic-planning">Strategic Planning</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="business-advisory">Business Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Message *</label>
                    <textarea class="form-textarea" name="message" placeholder="Tell us about your needs, challenges, or questions..." required></textarea>
                  </div>
                  
                  <div class="form-group">
                    <div class="form-checkbox">
                      <input type="checkbox" name="consent" id="consent" required>
                      <label for="consent">I consent to being contacted by Apex Financial Consultancy regarding my inquiry.</label>
                    </div>
                  </div>
                  
                  <button type="submit" class="btn btn-primary w-full">Send Message</button>
                </form>
              </div>
              
              <!-- Contact Information -->
              <div>
                <h2>Get in Touch</h2>
                <p class="text-neutral-600 mb-4">We're here to help you navigate your financial challenges and opportunities.</p>
                
                <div class="space-y-6">
                  <div class="card">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="card-icon" style="width: 40px; height: 40px; font-size: 1.25rem;">📧</div>
                      <div>
                        <h4 class="mb-0">Email</h4>
                        <p class="text-neutral-600 mb-0">info@apexfinancial.com</p>
                      </div>
                    </div>
                    <p class="text-small text-neutral-500">We respond to all emails within 24 hours</p>
                  </div>
                  
                  <div class="card">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="card-icon" style="width: 40px; height: 40px; font-size: 1.25rem;">📞</div>
                      <div>
                        <h4 class="mb-0">Phone</h4>
                        <p class="text-neutral-600 mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <p class="text-small text-neutral-500">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                  
                  <div class="card">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="card-icon" style="width: 40px; height: 40px; font-size: 1.25rem;">📍</div>
                      <div>
                        <h4 class="mb-0">Office</h4>
                        <p class="text-neutral-600 mb-0">123 Financial District<br>New York, NY 10004</p>
                      </div>
                    </div>
                    <p class="text-small text-neutral-500">By appointment only</p>
                  </div>
                  
                  <div class="card">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="card-icon" style="width: 40px; height: 40px; font-size: 1.25rem;">⏰</div>
                      <div>
                        <h4 class="mb-0">Emergency Support</h4>
                        <p class="text-neutral-600 mb-0">+1 (555) 123-4568</p>
                      </div>
                    </div>
                    <p class="text-small text-neutral-500">24/7 for existing clients</p>
                  </div>
                </div>
                
                <div class="mt-4">
                  <h3>Prefer to Start with an Assessment?</h3>
                  <p class="text-neutral-600 mb-3">Get a comprehensive evaluation of your current financial position and compliance status.</p>
                  <a href="/assessment" class="btn btn-outline w-full" data-link>Start Free Assessment</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Frequently Asked Questions</h2>
              <p class="text-large text-neutral-600">Quick answers to common questions</p>
            </div>
            
            <div class="grid grid-2">
              <div class="card">
                <h4>How quickly can you start working with us?</h4>
                <p>We can typically begin initial assessments within 48-72 hours of our first consultation. For urgent compliance matters, we offer expedited services.</p>
              </div>
              
              <div class="card">
                <h4>What industries do you specialize in?</h4>
                <p>We work across all industries, with particular expertise in financial services, healthcare, technology, manufacturing, and real estate sectors.</p>
              </div>
              
              <div class="card">
                <h4>Do you work with small businesses?</h4>
                <p>Absolutely! We provide scalable solutions for businesses of all sizes, from startups to large enterprises, with pricing models to match.</p>
              </div>
              
              <div class="card">
                <h4>Is the initial consultation free?</h4>
                <p>Yes, we offer a complimentary 30-minute consultation to understand your needs and determine how we can best assist your business.</p>
              </div>
              
              <div class="card">
                <h4>How do you ensure data security?</h4>
                <p>We maintain SOC 2 compliance, use enterprise-grade encryption, and follow strict data handling protocols to protect your sensitive information.</p>
              </div>
              
              <div class="card">
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
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    
    const submitButton = e.target.querySelector('button[type="submit"]')
    submitButton.disabled = true
    submitButton.textContent = 'Sending...'
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      e.target.innerHTML = `
        <div class="text-center">
          <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
          <h3>Message Sent Successfully!</h3>
          <p class="text-large mb-3">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <p class="text-neutral-600">We've sent a confirmation email to <strong>${data.email}</strong></p>
          <div class="mt-4">
            <a href="/assessment" class="btn btn-primary" data-link>Start Free Assessment</a>
          </div>
        </div>
      `
      
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
      submitButton.disabled = false
      submitButton.textContent = 'Send Message'
    }
  }

  destroy() {
    // Cleanup if needed
  }
}