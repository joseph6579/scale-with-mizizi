import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class StrategicPlanningPage {
  constructor() {
    this.name = 'StrategicPlanningPage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="strategic-hero">
          <div class="container">
            <div class="strategic-hero-content">
              <div class="hero-badge">
                <span class="badge-icon">📊</span>
                <span>Strategic Excellence</span>
              </div>
              <h1 class="strategic-hero-title">Transform Your Financial Future</h1>
              <p class="strategic-hero-subtitle">Data-driven strategies that turn financial complexity into competitive advantage</p>
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-number">$2.5B+</div>
                  <div class="stat-label">Assets Optimized</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">35%</div>
                  <div class="stat-label">Avg. ROI Improvement</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Success Stories</div>
                </div>
              </div>
              <div class="hero-cta-group">
                <a href="/contact" class="btn-modern btn-primary" data-link>
                  <span>Schedule Strategy Session</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="/assessment" class="btn-modern btn-outline-white" data-link>
                  <span>Start Assessment</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Value Proposition -->
        <section class="value-prop-section">
          <div class="container">
            <div class="value-prop-grid">
              <div class="value-prop-content">
                <div class="section-badge">
                  <span>Why Choose Us</span>
                </div>
                <h2>Strategic Planning That Delivers Results</h2>
                <p class="value-prop-text">We don't just create plans—we architect financial transformations. Our strategic planning combines deep industry expertise with cutting-edge analytics to deliver measurable outcomes.</p>
                
                <div class="value-points">
                  <div class="value-point">
                    <div class="value-point-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content">
                      <h4>Proven Methodology</h4>
                      <p>Our 6-phase strategic framework has delivered consistent results across 500+ engagements</p>
                    </div>
                  </div>
                  
                  <div class="value-point">
                    <div class="value-point-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content">
                      <h4>Rapid Implementation</h4>
                      <p>See measurable improvements within 90 days of strategy deployment</p>
                    </div>
                  </div>
                  
                  <div class="value-point">
                    <div class="value-point-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="value-point-content">
                      <h4>Expert Team</h4>
                      <p>Former Big 4 partners and Fortune 500 CFOs leading your strategic initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="value-prop-visual">
                <div class="visual-card">
                  <div class="visual-header">
                    <h4>Strategic Impact Dashboard</h4>
                    <div class="visual-status">
                      <div class="status-dot"></div>
                      <span>Live Data</span>
                    </div>
                  </div>
                  <div class="visual-metrics">
                    <div class="metric-row">
                      <span class="metric-label">Revenue Growth</span>
                      <div class="metric-bar">
                        <div class="metric-fill" style="width: 78%"></div>
                      </div>
                      <span class="metric-value">+78%</span>
                    </div>
                    <div class="metric-row">
                      <span class="metric-label">Cost Optimization</span>
                      <div class="metric-bar">
                        <div class="metric-fill" style="width: 65%"></div>
                      </div>
                      <span class="metric-value">+65%</span>
                    </div>
                    <div class="metric-row">
                      <span class="metric-label">ROI Improvement</span>
                      <div class="metric-bar">
                        <div class="metric-fill" style="width: 92%"></div>
                      </div>
                      <span class="metric-value">+92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Services Grid -->
        <section class="services-showcase">
          <div class="container">
            <div class="section-header-center">
              <div class="section-badge">
                <span>Our Expertise</span>
              </div>
              <h2>Comprehensive Strategic Solutions</h2>
              <p class="section-subtitle">From financial modeling to growth strategy, we provide end-to-end strategic planning services</p>
            </div>
            
            <div class="services-grid-modern">
              <div class="service-card-modern featured">
                <div class="service-card-header">
                  <div class="service-icon-modern">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="service-badge">Most Popular</div>
                </div>
                <h3>Financial Forecasting & Modeling</h3>
                <p>Advanced predictive models that provide crystal-clear insights into your financial future</p>
                <div class="service-features">
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Multi-scenario analysis</span>
                  </div>
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Monte Carlo simulations</span>
                  </div>
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Real-time dashboards</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta" data-link>
                  <span>Get Started</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-modern">
                <div class="service-card-header">
                  <div class="service-icon-modern">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Cash Flow Optimization</h3>
                <p>Maximize liquidity and working capital efficiency through strategic cash management</p>
                <div class="service-features">
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Working capital analysis</span>
                  </div>
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Payment optimization</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta" data-link>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-modern">
                <div class="service-card-header">
                  <div class="service-icon-modern">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Investment Strategy</h3>
                <p>Strategic capital allocation and portfolio optimization for maximum returns</p>
                <div class="service-features">
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Portfolio optimization</span>
                  </div>
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Risk-adjusted returns</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta" data-link>
                  <span>Explore</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <div class="service-card-modern">
                <div class="service-card-header">
                  <div class="service-icon-modern">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3>Growth Strategy</h3>
                <p>Scalable financial frameworks that support sustainable business expansion</p>
                <div class="service-features">
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Market expansion planning</span>
                  </div>
                  <div class="feature-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>M&A financial analysis</span>
                  </div>
                </div>
                <a href="/contact" class="service-cta" data-link>
                  <span>Discuss</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Process Timeline -->
        <section class="process-timeline-section">
          <div class="container">
            <div class="section-header-center">
              <div class="section-badge">
                <span>Our Process</span>
              </div>
              <h2>Strategic Planning Methodology</h2>
              <p class="section-subtitle">A proven 6-phase approach that transforms financial complexity into strategic clarity</p>
            </div>
            
            <div class="timeline-container">
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">1</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Discovery & Analysis</div>
                  <h4>Strategic Assessment</h4>
                  <p>Comprehensive evaluation of your current financial position, market dynamics, and competitive landscape</p>
                  <div class="timeline-duration">Week 1-2</div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">2</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Data Intelligence</div>
                  <h4>Advanced Analytics</h4>
                  <p>Deep-dive analysis using proprietary models and industry benchmarks to identify opportunities</p>
                  <div class="timeline-duration">Week 2-3</div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">3</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Strategy Design</div>
                  <h4>Custom Framework</h4>
                  <p>Development of tailored strategic framework aligned with your business objectives and risk profile</p>
                  <div class="timeline-duration">Week 3-4</div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">4</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Financial Modeling</div>
                  <h4>Predictive Models</h4>
                  <p>Creation of sophisticated financial models with scenario planning and sensitivity analysis</p>
                  <div class="timeline-duration">Week 4-5</div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">5</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Implementation</div>
                  <h4>Execution Roadmap</h4>
                  <p>Detailed implementation plan with milestones, KPIs, and resource allocation strategies</p>
                  <div class="timeline-duration">Week 5-6</div>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="timeline-number">6</div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-phase">Optimization</div>
                  <h4>Continuous Monitoring</h4>
                  <p>Ongoing performance tracking and strategy refinement to ensure sustained success</p>
                  <div class="timeline-duration">Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Story -->
        <section class="success-story-section">
          <div class="container">
            <div class="success-story-card">
              <div class="success-story-content">
                <div class="section-badge">
                  <span>Success Story</span>
                </div>
                <h2>Manufacturing Giant Transformation</h2>
                <p class="success-story-description">A Fortune 500 manufacturing company was facing declining margins and cash flow challenges despite growing revenues. Our strategic intervention delivered remarkable results.</p>
                
                <div class="success-metrics">
                  <div class="success-metric">
                    <div class="metric-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div class="metric-details">
                      <div class="metric-number">35%</div>
                      <div class="metric-label">Cash Flow Improvement</div>
                    </div>
                  </div>
                  
                  <div class="success-metric">
                    <div class="metric-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="metric-details">
                      <div class="metric-number">22%</div>
                      <div class="metric-label">Profit Margin Increase</div>
                    </div>
                  </div>
                  
                  <div class="success-metric">
                    <div class="metric-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="metric-details">
                      <div class="metric-number">$2.1M</div>
                      <div class="metric-label">Additional Annual Profit</div>
                    </div>
                  </div>
                </div>
                
                <div class="success-quote">
                  <blockquote>"Apex Financial's strategic planning transformed our entire financial operation. The results exceeded our most optimistic projections."</blockquote>
                  <div class="quote-author">
                    <div class="author-info">
                      <div class="author-name">Sarah Mitchell</div>
                      <div class="author-title">CFO, Global Manufacturing Corp</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="success-story-visual">
                <div class="chart-container">
                  <div class="chart-header">
                    <h4>Performance Transformation</h4>
                    <div class="chart-period">18-Month Period</div>
                  </div>
                  <div class="chart-visual">
                    <div class="chart-bars">
                      <div class="chart-bar">
                        <div class="bar-fill before" style="height: 40%"></div>
                        <div class="bar-label">Before</div>
                      </div>
                      <div class="chart-bar">
                        <div class="bar-fill after" style="height: 85%"></div>
                        <div class="bar-label">After</div>
                      </div>
                    </div>
                    <div class="chart-improvement">
                      <div class="improvement-arrow">↗</div>
                      <div class="improvement-text">112% Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section-modern">
          <div class="container">
            <div class="cta-content-modern">
              <div class="cta-header">
                <h2>Ready to Transform Your Financial Strategy?</h2>
                <p>Join the ranks of successful businesses that have revolutionized their financial performance with our strategic planning expertise.</p>
              </div>
              
              <div class="cta-options">
                <div class="cta-option primary">
                  <div class="cta-option-header">
                    <h4>Strategy Session</h4>
                    <div class="cta-option-badge">Recommended</div>
                  </div>
                  <p>60-minute consultation with our senior strategists to discuss your specific challenges and opportunities.</p>
                  <div class="cta-features">
                    <div class="cta-feature">✓ Personalized analysis</div>
                    <div class="cta-feature">✓ Strategic recommendations</div>
                    <div class="cta-feature">✓ Implementation roadmap</div>
                  </div>
                  <a href="/contact" class="btn-modern btn-primary" data-link>
                    <span>Schedule Now</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
                
                <div class="cta-option secondary">
                  <div class="cta-option-header">
                    <h4>Free Assessment</h4>
                  </div>
                  <p>Comprehensive evaluation of your current financial position and strategic readiness.</p>
                  <div class="cta-features">
                    <div class="cta-feature">✓ Detailed report</div>
                    <div class="cta-feature">✓ Gap analysis</div>
                    <div class="cta-feature">✓ Priority recommendations</div>
                  </div>
                  <a href="/assessment" class="btn-modern btn-outline" data-link>
                    <span>Start Assessment</span>
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