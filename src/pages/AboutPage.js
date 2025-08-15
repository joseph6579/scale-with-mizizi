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
        <section class="section-large bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">About Apex Financial</h1>
            <p class="text-large">Trusted financial consultancy with a proven track record of excellence</p>
          </div>
        </section>

        <!-- Company Story -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="grid grid-2" style="align-items: center;">
              <div>
                <h2>Our Story</h2>
                <p class="text-large">Founded in 2015, Apex Financial Consultancy has grown from a boutique advisory firm to a leading provider of comprehensive financial solutions for businesses across industries.</p>
                <p>We recognized the growing complexity of financial regulations and the need for expert guidance in navigating compliance requirements while optimizing business performance. Our mission is to empower businesses with the knowledge, tools, and strategies they need to thrive in today's dynamic financial landscape.</p>
                <p>With over 500 successful client engagements and a 98% client satisfaction rate, we've established ourselves as the trusted partner for businesses seeking financial excellence.</p>
              </div>
              <div class="text-center">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Modern office building" style="width: 100%; max-width: 500px; border-radius: 16px; box-shadow: var(--shadow-xl);">
              </div>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Our Core Values</h2>
              <p class="text-large text-neutral-600">The principles that guide everything we do</p>
            </div>
            
            <div class="grid grid-3">
              <div class="card text-center">
                <div class="card-icon">🎯</div>
                <h3>Excellence</h3>
                <p>We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.</p>
              </div>
              
              <div class="card text-center">
                <div class="card-icon">🤝</div>
                <h3>Integrity</h3>
                <p>We operate with the highest ethical standards, ensuring transparency and trust in all our client relationships.</p>
              </div>
              
              <div class="card text-center">
                <div class="card-icon">💡</div>
                <h3>Innovation</h3>
                <p>We leverage cutting-edge technology and innovative approaches to solve complex financial challenges.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Team -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Leadership Team</h2>
              <p class="text-large text-neutral-600">Meet the experts behind our success</p>
            </div>
            
            <div class="grid grid-3">
              <div class="card text-center">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Sarah Johnson" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                <h4>Sarah Johnson</h4>
                <p class="text-primary font-weight-500">CEO & Founder</p>
                <p class="text-small">Former Big 4 partner with 20+ years in financial consulting. CPA, MBA from Wharton.</p>
              </div>
              
              <div class="card text-center">
                <img src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Michael Chen" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                <h4>Michael Chen</h4>
                <p class="text-primary font-weight-500">Chief Technology Officer</p>
                <p class="text-small">Technology leader specializing in financial systems and compliance automation. MS Computer Science, Stanford.</p>
              </div>
              
              <div class="card text-center">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Emily Rodriguez" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                <h4>Emily Rodriguez</h4>
                <p class="text-primary font-weight-500">Head of Compliance</p>
                <p class="text-small">Regulatory expert with extensive experience in SEC, FINRA, and international compliance frameworks.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats -->
        <section class="section bg-primary text-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2 class="text-white">Our Impact</h2>
              <p class="text-large">Numbers that speak to our success</p>
            </div>
            
            <div class="grid grid-4">
              <div class="text-center">
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">500+</div>
                <p>Successful Projects</p>
              </div>
              
              <div class="text-center">
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">98%</div>
                <p>Client Satisfaction</p>
              </div>
              
              <div class="text-center">
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">$2.5B</div>
                <p>Assets Under Advisory</p>
              </div>
              
              <div class="text-center">
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">15+</div>
                <p>Industry Sectors</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Certifications & Partnerships</h2>
              <p class="text-large text-neutral-600">Recognized expertise and trusted partnerships</p>
            </div>
            
            <div class="grid grid-4">
              <div class="card text-center">
                <div class="card-icon">🏆</div>
                <h4>CPA Certified</h4>
                <p class="text-small">All senior consultants are Certified Public Accountants</p>
              </div>
              
              <div class="card text-center">
                <div class="card-icon">🎓</div>
                <h4>MBA Qualified</h4>
                <p class="text-small">Advanced business education from top-tier institutions</p>
              </div>
              
              <div class="card text-center">
                <div class="card-icon">🔒</div>
                <h4>SOC 2 Compliant</h4>
                <p class="text-small">Highest standards for data security and privacy</p>
              </div>
              
              <div class="card text-center">
                <div class="card-icon">⭐</div>
                <h4>Industry Awards</h4>
                <p class="text-small">Recognized as "Best Financial Consultancy" 2023-2024</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="section bg-white">
          <div class="container text-center">
            <h2>Ready to Work with the Best?</h2>
            <p class="text-large mb-4">Join hundreds of satisfied clients who trust Apex Financial with their most important financial decisions.</p>
            <div class="flex justify-center gap-4" style="flex-wrap: wrap;">
              <a href="/assessment" class="btn btn-primary" data-link>Start Free Assessment</a>
              <a href="/contact" class="btn btn-outline" data-link>Schedule Consultation</a>
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