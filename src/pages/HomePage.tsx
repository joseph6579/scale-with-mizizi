import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-primary-800/90"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="hero-badge mb-8 animate-fade-in">
              <span className="text-2xl">🏆</span>
              <span>Premier Financial Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-up">
              Transform Your Financial Future with Expert Guidance
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto animate-slide-up">
              Navigate complex financial landscapes with confidence. Our expert consultants provide strategic guidance, compliance assessments, and tailored solutions that drive measurable business success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">500+</div>
                <div className="text-white/80">Successful Projects</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">$2.5B+</div>
                <div className="text-white/80">Assets Optimized</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/assessment" className="btn btn-primary text-lg px-8 py-4">
                <span>Start Free Assessment</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/services" className="btn btn-outline-white text-lg px-8 py-4">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide end-to-end financial consultancy services tailored to your unique business needs and growth objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Compliance Assessment</h3>
              <p className="text-neutral-600 mb-6">
                Comprehensive evaluation of your business compliance with government regulations and industry standards, ensuring full regulatory adherence.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Regulatory compliance review</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Risk assessment & mitigation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Implementation roadmap</span>
                </div>
              </div>
              <Link to="/assessment" className="btn btn-primary w-full group-hover:shadow-lg">
                <span>Start Assessment</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>

            <div className="card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Planning</h3>
              <p className="text-neutral-600 mb-6">
                Data-driven financial strategies to optimize your business performance and achieve sustainable long-term growth.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Financial forecasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Growth strategy development</span>
                </div>
              </div>
              <Link to="/strategic-planning" className="btn btn-outline w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>

            <div className="card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Risk Management</h3>
              <p className="text-neutral-600 mb-6">
                Identify, assess, and mitigate financial risks to protect your business and ensure sustainable growth in volatile markets.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Risk identification & analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                    <path d="M13.5 4.5L6 12L2.5 8.5"/>
                  </svg>
                  <span className="text-sm">Mitigation strategies</span>
                </div>
              </div>
              <Link to="/services" className="btn btn-outline w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                <span>Explore Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-6">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Leading Businesses Trust Scale With Mizizi</h2>
              <p className="text-xl text-neutral-600 mb-8">
                We don't just provide advice—we architect financial transformations. Based in the heart of East Africa's financial hub, our strategic approach combines deep regional expertise with global best practices to deliver measurable outcomes for businesses across Kenya and beyond.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                    <p className="text-neutral-600">Certified financial professionals with decades of combined experience in regulatory compliance and strategic planning.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                    <p className="text-neutral-600">Track record of helping businesses achieve 100% compliance while optimizing their financial performance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Tailored Solutions</h4>
                    <p className="text-neutral-600">Customized approaches that align with your specific industry requirements and business objectives.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Client Success Metrics</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-neutral-600">Live Data</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Compliance Rate</span>
                    <span className="text-sm font-bold">100%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Client Retention</span>
                    <span className="text-sm font-bold">98%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">ROI Improvement</span>
                    <span className="text-sm font-bold">+85%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Story */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="card max-w-6xl mx-auto">
            <div className="section-badge mb-6">
              <span>Client Success</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Fortune 500 Transformation</h2>
            <p className="text-xl text-neutral-600 mb-12">
              A leading technology company was struggling with complex regulatory requirements across multiple jurisdictions. Our comprehensive approach delivered exceptional results within 6 months.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-neutral-600">Compliance Achievement</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 12H18L15 21L9 3L6 12H2"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-accent-600 mb-2">$3.2M</div>
                <div className="text-neutral-600">Cost Savings</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">6 Months</div>
                <div className="text-neutral-600">Implementation Time</div>
              </div>
            </div>
            
            <blockquote className="text-2xl italic text-center text-neutral-700 mb-8">
              "Scale With Mizizi transformed our entire compliance framework. Their deep understanding of both local and international requirements exceeded all expectations."
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-lg">Sarah Wanjiku</div>
              <div className="text-neutral-600">CFO, East Africa Logistics Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Strategy?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join hundreds of successful businesses across East Africa that trust Scale With Mizizi with their most important financial decisions and regulatory compliance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">Free Assessment</h4>
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
              <p className="text-white/90 mb-6">
                Comprehensive evaluation of your current compliance status and financial position with detailed recommendations.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Detailed compliance report</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Risk assessment analysis</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Priority recommendations</span>
                </div>
              </div>
              <Link to="/assessment" className="btn bg-white text-primary-600 hover:bg-neutral-100 w-full">
                <span>Start Assessment</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-4">Schedule Consultation</h4>
              <p className="text-white/90 mb-6">
                Direct consultation with our senior financial experts to discuss your specific challenges and opportunities.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>60-minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Personalized strategy</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Implementation roadmap</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-outline-white w-full">
                <span>Contact Us</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage