import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class CompliancePage {
  constructor() {
    this.name = 'CompliancePage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="section-large bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Compliance Assessment & Management</h1>
            <p class="text-large">Comprehensive compliance solutions to keep your business protected and compliant</p>
          </div>
        </section>

        <!-- Overview -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="grid grid-2" style="align-items: center;">
              <div>
                <h2>Stay Ahead of Regulatory Requirements</h2>
                <p class="text-large">In today's complex regulatory environment, compliance isn't just about avoiding penalties—it's about building trust, protecting your reputation, and creating competitive advantages.</p>
                <p>Our comprehensive compliance assessment and management services help you navigate the intricate web of federal, state, and industry-specific regulations while optimizing your operations for efficiency and growth.</p>
                <a href="/assessment" class="btn btn-primary" data-link>Start Compliance Assessment</a>
              </div>
              <div class="text-center">
                <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Compliance documentation" style="width: 100%; max-width: 500px; border-radius: 16px; box-shadow: var(--shadow-xl);">
              </div>
            </div>
          </div>
        </section>

        <!-- Key Regulations -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Key Regulatory Frameworks We Cover</h2>
              <p class="text-large text-neutral-600">Expert guidance across major compliance requirements</p>
            </div>
            
            <div class="grid grid-3">
              <div class="card">
                <div class="card-icon">📋</div>
                <h3>Sarbanes-Oxley (SOX)</h3>
                <p>Comprehensive SOX compliance including internal controls, financial reporting accuracy, and audit requirements for public companies.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Section 302 & 404 compliance</li>
                  <li>Internal control documentation</li>
                  <li>Management assessment</li>
                  <li>Audit preparation</li>
                </ul>
              </div>
              
              <div class="card">
                <div class="card-icon">🔒</div>
                <h3>GDPR & Data Privacy</h3>
                <p>Data protection compliance for businesses handling EU citizen data, including privacy policies, consent management, and breach protocols.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Privacy impact assessments</li>
                  <li>Consent management systems</li>
                  <li>Data mapping & inventory</li>
                  <li>Breach response procedures</li>
                </ul>
              </div>
              
              <div class="card">
                <div class="card-icon">🏥</div>
                <h3>HIPAA Compliance</h3>
                <p>Healthcare data protection compliance including administrative, physical, and technical safeguards for protected health information.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Risk assessments</li>
                  <li>Policy development</li>
                  <li>Staff training programs</li>
                  <li>Audit & monitoring</li>
                </ul>
              </div>
              
              <div class="card">
                <div class="card-icon">💳</div>
                <h3>PCI DSS</h3>
                <p>Payment card industry compliance for businesses that process, store, or transmit credit card information.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Network security assessments</li>
                  <li>Cardholder data protection</li>
                  <li>Vulnerability management</li>
                  <li>Regular monitoring & testing</li>
                </ul>
              </div>
              
              <div class="card">
                <div class="card-icon">📈</div>
                <h3>SEC Regulations</h3>
                <p>Securities and Exchange Commission compliance for investment advisers, broker-dealers, and public companies.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Investment adviser compliance</li>
                  <li>Disclosure requirements</li>
                  <li>Record keeping</li>
                  <li>Examination preparation</li>
                </ul>
              </div>
              
              <div class="card">
                <div class="card-icon">🏭</div>
                <h3>Industry-Specific</h3>
                <p>Specialized compliance requirements for various industries including banking, insurance, pharmaceuticals, and manufacturing.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>FINRA regulations</li>
                  <li>FDA compliance</li>
                  <li>Environmental regulations</li>
                  <li>Labor law compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Assessment Process -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Our Comprehensive Assessment Process</h2>
              <p class="text-large text-neutral-600">A systematic approach to evaluating and improving your compliance posture</p>
            </div>
            
            <div class="grid grid-2" style="gap: 3rem;">
              <div>
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">1</div>
                  <div>
                    <h4>Initial Discovery</h4>
                    <p>Comprehensive review of your business operations, industry requirements, and current compliance status.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">2</div>
                  <div>
                    <h4>Gap Analysis</h4>
                    <p>Detailed identification of compliance gaps, vulnerabilities, and areas requiring immediate attention.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">3</div>
                  <div>
                    <h4>Risk Assessment</h4>
                    <p>Evaluation of potential risks, their likelihood, and potential impact on your business operations.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">4</div>
                  <div>
                    <h4>Remediation Plan</h4>
                    <p>Prioritized action plan with specific steps, timelines, and resource requirements for achieving compliance.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">5</div>
                  <div>
                    <h4>Implementation Support</h4>
                    <p>Hands-on assistance with implementing compliance measures, policies, and procedures.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 mb-4">
                  <div class="section-number">6</div>
                  <div>
                    <h4>Ongoing Monitoring</h4>
                    <p>Continuous monitoring and regular assessments to ensure sustained compliance and adaptation to regulatory changes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Benefits of Professional Compliance Management</h2>
              <p class="text-large text-neutral-600">Why businesses choose our compliance services</p>
            </div>
            
            <div class="grid grid-2">
              <div class="card">
                <h4>✓ Risk Mitigation</h4>
                <p>Proactively identify and address compliance risks before they become costly problems or regulatory violations.</p>
              </div>
              
              <div class="card">
                <h4>✓ Cost Savings</h4>
                <p>Avoid expensive fines, penalties, and legal fees through proper compliance management and preparation.</p>
              </div>
              
              <div class="card">
                <h4>✓ Competitive Advantage</h4>
                <p>Demonstrate your commitment to compliance and build trust with customers, partners, and stakeholders.</p>
              </div>
              
              <div class="card">
                <h4>✓ Operational Efficiency</h4>
                <p>Streamline processes and eliminate redundancies while maintaining compliance requirements.</p>
              </div>
              
              <div class="card">
                <h4>✓ Peace of Mind</h4>
                <p>Focus on growing your business while we handle the complexities of regulatory compliance.</p>
              </div>
              
              <div class="card">
                <h4>✓ Expert Guidance</h4>
                <p>Access to experienced compliance professionals who stay current with regulatory changes and best practices.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h2 class="text-white">Ready to Strengthen Your Compliance Posture?</h2>
            <p class="text-large mb-4">Start with our comprehensive compliance assessment to identify opportunities and risks.</p>
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