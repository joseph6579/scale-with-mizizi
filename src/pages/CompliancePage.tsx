import React from 'react'
import { Link } from 'react-router-dom'

const CompliancePage: React.FC = () => {
  const regulations = [
    {
      id: 'sox',
      title: 'Sarbanes-Oxley (SOX)',
      description: 'Comprehensive SOX compliance including internal controls, financial reporting accuracy, and audit requirements for public companies.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"/>
          <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8"/>
        </svg>
      ),
      features: [
        'Section 302 & 404 compliance',
        'Internal control documentation',
        'Management assessment',
        'Audit preparation'
      ],
      badge: 'Most Critical'
    },
    {
      id: 'gdpr',
      title: 'GDPR & Data Privacy',
      description: 'Data protection compliance for businesses handling EU citizen data, including privacy policies and consent management.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z"/>
        </svg>
      ),
      features: [
        'Privacy impact assessments',
        'Consent management systems',
        'Data mapping & inventory',
        'Breach response procedures'
      ]
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection compliance including administrative, physical, and technical safeguards.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C15.74 3 15.04 3.16 14.38 3.46C13.75 2.22 12.49 1.34 11 1.34C9.51 1.34 8.25 2.22 7.62 3.46C6.96 3.16 6.26 3 5.5 3C4.04131 3 2.64236 3.57946 1.61091 4.61091C0.579463 5.64236 0 7.04131 0 8.5C0 10.79 1.51 12.54 3 14L12 22L19 14Z"/>
        </svg>
      ),
      features: [
        'Risk assessments',
        'Policy development',
        'Staff training programs',
        'Audit & monitoring'
      ]
    },
    {
      id: 'pci',
      title: 'PCI DSS',
      description: 'Payment card industry compliance for businesses that process, store, or transmit credit card information.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"/>
          <path d="M7 10H17M7 14H13"/>
        </svg>
      ),
      features: [
        'Network security assessments',
        'Cardholder data protection',
        'Vulnerability management',
        'Regular monitoring & testing'
      ]
    },
    {
      id: 'sec',
      title: 'SEC Regulations',
      description: 'Securities and Exchange Commission compliance for investment advisers, broker-dealers, and public companies.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
        </svg>
      ),
      features: [
        'Investment adviser compliance',
        'Disclosure requirements',
        'Record keeping',
        'Examination preparation'
      ]
    },
    {
      id: 'industry',
      title: 'Industry-Specific',
      description: 'Specialized compliance requirements for various industries including banking, insurance, and pharmaceuticals.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      ),
      features: [
        'FINRA regulations',
        'FDA compliance',
        'Environmental regulations',
        'Labor law compliance'
      ]
    }
  ]

  const timelineSteps = [
    {
      number: 1,
      phase: 'Discovery',
      title: 'Initial Assessment',
      description: 'Comprehensive review of your business operations, industry requirements, and current compliance status.',
      duration: 'Week 1'
    },
    {
      number: 2,
      phase: 'Analysis',
      title: 'Gap Analysis',
      description: 'Detailed identification of compliance gaps, vulnerabilities, and areas requiring immediate attention.',
      duration: 'Week 2'
    },
    {
      number: 3,
      phase: 'Assessment',
      title: 'Risk Evaluation',
      description: 'Evaluation of potential risks, their likelihood, and potential impact on your business operations.',
      duration: 'Week 3'
    },
    {
      number: 4,
      phase: 'Planning',
      title: 'Remediation Strategy',
      description: 'Prioritized action plan with specific steps, timelines, and resource requirements for achieving compliance.',
      duration: 'Week 4'
    },
    {
      number: 5,
      phase: 'Implementation',
      title: 'Execution Support',
      description: 'Hands-on assistance with implementing compliance measures, policies, and procedures.',
      duration: 'Weeks 5-8'
    },
    {
      number: 6,
      phase: 'Monitoring',
      title: 'Ongoing Oversight',
      description: 'Continuous monitoring and regular assessments to ensure sustained compliance and adaptation to regulatory changes.',
      duration: 'Ongoing'
    }
  ]

  const benefits = [
    {
      title: 'Risk Protection',
      description: 'Proactively identify and mitigate compliance risks before they become costly problems',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z"/>
        </svg>
      )
    },
    {
      title: 'Competitive Advantage',
      description: 'Demonstrate commitment to compliance and build trust with stakeholders',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      )
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline processes while maintaining regulatory requirements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
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
              <span className="text-2xl">🛡️</span>
              <span>East African Compliance Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Stay Ahead of Regulatory Requirements
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Comprehensive compliance solutions tailored for East African markets to keep your business protected, compliant, and competitive across multiple jurisdictions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">100%</div>
                <div className="text-white/80">Compliance Rate</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">25+</div>
                <div className="text-white/80">Regulatory Frameworks</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">$50M+</div>
                <div className="text-white/80">Penalties Avoided</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment" className="btn btn-primary text-lg px-8 py-4">
                <span>Start Compliance Assessment</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7.5 15L12.5 10L7.5 5"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-outline-white text-lg px-8 py-4">
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-6">
                <span>Why Compliance Matters</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Navigate Complex Regulatory Landscapes</h2>
              <p className="text-xl text-neutral-600 mb-8">
                In today's complex regulatory environment, compliance isn't just about avoiding penalties—it's about building trust, protecting your reputation, and creating competitive advantages.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Compliance Dashboard</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-neutral-600">Real-time Monitoring</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'SOX Compliance', status: 'Compliant' },
                  { label: 'GDPR Status', status: 'Compliant' },
                  { label: 'SEC Regulations', status: 'Compliant' },
                  { label: 'Risk Assessment', status: 'Low Risk' }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-green-600 font-medium flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Regulations */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Regulatory Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Regulatory Frameworks We Cover</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Expert guidance across major compliance requirements and industry-specific regulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map((regulation) => (
              <div key={regulation.id} className={`card group hover:scale-105 transition-transform duration-300 relative overflow-hidden ${regulation.badge ? 'ring-2 ring-accent-500' : ''}`}>
                {regulation.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {regulation.badge}
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  {regulation.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{regulation.title}</h3>
                <p className="text-neutral-600 mb-6">{regulation.description}</p>
                
                <div className="space-y-3">
                  {regulation.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600 flex-shrink-0">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Assessment Methodology</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A systematic approach to evaluating and improving your compliance posture
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={step.number} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    {index < timelineSteps.length - 1 && (
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Strengthen Your Compliance Posture?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Start with our comprehensive compliance assessment to identify opportunities and risks in your current regulatory framework.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">Free Compliance Assessment</h4>
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Start Here
                </span>
              </div>
              <p className="text-white/90 mb-6">
                Comprehensive evaluation of your current compliance status with detailed recommendations and priority actions.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Detailed compliance report</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Risk assessment matrix</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Priority action plan</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Implementation roadmap</span>
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
              <h4 className="text-2xl font-bold text-white mb-4">Expert Consultation</h4>
              <p className="text-white/90 mb-6">
                Direct consultation with our compliance specialists to discuss your specific regulatory challenges and requirements.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>60-minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Regulatory guidance</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Implementation support</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-outline-white w-full">
                <span>Schedule Consultation</span>
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

export default CompliancePage