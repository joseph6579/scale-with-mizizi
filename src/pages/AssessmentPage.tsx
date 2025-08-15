import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
  [key: string]: string | string[]
}

const AssessmentPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState<FormData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sections = [
    'Company Information',
    'Regulatory Compliance',
    'Financial Management',
    'Risk Assessment',
    'Technology & Systems',
    'Review & Submit'
  ]

  const handleInputChange = (name: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = Array.isArray(prev[name]) ? prev[name] as string[] : []
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] }
      } else {
        return { ...prev, [name]: currentValues.filter(v => v !== value) }
      }
    })
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                </svg>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">Assessment Submitted Successfully!</h2>
              <p className="text-xl text-neutral-600 mb-8">
                Thank you for completing our comprehensive compliance assessment. Our expert team will analyze your responses and prepare a detailed report.
              </p>
              
              <div className="card mb-8">
                <h4 className="text-xl font-bold mb-4">What happens next?</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <strong>Within 24 hours:</strong> You'll receive a preliminary assessment summary
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <strong>Within 48 hours:</strong> Complete detailed report with recommendations
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <strong>Within 72 hours:</strong> Our team will contact you to schedule a consultation
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn btn-primary">
                  Return Home
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const renderCurrentSection = () => {
    switch(currentSection) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold">Company Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Industry *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                >
                  <option value="">Select Industry</option>
                  <option value="financial-services">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="technology">Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Company Size *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                >
                  <option value="">Select Size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-200 employees)</option>
                  <option value="large">Large (201-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Annual Revenue *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                >
                  <option value="">Select Range</option>
                  <option value="under-1m">Under $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-25m">$5M - $25M</option>
                  <option value="25m-100m">$25M - $100M</option>
                  <option value="over-100m">Over $100M</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Primary Contact Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                6
              </div>
              <h3 className="text-2xl font-bold">Review & Submit</h3>
            </div>
            
            <div className="card bg-neutral-50">
              <h4 className="text-xl font-bold mb-4">Assessment Summary</h4>
              <p className="text-neutral-600 mb-6">
                Please review your responses before submitting. Our team will analyze your assessment and provide a comprehensive report within 24-48 hours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <strong className="block mb-3">What you'll receive:</strong>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Detailed compliance score
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Risk assessment report
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Prioritized recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Implementation roadmap
                    </li>
                  </ul>
                </div>
                <div>
                  <strong className="block mb-3">Next steps:</strong>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Free consultation call
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Custom solution proposal
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Implementation timeline
                    </li>
                    <li className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                        <path d="M13.5 4.5L6 12L2.5 8.5"/>
                      </svg>
                      Ongoing support options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Additional Comments or Specific Concerns</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Please share any specific challenges, concerns, or areas where you'd like focused attention..."
                onChange={(e) => handleInputChange('additionalComments', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-4">Preferred Contact Method</label>
              <div className="space-y-3">
                {['email', 'phone', 'both'].map((method) => (
                  <label key={method} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                      onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                    />
                    <span className="capitalize">{method === 'both' ? 'Both email and phone' : method}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 mt-1"
              />
              <label className="text-sm text-neutral-600">
                I consent to Scale With Mizizi contacting me about this assessment and related services. I understand that my information will be kept confidential and used solely for providing the requested assessment and consultation services.
              </label>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentSection + 1}
              </div>
              <h3 className="text-2xl font-bold">{sections[currentSection]}</h3>
            </div>
            
            <div className="text-center py-12">
              <p className="text-neutral-600">Section content would be implemented here...</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance Readiness Assessment</h1>
            <p className="text-xl">
              Evaluate your business compliance across East African and international standards
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Financial Compliance Assessment</h2>
                <p className="text-neutral-600">
                  Complete this comprehensive assessment to receive a detailed report on your compliance status and recommendations for improvement.
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral-600">Progress: {currentSection + 1} of {sections.length}</span>
                  <span className="text-sm text-neutral-600">{Math.round(((currentSection + 1) / sections.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {renderCurrentSection()}
                
                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={prevSection}
                    disabled={currentSection === 0}
                    className={`btn ${currentSection === 0 ? 'opacity-50 cursor-not-allowed' : 'btn-outline'}`}
                  >
                    Previous
                  </button>
                  
                  {currentSection === sections.length - 1 ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Assessment'
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextSection}
                      className="btn btn-primary"
                    >
                      Next Section
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AssessmentPage