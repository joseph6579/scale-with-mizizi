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
        <section class="services-hero-premium">
          <div class="container">
            <div class="services-hero-content-premium">
              <div class="hero-badge-premium">
                <span class="badge-icon">💼</span>
                <span>Professional Services</span>
              </div>
              <h1 class="services-hero-title-premium">Comprehensive Financial Solutions</h1>
              <p class="services-hero-subtitle-premium">Expert consultancy services designed to drive your business forward with strategic financial planning, compliance management, and risk mitigation.</p>
              
              <div class="services-hero-stats-premium">
                <div class="stat-item-premium">
                  <div class="stat-number-premium">15+</div>
                  <div class="stat-label-premium">Countries Served</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">500+</div>
                  <div class="stat-label-premium">Projects Completed</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">100%</div>
                  <div class="stat-label-premium">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Grid -->
        <section class="services-showcase-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Our Expertise</span>
              </div>
              <h2>End-to-End Financial Services</h2>
              <p class="section-subtitle-premium">From compliance assessments to strategic planning, we provide comprehensive solutions tailored to your business needs</p>
            </div>
            
            <div class="services-grid-premium">
              <div class="service-card-premium featured-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="service-badge-premium">Most Popular</div>
                </div>
                <h3>Compliance Assessment & Audit</h3>
                <p>Thorough evaluation of your business compliance with federal, state, and industry-specific regulations. Our comprehensive assessment identifies gaps and provides actionable recommendations.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Regulatory compliance review</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Documentation audit</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Risk assessment</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Remediation planning</span>
                  </div>
                </div>
                <a href="/assessment" class="service-cta-premium" data-link>
                  <span>Start Assessment</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3>Strategic Financial Planning</h3>
                <p>Data-driven financial strategies tailored to your business goals. We help you optimize cash flow, plan for growth, and make informed investment decisions.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Financial forecasting</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Budget optimization</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Investment planning</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Growth strategy development</span>
                  </div>
                </div>
                <a href="/strategic-planning" class="service-cta-premium" data-link>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Risk Management</h3>
                <p>Comprehensive risk assessment and mitigation strategies to protect your business from financial uncertainties and regulatory changes.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Risk identification & analysis</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Mitigation strategy development</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Insurance optimization</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Contingency planning</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta-premium" data-link>
                  <span>Get Started</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 10H17M7 14H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Business Advisory</h3>
                <p>Expert guidance on complex financial decisions, mergers & acquisitions, restructuring, and business optimization initiatives.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>M&A advisory</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Business valuation</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Restructuring guidance</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Performance optimization</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta-premium" data-link>
                  <span>Schedule Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3>Financial Reporting & Analytics</h3>
                <p>Advanced financial reporting solutions and analytics to provide clear insights into your business performance and opportunities.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Custom reporting dashboards</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>KPI tracking & analysis</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Benchmarking studies</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Performance metrics</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta-premium" data-link>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-premium">
                <div class="service-card-header-premium">
                  <div class="service-icon-premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 6.253V10C12 10.2652 12.1054 10.5196 12.2929 10.7071C12.4804 10.8946 12.7348 11 13 11H16.747C16.5542 10.1928 16.1152 9.47314 15.4983 8.93C14.8814 8.38686 14.1217 8.05434 13.313 7.97L12 6.253ZM12 6.253C12 5.56 12.56 5 13.253 5H16.747C17.44 5 18 5.56 18 6.253V9.747C18 10.44 17.44 11 16.747 11H13.253C12.56 11 12 10.44 12 9.747V6.253Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 14H18M6 18H18M6 10H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Training & Education</h3>
                <p>Comprehensive training programs for your team on financial best practices, compliance requirements, and industry standards.</p>
                <div class="service-features-premium">
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Compliance training</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Financial literacy programs</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Best practices workshops</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Ongoing support</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta-premium" data-link>
                  <span>Inquire Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Process Section -->
        <section class="process-section-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Our Process</span>
              </div>
              <h2>Proven Methodology for Success</h2>
              <p class="section-subtitle-premium">A systematic approach to delivering exceptional results through our time-tested framework</p>
            </div>
            
            <div class="process-grid-premium">
              <div class="process-step-premium">
                <div class="process-number-premium">1</div>
                <div class="process-content-premium">
                  <h4>Discovery</h4>
                  <p>Comprehensive analysis of your current financial position and compliance status</p>
                </div>
              </div>
              
              <div class="process-step-premium">
                <div class="process-number-premium">2</div>
                <div class="process-content-premium">
                  <h4>Assessment</h4>
                  <p>Detailed evaluation using our proprietary assessment framework</p>
                </div>
              </div>
              
              <div class="process-step-premium">
                <div class="process-number-premium">3</div>
                <div class="process-content-premium">
                  <h4>Strategy</h4>
                  <p>Development of customized solutions and implementation roadmap</p>
                </div>
              </div>
              
              <div class="process-step-premium">
                <div class="process-number-premium">4</div>
                <div class="process-content-premium">
                  <h4>Implementation</h4>
                  <p>Guided execution with ongoing support and monitoring</p>
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
                <h2>Ready to Get Started?</h2>
                <p>Take the first step towards financial excellence with our comprehensive assessment and expert guidance.</p>
              </div>
              
              <div class="cta-options-premium">
                <div class="cta-option-premium primary-premium">
                  <div class="cta-option-header-premium">
                    <h4>Free Assessment</h4>
                    <div class="cta-option-badge-premium">Recommended</div>
                  </div>
                  <p>Comprehensive evaluation of your current compliance status and financial position.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ Detailed compliance report</div>
                    <div class="cta-feature-premium">✓ Risk assessment analysis</div>
                    <div class="cta-feature-premium">✓ Priority recommendations</div>
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
                    <h4>Schedule Consultation</h4>
                  </div>
                  <p>Direct consultation with our senior financial experts to discuss your specific needs.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ 60-minute consultation</div>
                    <div class="cta-feature-premium">✓ Personalized strategy</div>
                    <div class="cta-feature-premium">✓ Implementation roadmap</div>
                  </div>
                  <a href="/contact" class="btn-premium btn-outline-premium" data-link>
                    <span>Contact Us</span>
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