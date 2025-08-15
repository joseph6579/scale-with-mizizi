import React from 'react'
import { Link } from 'react-router-dom'

const StrategicPlanningPage: React.FC = () => {
  const services = [
    {
      id: 'forecasting',
      title: 'Financial Forecasting & Modeling',
      description: 'Advanced predictive models that provide crystal-clear insights into your financial future',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
        </svg>
      ),
      features: [
        'Multi-scenario analysis',
        'Monte Carlo simulations',
        'Real-time dashboards'
      ],
      badge: 'Most Popular'
    },
    {
      id: 'cashflow',
      title: 'Cash Flow Optimization',
      description: 'Maximize liquidity and working capital efficiency through strategic cash management',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      ),
      features: [
        'Working capital analysis',
        'Payment optimization'
      ]
    },
    {
      id: 'investment',
      title: 'Investment Strategy',
      description: 'Strategic capital allocation and portfolio optimization for maximum returns',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12H18L15 21L9 3L6 12H2"/>
        </svg>
      ),
      features: [
        'Portfolio optimization',
        'Risk-adjusted returns'
      ]
    },
    {
      id: 'growth',
      title: 'Growth Strategy',
      description: 'Scalable financial frameworks that support sustainable business expansion',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
        </svg>
      ),
      features: [
        'Market expansion planning',
        'M&A financial analysis'
      ]
    }
  ]

  const processSteps = [
    {
      number: 1,
      phase: 'Discovery & Analysis',
      title: 'Strategic Assessment',
      description: 'Comprehensive evaluation of your current financial position, market dynamics, and competitive landscape',
      duration: 'Week 1-2'
    },
    {
      number: 2,
      phase: 'Data Intelligence',
      title: 'Advanced Analytics',
      description: 'Deep-dive analysis using proprietary models and industry benchmarks to identify opportunities',
      duration: 'Week 2-3'
    },
    {
      number: 3,
      phase: 'Strategy Design',
      title: 'Custom Framework',
      description: 'Development of tailored strategic framework aligned with your business objectives and risk profile',
      duration: 'Week 3-4'
    },
    {
      number: 4,
      phase: 'Financial Modeling',
      title: 'Predictive Models',
      description: 'Creation of sophisticated financial models with scenario planning and sensitivity analysis',
      duration: 'Week 4-5'
    },
    {
      number: 5,
      phase: 'Implementation',
      title: 'Execution Roadmap',
      description: 'Detailed implementation plan with milestones, KPIs, and resource allocation strategies',
      duration: 'Week 5-6'
    },
    {
      number: 6,
      phase: 'Optimization',
      title: 'Continuous Monitoring',
      description: 'Ongoing performance tracking and strategy refinement to ensure sustained success',
      duration: 'Ongoing'
    }
  ]

  const valuePoints = [
    {
      title: 'Proven Methodology',
      description: 'Our 6-phase strategic framework has delivered consistent results across 500+ engagements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
        </svg>
      )
    },
    {
      title: 'Rapid Implementation',
      description: 'See measurable improvements within 90 days of strategy deployment',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
        </svg>
      )
    },
    {
      title: 'Expert Team',
      description: 'Former Big 4 partners and Fortune 500 CFOs leading your strategic initiatives',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="hero-badge mb-8">
              <span className="text-2xl">📊</span>
              <span>Strategic Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Transform Your Financial Future
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Data-driven strategies that turn financial complexity into competitive advantage
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">$2.5B+</div>
                <div className="text-white/80">Assets Optimized</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">35%</div>
                <div className="text-white/80">Avg. ROI Improvement</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">500+</div>
                <div className="text-white/80">Success Stories</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                <span>Schedule Strategy Session</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7.5 15L12.5 10L7.5 5"/>
                </svg>
              </Link>
              <Link to="/assessment" className="btn btn-outline-white text-lg px-8 py-4">
                <span>Start Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-6">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Strategic Planning That Delivers Results</h2>
              <p className="text-xl text-neutral-600 mb-8">
                We don't just create plans—we architect financial transformations. Our strategic planning combines deep industry expertise with cutting-edge analytics to deliver measurable outcomes.
              </p>
              
              <div className="space-y-6">
                {valuePoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-neutral-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Strategic Impact Dashboard</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-neutral-600">Live Data</span>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Revenue Growth', value: '+78%', width: '78%' },
                  { label: 'Cost Optimization', value: '+65%', width: '65%' },
                  { label: 'ROI Improvement', value: '+92%', width: '92%' }
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{metric.label}</span>
                      <span className="font-bold text-primary-600">{metric.value}</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: metric.width }}
                      ></div>
                    </div>
                  </div>
                ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Strategic Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From financial modeling to growth strategy, we provide end-to-end strategic planning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
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
                
                <Link to="/contact" className="btn btn-outline w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 12L10 8L6 4"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Planning Methodology</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A proven 6-phase approach that transforms financial complexity into strategic clarity
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px h-16 bg-neutral-300 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {step.phase}
                      </span>
                      <span className="text-sm text-neutral-500">{step.duration}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="card max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-badge mb-6">
                  <span>Success Story</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Manufacturing Giant Transformation</h2>
                <p className="text-xl text-neutral-600 mb-8">
                  A Fortune 500 manufacturing company was facing declining margins and cash flow challenges despite growing revenues. Our strategic intervention delivered remarkable results.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">35%</div>
                    <div className="text-sm text-neutral-600">Cash Flow Improvement</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M22 12H18L15 21L9 3L6 12H2"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-accent-600 mb-1">22%</div>
                    <div className="text-sm text-neutral-600">Profit Margin Increase</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">$2.1M</div>
                    <div className="text-sm text-neutral-600">Additional Annual Profit</div>
                  </div>
                </div>
                
                <blockquote className="text-lg italic text-neutral-700 mb-6">
                  "Scale With Mizizi's strategic planning transformed our entire financial operation across our East African subsidiaries. The results exceeded our most optimistic projections."
                </blockquote>
                <div>
                  <div className="font-bold">James Mwangi</div>
                  <div className="text-neutral-600">CFO, East Africa Manufacturing Group</div>
                </div>
              </div>
              
              <div className="card bg-neutral-50 border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold">Performance Transformation</h4>
                  <span className="text-sm text-neutral-600">18-Month Period</span>
                </div>
                <div className="flex items-end justify-center h-48 gap-8">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-16 bg-gradient-to-t from-neutral-400 to-neutral-500 rounded-t-lg transition-all duration-1000 ease-out mb-3"
                      style={{ height: '40%' }}
                    ></div>
                    <span className="text-sm font-medium">Before</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-16 bg-gradient-to-t from-primary-500 to-primary-600 rounded-t-lg transition-all duration-1000 ease-out mb-3"
                      style={{ height: '85%' }}
                    ></div>
                    <span className="text-sm font-medium">After</span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 13L10 10L13 13M10 10V17"/>
                    </svg>
                    <span className="font-bold">112% Improvement</span>
                  </div>
                </div>
              </div>
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
              Join the ranks of successful businesses that have revolutionized their financial performance with our strategic planning expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">Strategy Session</h4>
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
              <p className="text-white/90 mb-6">
                60-minute consultation with our senior strategists to discuss your specific challenges and opportunities.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Personalized analysis</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Strategic recommendations</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Implementation roadmap</span>
                </div>
              </div>
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 w-full">
                <span>Schedule Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12L10 8L6 4"/>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-4">Free Assessment</h4>
              <p className="text-white/90 mb-6">
                Comprehensive evaluation of your current financial position and strategic readiness.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Detailed report</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Gap analysis</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Priority recommendations</span>
                </div>
              </div>
              <Link to="/assessment" className="btn btn-outline-white w-full">
                <span>Start Assessment</span>
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

export default StrategicPlanningPage