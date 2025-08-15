import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class AboutPage {
  constructor() {
    this.name = 'AboutPage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="about-hero-premium">
          <div class="container">
            <div class="about-hero-content-premium">
              <div class="hero-badge-premium">
                <span class="badge-icon">🏢</span>
                <span>About Apex Financial</span>
              </div>
              <h1 class="about-hero-title-premium">Trusted Financial Excellence Since 2015</h1>
              <p class="about-hero-subtitle-premium">We've grown from a boutique advisory firm to a leading provider of comprehensive financial solutions, helping businesses navigate complex regulatory landscapes while optimizing performance.</p>
              
              <div class="about-hero-stats-premium">
                <div class="stat-item-premium">
                  <div class="stat-number-premium">10+</div>
                  <div class="stat-label-premium">Years Experience</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">500+</div>
                  <div class="stat-label-premium">Client Success Stories</div>
                </div>
                <div class="stat-divider-premium"></div>
                <div class="stat-item-premium">
                  <div class="stat-number-premium">15+</div>
                  <div class="stat-label-premium">Industry Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Company Story -->
        <section class="company-story-premium">
          <div class="container">
            <div class="story-grid-premium">
              <div class="story-content-premium">
                <div class="section-badge-premium">
                  <span>Our Journey</span>
                </div>
                <h2>Building Financial Excellence</h2>
                <p class="story-description-premium">Founded in 2015, Apex Financial Consultancy emerged from a vision to bridge the gap between complex financial regulations and practical business solutions.</p>
                
                <div class="story-points-premium">
                  <div class="story-point-premium">
                    <div class="story-year-premium">2015</div>
                    <div class="story-point-content-premium">
                      <h4>Foundation</h4>
                      <p>Started as a boutique consultancy with a focus on compliance and strategic planning</p>
                    </div>
                  </div>
                  
                  <div class="story-point-premium">
                    <div class="story-year-premium">2018</div>
                    <div class="story-point-content-premium">
                      <h4>Expansion</h4>
                      <p>Expanded services to include risk management and business advisory solutions</p>
                    </div>
                  </div>
                  
                  <div class="story-point-premium">
                    <div class="story-year-premium">2021</div>
                    <div class="story-point-content-premium">
                      <h4>Innovation</h4>
                      <p>Launched advanced analytics and automated compliance monitoring systems</p>
                    </div>
                  </div>
                  
                  <div class="story-point-premium">
                    <div class="story-year-premium">2025</div>
                    <div class="story-point-content-premium">
                      <h4>Leadership</h4>
                      <p>Recognized as a leading financial consultancy with $2.5B+ in assets under advisory</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="story-visual-premium">
                <div class="visual-card-premium">
                  <div class="visual-header-premium">
                    <h4>Growth Trajectory</h4>
                    <div class="visual-status-premium">
                      <div class="status-dot-premium"></div>
                      <span>10-Year Journey</span>
                    </div>
                  </div>
                  <div class="growth-chart-premium">
                    <div class="chart-bars-premium">
                      <div class="chart-bar-premium">
                        <div class="bar-fill-premium" style="height: 20%"></div>
                        <div class="bar-label-premium">2015</div>
                      </div>
                      <div class="chart-bar-premium">
                        <div class="bar-fill-premium" style="height: 40%"></div>
                        <div class="bar-label-premium">2018</div>
                      </div>
                      <div class="chart-bar-premium">
                        <div class="bar-fill-premium" style="height: 70%"></div>
                        <div class="bar-label-premium">2021</div>
                      </div>
                      <div class="chart-bar-premium">
                        <div class="bar-fill-premium" style="height: 100%"></div>
                        <div class="bar-label-premium">2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="values-section-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Our Values</span>
              </div>
              <h2>The Principles That Guide Us</h2>
              <p class="section-subtitle-premium">Our core values shape every interaction, decision, and solution we provide to our clients</p>
            </div>
            
            <div class="values-grid-premium">
              <div class="value-card-premium">
                <div class="value-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality in every engagement.</p>
              </div>
              
              <div class="value-card-premium">
                <div class="value-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21L12 19L16 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>We operate with the highest ethical standards, ensuring transparency and trust in all our client relationships and business practices.</p>
              </div>
              
              <div class="value-card-premium">
                <div class="value-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>We leverage cutting-edge technology and innovative approaches to solve complex financial challenges and drive business success.</p>
              </div>
              
              <div class="value-card-premium">
                <div class="value-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V13H7V21M7 13L17 13L12 8L7 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3>Partnership</h3>
                <p>We build long-term partnerships with our clients, working collaboratively to achieve sustainable growth and success.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Team -->
        <section class="team-section-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Leadership Team</span>
              </div>
              <h2>Meet Our Expert Leaders</h2>
              <p class="section-subtitle-premium">Seasoned professionals with decades of combined experience in financial consulting and strategic planning</p>
            </div>
            
            <div class="team-grid-premium">
              <div class="team-member-premium">
                <div class="member-image-premium">
                  <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sarah Johnson">
                </div>
                <div class="member-info-premium">
                  <h4>Sarah Johnson</h4>
                  <p class="member-title-premium">CEO & Founder</p>
                  <p class="member-description-premium">Former Big 4 partner with 20+ years in financial consulting. CPA, MBA from Wharton. Specializes in regulatory compliance and strategic planning.</p>
                  <div class="member-credentials-premium">
                    <span class="credential-premium">CPA</span>
                    <span class="credential-premium">MBA</span>
                    <span class="credential-premium">20+ Years</span>
                  </div>
                </div>
              </div>
              
              <div class="team-member-premium">
                <div class="member-image-premium">
                  <img src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Michael Chen">
                </div>
                <div class="member-info-premium">
                  <h4>Michael Chen</h4>
                  <p class="member-title-premium">Chief Technology Officer</p>
                  <p class="member-description-premium">Technology leader specializing in financial systems and compliance automation. MS Computer Science from Stanford, former fintech executive.</p>
                  <div class="member-credentials-premium">
                    <span class="credential-premium">MS CS</span>
                    <span class="credential-premium">Fintech</span>
                    <span class="credential-premium">15+ Years</span>
                  </div>
                </div>
              </div>
              
              <div class="team-member-premium">
                <div class="member-image-premium">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Emily Rodriguez">
                </div>
                <div class="member-info-premium">
                  <h4>Emily Rodriguez</h4>
                  <p class="member-title-premium">Head of Compliance</p>
                  <p class="member-description-premium">Regulatory expert with extensive experience in SEC, FINRA, and international compliance frameworks. JD from Harvard Law School.</p>
                  <div class="member-credentials-premium">
                    <span class="credential-premium">JD</span>
                    <span class="credential-premium">SEC</span>
                    <span class="credential-premium">18+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section class="certifications-section-premium">
          <div class="container">
            <div class="section-header-premium">
              <div class="section-badge-premium">
                <span>Credentials</span>
              </div>
              <h2>Certifications & Recognition</h2>
              <p class="section-subtitle-premium">Our expertise is validated by industry-leading certifications and prestigious awards</p>
            </div>
            
            <div class="certifications-grid-premium">
              <div class="certification-card-premium">
                <div class="cert-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>CPA Certified</h4>
                <p>All senior consultants are Certified Public Accountants with active licenses</p>
              </div>
              
              <div class="certification-card-premium">
                <div class="cert-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12H20C20.5304 12 21.0391 11.7893 21.4142 11.4142C21.7893 11.0391 22 10.5304 22 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>MBA Qualified</h4>
                <p>Advanced business education from top-tier institutions including Wharton and Stanford</p>
              </div>
              
              <div class="certification-card-premium">
                <div class="cert-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>SOC 2 Compliant</h4>
                <p>Highest standards for data security, privacy, and operational excellence</p>
              </div>
              
              <div class="certification-card-premium">
                <div class="cert-icon-premium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>Industry Awards</h4>
                <p>Recognized as "Best Financial Consultancy" by Financial Services Review 2023-2024</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="cta-section-premium">
          <div class="container">
            <div class="cta-content-premium">
              <div class="cta-header-premium">
                <h2>Ready to Work with the Best?</h2>
                <p>Join hundreds of satisfied clients who trust Apex Financial with their most important financial decisions and regulatory compliance needs.</p>
              </div>
              
              <div class="cta-options-premium">
                <div class="cta-option-premium primary-premium">
                  <div class="cta-option-header-premium">
                    <h4>Free Assessment</h4>
                    <div class="cta-option-badge-premium">Start Here</div>
                  </div>
                  <p>Comprehensive evaluation of your current financial position and compliance status.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ Detailed analysis report</div>
                    <div class="cta-feature-premium">✓ Risk assessment</div>
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
                  <p>Direct consultation with our leadership team to discuss your specific needs and objectives.</p>
                  <div class="cta-features-premium">
                    <div class="cta-feature-premium">✓ 60-minute consultation</div>
                    <div class="cta-feature-premium">✓ Strategic guidance</div>
                    <div class="cta-feature-premium">✓ Custom solutions</div>
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