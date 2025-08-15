import React from 'react'
import { Link } from 'react-router-dom'

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'compliance',
      title: 'Compliance Assessment & Audit',
      description: 'Thorough evaluation of your business compliance with federal, state, and industry-specific regulations. Our comprehensive assessment identifies gaps and provides actionable recommendations.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
        </svg>
      ),
      features: [
        'Regulatory compliance review',
        'Documentation audit',
        'Risk assessment',
        'Remediation planning'
      ],
      badge: 'Most Popular',
      ctaText: 'Start Assessment',
      ctaLink: '/assessment'
    },
    {
      id: 'strategic',
      title: 'Strategic Financial Planning',
      description: 'Data-driven financial strategies tailored to your business goals. We help you optimize cash flow, plan for growth, and make informed investment decisions.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
        </svg>
      ),
      features: [
        'Financial forecasting',
        'Budget optimization',
        'Investment planning',
        'Growth strategy development'
      ],
      ctaText: 'Learn More',
      ctaLink: '/strategic-planning'
    },
    {
      id: 'risk',
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your business from financial uncertainties and regulatory changes.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      ),
      features: [
        'Risk identification & analysis',
        'Mitigation strategy development',
        'Insurance optimization',
        'Contingency planning'
      ],
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    {
      id: 'advisory',
      title: 'Business Advisory',
      description: 'Expert guidance on complex financial decisions, mergers & acquisitions, restructuring, and business optimization initiatives.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"/>
          <path d="M7 10H17M7 14H13"/>
        </svg>
      ),
      features: [
        'M&A advisory',
        'Business valuation',
        'Restructuring guidance',
        'Performance optimization'
      ],
      ctaText: 'Schedule Consultation',
      ctaLink: '/contact'
    },
    {
      id: 'reporting',
      title: 'Financial Reporting & Analytics',
      description: 'Advanced financial reporting solutions and analytics to provide clear insights into your business performance and opportunities.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
        </svg>
      ),
      features: [
        'Custom reporting dashboards',
        'KPI tracking & analysis',
        'Benchmarking studies',
        'Performance metrics'
      ],
      ctaText: 'Learn More',
      ctaLink: '/contact'
    },
    {
      id: 'training',
      title: 'Training & Education',
      description: 'Comprehensive training programs for your team on financial best practices, compliance requirements, and industry standards.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253V10C12 10.2652 12.1054 10.5196 12.2929 10.7071C12.4804 10.8946 12.7348 11 13 11H16.747C16.5542 10.1928 16.1152 9.47314 15.4983 8.93C14.8814 8.38686 14.1217 8.05434 13.313 7.97L12 6.253ZM12 6.253C12 5.56 12.56 5 13.253 5H16.747C17.44 5 18 5.56 18 6.253V9.747C18 10.44 17.44 11 16.747 11H13.253C12.56 11 12 10.44 12 9.747V6.253Z"/>
          <path d="M6 14H18M6 18H18M6 10H10"/>
        </svg>
      ),
      features: [
        'Compliance training',
        'Financial literacy programs',
        'Best practices workshops',
        'Ongoing support'
      ],
      ctaText: 'Inquire Now',
      ctaLink: '/contact'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'Comprehensive analysis of your current financial position and compliance status'
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Detailed evaluation using our proprietary assessment framework'
    },
    {
      number: 3,
      title: 'Strategy',
      description: 'Development of customized solutions and implementation roadmap'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Guided execution with ongoing support and monitoring'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="hero-badge mb-8">
              <span className="text-2xl">💼</span>
              <span>Professional Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Comprehensive Financial Solutions
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Expert consultancy services designed to drive your business forward with strategic financial planning, compliance management, and risk mitigation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">15+</div>
                <div className="text-white/80">Countries Served</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">500+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">100%</div>
                <div className="text-white/80">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Financial Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From compliance assessments to strategic planning, we provide comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`card group hover:scale-105 transition-transform duration-300 relative overflow-hidden ${service.badge ? 'ring-2 ring-accent-500' : ''}`}>
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.badge}
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600 flex-shrink-0">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={service.ctaLink} className="btn btn-primary w-full group-hover:shadow-lg">
                  <span>{service.ctaText}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 12L10 8L6 4"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Methodology for Success</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results through our time-tested framework
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Take the first step towards financial excellence with our comprehensive assessment and expert guidance.
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
                Comprehensive evaluation of your current compliance status and financial position.
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
                Direct consultation with our senior financial experts to discuss your specific needs.
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

export default ServicesPage