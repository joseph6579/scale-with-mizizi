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
        <section class="premium-hero">
          <div class="container">
            <div class="hero-content-premium">
              <div class="hero-badge-premium">
                <span class="badge-icon">🏆</span>
                <span>Premier Financial Excellence</span>
              </div>
              <h1 class="hero-title-premium">Transform Your Financial Future with Expert Guidance</h1>
              <p class="hero-subtitle-premium">Navigate complex financial landscapes with confidence. Our expert consultants provide strategic guidance, compliance assessments, and tailored solutions that drive measurable business success.</p>
              
              <div class="hero-stats-premium">
                <div class="stat-item-premium">
                  <div class="stat-number-premium">500+</div>
                  <div class="stat-label-premium">Successful Projects</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">$2.5B+</div>
                  <div class="stat-label-premium">Assets Optimized</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">98%</div>
                  <div class="stat-label-premium">Client Satisfaction</div>
                </div>
              </div>
              
              <div class="hero-cta-premium">
                <a href="/assessment" class="btn-premium btn-primary-premium" data-link>
                  <span>Start Free Assessment</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="/services" class="btn-premium btn-outline-premium" data-link>
                  <span>Explore Services</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Overview -->
        <section class="services-overview-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Our Expertise</span>
              </div>
              <h2>Comprehensive Financial Solutions</h2>
              <p class="section-subtitle-premium">We provide end-to-end financial consultancy services tailored to your unique business needs and growth objectives</p>
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
                <h3>Compliance Assessment</h3>
                <p>Comprehensive evaluation of your business compliance with government regulations and industry standards, ensuring full regulatory adherence.</p>
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
                    <span>Risk assessment & mitigation</span>
                  </div>
                  <div class="feature-item-premium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Implementation roadmap</span>
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
                <h3>Strategic Planning</h3>
                <p>Data-driven financial strategies to optimize your business performance and achieve sustainable long-term growth.</p>
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
                <p>Identify, assess, and mitigate financial risks to protect your business and ensure sustainable growth in volatile markets.</p>
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
                    <span>Mitigation strategies</span>
                  </div>
                </div>
                <a href="/services" class="service-cta-premium" data-link>
                  <span>Explore Services</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="why-choose-premium">
          <div class="container">
            <div class="why-choose-grid-premium">
              <div class="why-choose-content-premium">
                <div class="section-badge-premium">
                  <span>Why Choose Us</span>
                </div>
                <h2>Leading Businesses Trust Apex Financial</h2>
                <p class="why-choose-description-premium">We don't just provide advice—we architect financial transformations. Our strategic approach combines deep industry expertise with cutting-edge analytics to deliver measurable outcomes.</p>
                
                <div class="value-points-premium">
                  <div class="value-point-premium">
                    <div class="value-point-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content-premium">
                      <h4>Expert Team</h4>
                      <p>Certified financial professionals with decades of combined experience in regulatory compliance and strategic planning.</p>
                    </div>
                  </div>
                  
                  <div class="value-point-premium">
                    <div class="value-point-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content-premium">
                      <h4>Proven Results</h4>
                      <p>Track record of helping businesses achieve 100% compliance while optimizing their financial performance.</p>
                    </div>
                  </div>
                  
                  <div class="value-point-premium">
                    <div class="value-point-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content-premium">
                      <h4>Tailored Solutions</h4>
                      <p>Customized approaches that align with your specific industry requirements and business objectives.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="why-choose-visual-premium">
                <div class="visual-card-premium">
                  <div class="visual-header-premium">
                    <h4>Client Success Metrics</h4>
                    <div class="visual-status-premium">
                      <div class="status-dot-premium"></div>
                      <span>Live Data</span>
                    </div>
                  </div>
                  <div class="visual-metrics-premium">
                    <div class="metric-row-premium">
                      <span class="metric-label-premium">Compliance Rate</span>
                      <div class="metric-bar-premium">
                        <div class="metric-fill-premium" style="width: 100%"></div>
                      </div>
                      <span class="metric-value-premium">100%</span>
                    </div>
                    <div class="metric-row-premium">
                      <span class="metric-label-premium">Client Retention</span>
                      <div class="metric-bar-premium">
                        <div class="metric-fill-premium" style="width: 98%"></div>
                      </div>
                      <span class="metric-value-premium">98%</span>
                    </div>
                    <div class="metric-row-premium">
                      <span class="metric-label-premium">ROI Improvement</span>
                      <div class="metric-bar-premium">
                        <div class="metric-fill-premium" style="width: 85%"></div>
                      </div>
                      <span class="metric-value-premium">+85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Client Success Story -->
        <section class="client-success-premium">
          <div class="container">
            <div class="success-story-card-premium">
              <div class="success-story-content-premium">
                <div class="section-badge-premium">
                  <span>Client Success</span>
                </div>
                <h2>Fortune 500 Transformation</h2>
                <p class="success-story-description-premium">A leading technology company was struggling with complex regulatory requirements across multiple jurisdictions. Our comprehensive approach delivered exceptional results within 6 months.</p>
                
                <div class="success-metrics-premium">
                  <div class="success-metric-premium">
                    <div class="metric-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="metric-details-premium">
                      <div class="metric-number-premium">100%</div>
                      <div class="metric-label-premium">Compliance Achievement</div>
                    </div>
                  </div>
                  
                  <div class="success-metric-premium">
                    <div class="metric-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="metric-details-premium">
                      <div class="metric-number-premium">$3.2M</div>
                      <div class="metric-label-premium">Cost Savings</div>
                    </div>
                  </div>
                  
                  <div class="success-metric-premium">
                    <div class="metric-icon-premium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="metric-details-premium">
                      <div class="metric-number-premium">6 Months</div>
                      <div class="metric-label-premium">Implementation Time</div>
                    </div>
                  </div>
                </div>
                
                <div class="success-quote-premium">
                  <blockquote>"Apex Financial transformed our entire compliance framework. Their expertise and strategic approach exceeded all expectations."</blockquote>
                  <div class="quote-author-premium">
                    <div class="author-info-premium">
                      <div class="author-name-premium">Michael Chen</div>
                      <div class="author-title-premium">CFO, TechCorp Global</div>
                    </div>
                  </div>
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
                <h2>Ready to Transform Your Financial Strategy?</h2>
                <p>Join hundreds of successful businesses that trust Apex Financial with their most important financial decisions and regulatory compliance needs.</p>
              </div>
              
              <div class="cta-options-premium">
                <div class="cta-option-premium primary-premium">
                  <div class="cta-option-header-premium">
                    <h4>Free Assessment</h4>
                    <div class="cta-option-badge-premium">Recommended</div>
                  </div>
                  <p>Comprehensive evaluation of your current compliance status and financial position with detailed recommendations.</p>
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
                  <p>Direct consultation with our senior financial experts to discuss your specific challenges and opportunities.</p>
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