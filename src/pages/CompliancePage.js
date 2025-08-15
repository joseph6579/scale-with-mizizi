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
        <section class="compliance-hero-premium">
          <div class="container">
            <div class="compliance-hero-content-premium">
              <div class="hero-badge-premium">
                <span class="badge-icon">🛡️</span>
                <span>Compliance Excellence</span>
              </div>
              <h1 class="compliance-hero-title-premium">Stay Ahead of Regulatory Requirements</h1>
              <p class="compliance-hero-subtitle-premium">Comprehensive compliance solutions to keep your business protected, compliant, and competitive in today's complex regulatory environment.</p>
              
              <div class="compliance-hero-stats-premium">
                <div class="stat-item-premium">
                  <div class="stat-number-premium">100%</div>
                  <div class="stat-label-premium">Compliance Rate</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">25+</div>
                  <div class="stat-label-premium">Regulatory Frameworks</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">$50M+</div>
                  <div class="stat-label-premium">Penalties Avoided</div>
                </div>
              </div>
              
              <div class="hero-cta-premium">
                <a href="/assessment" class="btn-premium btn-primary-premium" data-link>
                  <span>Start Compliance Assessment</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="/contact" class="btn-premium btn-outline-premium" data-link>
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Overview -->
        <section class="compliance-overview-premium">
          <div class="container">
            <div class="overview-grid-premium">
              <div class="overview-content-premium">
                <div class="section-badge-premium">
                  <span>Why Compliance Matters</span>
                </div>
                <h2>Navigate Complex Regulatory Landscapes</h2>
                <p class="overview-description-premium">In today's complex regulatory environment, compliance isn't just about avoiding penalties—it's about building trust, protecting your reputation, and creating competitive advantages.</p>
                
                <div class="compliance-benefits-premium">
                  <div class="benefit-item-premium">
                    <div class="benefit-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="benefit-content-premium">
                      <h4>Risk Protection</h4>
                      <p>Proactively identify and mitigate compliance risks before they become costly problems</p>
                    </div>
                  </div>
                  
                  <div class="benefit-item-premium">
                    <div class="benefit-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="benefit-content-premium">
                      <h4>Competitive Advantage</h4>
                      <p>Demonstrate commitment to compliance and build trust with stakeholders</p>
                    </div>
                  </div>
                  
                  <div class="benefit-item-premium">
                    <div class="benefit-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="benefit-content-premium">
                      <h4>Operational Efficiency</h4>
                      <p>Streamline processes while maintaining regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="overview-visual-premium">
                <div class="visual-card-premium">
                  <div class="visual-header-premium">
                    <h4>Compliance Dashboard</h4>
                    <div class="visual-status-premium">
                      <div class="status-dot-premium"></div>
                      <span>Real-time Monitoring</span>
                    </div>
                  </div>
                  <div class="compliance-metrics-premium">
                    <div class="metric-item-premium">
                      <div class="metric-label-premium">SOX Compliance</div>
                      <div class="metric-status-premium compliant-premium">✓ Compliant</div>
                    </div>
                    <div class="metric-item-premium">
                      <div class="metric-label-premium">GDPR Status</div>
                      <div class="metric-status-premium compliant-premium">✓ Compliant</div>
                    </div>
                    <div class="metric-item-premium">
                      <div class="metric-label-premium">SEC Regulations</div>
                      <div class="metric-status-premium compliant-premium">✓ Compliant</div>
                    </div>
                    <div class="metric-item-premium">
                      <div class="metric-label-premium">Risk Assessment</div>
                      <div class="metric-status-premium low-risk-premium">Low Risk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Key Regulations -->
        <section class="regulations-section-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Regulatory Expertise</span>
              </div>
              <h2>Key Regulatory Frameworks We Cover</h2>
              <p class="section-subtitle-premium">Expert guidance across major compliance requirements and industry-specific regulations</p>
            </div>
            
            <div class="regulations-grid-premium">
              <div class="regulation-card-premium featured-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="regulation-badge-premium">Most Critical</div>
                </div>
                <h3>Sarbanes-Oxley (SOX)</h3>
                <p>Comprehensive SOX compliance including internal controls, financial reporting accuracy, and audit requirements for public companies.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Section 302 & 404 compliance</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Internal control documentation</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Management assessment</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Audit preparation</span>
                  </div>
                </div>
              </div>
              
              <div class="regulation-card-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>GDPR & Data Privacy</h3>
                <p>Data protection compliance for businesses handling EU citizen data, including privacy policies and consent management.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Privacy impact assessments</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Consent management systems</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Data mapping & inventory</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Breach response procedures</span>
                  </div>
                </div>
              </div>
              
              <div class="regulation-card-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C15.74 3 15.04 3.16 14.38 3.46C13.75 2.22 12.49 1.34 11 1.34C9.51 1.34 8.25 2.22 7.62 3.46C6.96 3.16 6.26 3 5.5 3C4.04131 3 2.64236 3.57946 1.61091 4.61091C0.579463 5.64236 0 7.04131 0 8.5C0 10.79 1.51 12.54 3 14L12 22L19 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>HIPAA Compliance</h3>
                <p>Healthcare data protection compliance including administrative, physical, and technical safeguards.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Risk assessments</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Policy development</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Staff training programs</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Audit & monitoring</span>
                  </div>
                </div>
              </div>
              
              <div class="regulation-card-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 10H17M7 14H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>PCI DSS</h3>
                <p>Payment card industry compliance for businesses that process, store, or transmit credit card information.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Network security assessments</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Cardholder data protection</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Vulnerability management</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Regular monitoring & testing</span>
                  </div>
                </div>
              </div>
              
              <div class="regulation-card-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3>SEC Regulations</h3>
                <p>Securities and Exchange Commission compliance for investment advisers, broker-dealers, and public companies.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Investment adviser compliance</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Disclosure requirements</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Record keeping</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Examination preparation</span>
                  </div>
                </div>
              </div>
              
              <div class="regulation-card-premium">
                <div class="regulation-header-premium">
                  <div class="regulation-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Industry-Specific</h3>
                <p>Specialized compliance requirements for various industries including banking, insurance, and pharmaceuticals.</p>
                <div class="regulation-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>FINRA regulations</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>FDA compliance</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Environmental regulations</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Labor law compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Assessment Process -->
        <section class="assessment-process-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Our Process</span>
              </div>
              <h2>Comprehensive Assessment Methodology</h2>
              <p class="section-subtitle-premium">A systematic approach to evaluating and improving your compliance posture</p>
            </div>
            
            <div class="process-timeline-premium">
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">1</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Discovery</div>
                  <h4>Initial Assessment</h4>
                  <p>Comprehensive review of your business operations, industry requirements, and current compliance status.</p>
                  <div class="timeline-duration-premium">Week 1</div>
                </div>
              </div>
              
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">2</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Analysis</div>
                  <h4>Gap Analysis</h4>
                  <p>Detailed identification of compliance gaps, vulnerabilities, and areas requiring immediate attention.</p>
                  <div class="timeline-duration-premium">Week 2</div>
                </div>
              </div>
              
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">3</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Assessment</div>
                  <h4>Risk Evaluation</h4>
                  <p>Evaluation of potential risks, their likelihood, and potential impact on your business operations.</p>
                  <div class="timeline-duration-premium">Week 3</div>
                </div>
              </div>
              
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">4</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Planning</div>
                  <h4>Remediation Strategy</h4>
                  <p>Prioritized action plan with specific steps, timelines, and resource requirements for achieving compliance.</p>
                  <div class="timeline-duration-premium">Week 4</div>
                </div>
              </div>
              
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">5</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Implementation</div>
                  <h4>Execution Support</h4>
                  <p>Hands-on assistance with implementing compliance measures, policies, and procedures.</p>
                  <div class="timeline-duration-premium">Weeks 5-8</div>
                </div>
              </div>
              
              <div class="timeline-item-premium">
                <div class="timeline-marker-premium">
                  <div class="timeline-number-premium">6</div>
                </div>
                <div class="timeline-content-premium">
                  <div class="timeline-phase-premium">Monitoring</div>
                  <h4>Ongoing Oversight</h4>
                  <p>Continuous monitoring and regular assessments to ensure sustained compliance and adaptation to regulatory changes.</p>
                  <div class="timeline-duration-premium">Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section-premium">
          <div class="container">
            <div class="cta-content-premium">
              <div class="cta-header-premium">
                <h2>Ready to Strengthen Your Compliance Posture?</h2>
                <p>Start with our comprehensive compliance assessment to identify opportunities and risks in your current regulatory framework.</p>
              </div>
              
              <div class="cta-options-premium">
                <div class="cta-option-premium primary-premium">
                  <div class="cta-option-header-premium">
                    <h4>Free Compliance Assessment</h4>
                    <div class="cta-option-badge-premium">Start Here</div>
                  </div>
                  <p>Comprehensive evaluation of your current compliance status with detailed recommendations and priority actions.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ Detailed compliance report</div>
                    <div class="cta-feature-premium">✓ Risk assessment matrix</div>
                    <div class="cta-feature-premium">✓ Priority action plan</div>
                    <div class="cta-feature-premium">✓ Implementation roadmap</div>
                  </div>
                  <a href="/assessment" class="btn-premium btn-primary-premium" data-link>
                    <span>Start Assessment</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
                
                <div class="cta-option-premium secondary-premium">
                  <div class="cta-option-header-premium">
                    <h4>Expert Consultation</h4>
                  </div>
                  <p>Direct consultation with our compliance specialists to discuss your specific regulatory challenges and requirements.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ 60-minute consultation</div>
                    <div class="cta-feature-premium">✓ Regulatory guidance</div>
                    <div class="cta-feature-premium">✓ Custom solutions</div>
                    <div class="cta-feature-premium">✓ Implementation support</div>
                  </div>
                  <a href="/contact" class="btn-premium btn-outline-premium" data-link>
                    <span>Schedule Consultation</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
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