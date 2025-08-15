import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class ServicesPage {
  constructor() {
    this.name = 'ServicesPage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="section-large bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Our Services</h1>
            <p class="text-large">Comprehensive financial consultancy solutions designed to drive your business forward</p>
          </div>
        </section>

        <!-- Services Grid -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="grid grid-2">
              <div class="card">
                <div class="card-icon">📋</div>
                <h3>Compliance Assessment & Audit</h3>
                <p>Thorough evaluation of your business compliance with federal, state, and industry-specific regulations. Our comprehensive assessment identifies gaps and provides actionable recommendations.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>Regulatory compliance review</li>
                  <li>Documentation audit</li>
                  <li>Risk assessment</li>
                  <li>Remediation planning</li>
                </ul>
                <a href="/assessment" class="btn btn-primary" data-link>Start Assessment</a>
              </div>

              <div class="card">
                <div class="card-icon">📈</div>
                <h3>Strategic Financial Planning</h3>
                <p>Data-driven financial strategies tailored to your business goals. We help you optimize cash flow, plan for growth, and make informed investment decisions.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>Financial forecasting</li>
                  <li>Budget optimization</li>
                  <li>Investment planning</li>
                  <li>Growth strategy development</li>
                </ul>
                <a href="/strategic-planning" class="btn btn-primary" data-link>Learn More</a>
              </div>

              <div class="card">
                <div class="card-icon">🛡️</div>
                <h3>Risk Management</h3>
                <p>Comprehensive risk assessment and mitigation strategies to protect your business from financial uncertainties and regulatory changes.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>Risk identification & analysis</li>
                  <li>Mitigation strategy development</li>
                  <li>Insurance optimization</li>
                  <li>Contingency planning</li>
                </ul>
                <a href="/contact" class="btn btn-primary" data-link>Get Started</a>
              </div>

              <div class="card">
                <div class="card-icon">💼</div>
                <h3>Business Advisory</h3>
                <p>Expert guidance on complex financial decisions, mergers & acquisitions, restructuring, and business optimization initiatives.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>M&A advisory</li>
                  <li>Business valuation</li>
                  <li>Restructuring guidance</li>
                  <li>Performance optimization</li>
                </ul>
                <a href="/contact" class="btn btn-primary" data-link>Schedule Consultation</a>
              </div>

              <div class="card">
                <div class="card-icon">📊</div>
                <h3>Financial Reporting & Analytics</h3>
                <p>Advanced financial reporting solutions and analytics to provide clear insights into your business performance and opportunities.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>Custom reporting dashboards</li>
                  <li>KPI tracking & analysis</li>
                  <li>Benchmarking studies</li>
                  <li>Performance metrics</li>
                </ul>
                <a href="/contact" class="btn btn-primary" data-link>Learn More</a>
              </div>

              <div class="card">
                <div class="card-icon">🎓</div>
                <h3>Training & Education</h3>
                <p>Comprehensive training programs for your team on financial best practices, compliance requirements, and industry standards.</p>
                <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                  <li>Compliance training</li>
                  <li>Financial literacy programs</li>
                  <li>Best practices workshops</li>
                  <li>Ongoing support</li>
                </ul>
                <a href="/contact" class="btn btn-primary" data-link>Inquire Now</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Process Section -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Our Proven Process</h2>
              <p class="text-large text-neutral-600">A systematic approach to delivering exceptional results</p>
            </div>
            
            <div class="grid grid-4">
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">1</div>
                <h4>Discovery</h4>
                <p>Comprehensive analysis of your current financial position and compliance status</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">2</div>
                <h4>Assessment</h4>
                <p>Detailed evaluation using our proprietary assessment framework</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">3</div>
                <h4>Strategy</h4>
                <p>Development of customized solutions and implementation roadmap</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">4</div>
                <h4>Implementation</h4>
                <p>Guided execution with ongoing support and monitoring</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h2 class="text-white">Ready to Get Started?</h2>
            <p class="text-large mb-4">Take the first step towards financial excellence with our comprehensive assessment.</p>
            <a href="/assessment" class="btn btn-secondary" data-link>Start Free Assessment</a>
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