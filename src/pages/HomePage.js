import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class HomePage {
  constructor() {
    this.name = 'HomePage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main>
        <!-- Hero Section -->
        <section class="hero">
          <div class="container">
            <div class="hero-content fade-in-up">
              <h1>Expert Financial Consultancy for Modern Businesses</h1>
              <p>Navigate complex financial landscapes with confidence. Our expert consultants provide strategic guidance, compliance assessments, and tailored solutions for your business success.</p>
              <div class="hero-cta">
                <a href="/assessment" class="btn btn-primary" data-link>Start Free Assessment</a>
                <a href="/services" class="btn btn-secondary" data-link>Our Services</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Overview -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Comprehensive Financial Solutions</h2>
              <p class="text-large text-neutral-600">We provide end-to-end financial consultancy services tailored to your unique business needs</p>
            </div>
            
            <div class="grid grid-3">
              <div class="card">
                <div class="card-icon">📊</div>
                <h3>Compliance Assessment</h3>
                <p>Comprehensive evaluation of your business compliance with government regulations and industry standards.</p>
                <a href="/assessment" class="btn btn-outline mt-2" data-link>Start Assessment</a>
              </div>
              
              <div class="card">
                <div class="card-icon">🎯</div>
                <h3>Strategic Planning</h3>
                <p>Data-driven financial strategies to optimize your business performance and achieve long-term growth.</p>
                <a href="/strategic-planning" class="btn btn-outline mt-2" data-link>Learn More</a>
              </div>
              
              <div class="card">
                <div class="card-icon">🛡️</div>
                <h3>Risk Management</h3>
                <p>Identify, assess, and mitigate financial risks to protect your business and ensure sustainable growth.</p>
                <a href="/services" class="btn btn-outline mt-2" data-link>Explore Services</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="grid grid-2" style="align-items: center;">
              <div>
                <h2>Why Leading Businesses Choose Apex Financial</h2>
                <div class="mb-3">
                  <h4>✓ Expert Team</h4>
                  <p>Certified financial professionals with decades of combined experience in regulatory compliance and strategic planning.</p>
                </div>
                <div class="mb-3">
                  <h4>✓ Proven Results</h4>
                  <p>Track record of helping businesses achieve 100% compliance while optimizing their financial performance.</p>
                </div>
                <div class="mb-3">
                  <h4>✓ Tailored Solutions</h4>
                  <p>Customized approaches that align with your specific industry requirements and business objectives.</p>
                </div>
                <a href="/about" class="btn btn-primary" data-link>Learn About Our Team</a>
              </div>
              <div class="text-center">
                <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Financial consulting team" style="width: 100%; max-width: 500px; border-radius: 16px; box-shadow: var(--shadow-xl);">
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h2 class="text-white">Ready to Transform Your Financial Strategy?</h2>
            <p class="text-large mb-4">Start with our comprehensive compliance assessment and discover opportunities for optimization.</p>
            <div class="flex justify-center gap-4" style="flex-wrap: wrap;">
              <a href="/assessment" class="btn btn-secondary" data-link>Start Free Assessment</a>
              <a href="/contact" class="btn btn-outline" data-link style="color: white; border-color: white;">Schedule Consultation</a>
            </div>
          </div>
        </section>
      </main>

      ${createFooter()}
    `
  }

  destroy() {
    // Cleanup if needed
  }
}