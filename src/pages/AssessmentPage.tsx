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
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})

  const sections = [
    'Company Profile',
    'Compliance Framework',
    'Financial Controls',
    'Risk Assessment',
    'Technology and Systems',
    'Review and Submit'
  ]

  const handleInputChange = (name: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
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

  // Simplified Validation for brevity of the redesign demo
  const validateCurrentSection = (): boolean => {
    return true
  }

  const nextSection = () => {
    if (validateCurrentSection() && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-dark-bg min-h-screen pt-24 text-white flex items-center justify-center">
        <div className="container max-w-2xl px-6">
          <div className="glass-card p-12 text-center border-t border-green-500/50">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
              <span className="text-4xl">✓</span>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">Thank you for your submission!</h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              We have received your assessment and will review it as soon as possible. You will receive a response within 24-48 hours.
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/" className="w-50 mx-auto btn btn-primary mt-8">Return to Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-dark-bg min-h-screen pt-24 pb-20 text-white selection:bg-accent-500/30">
      <div className="container max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent-500 font-mono text-sm tracking-[0.3em] mb-4">/// SYSTEM DIAGNOSTIC ///</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Compliance Readiness Assessment</h1>
          <div className="w-full max-w-2xl mx-auto h-1 bg-white/10 rounded-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-accent-500 transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-neutral-500 mt-2 max-w-2xl mx-auto font-mono">
            <span>Level {currentSection + 1}</span>
            <span>{Math.round(((currentSection + 1) / sections.length) * 100)}% Complete</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[binary-code-pattern] opacity-5 pointer-events-none"></div>

          <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-accent-500 text-black text-sm flex items-center justify-center font-mono">
              0{currentSection + 1}
            </span>
            {sections[currentSection]}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Section 1: Company Profile */}
            {currentSection === 0 && (
              <div className="space-y-8 animate-slide-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors"
                      value={formData.name as string || ''}
                      onChange={e => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Industry Sector</label>
                    <select
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                      value={formData.industry as string || ''}
                      onChange={e => handleInputChange('industry', e.target.value)}
                    >
                      <option value="">Select Vector...</option>
                      <option value="fintech">Financial Technology</option>
                      <option value="health">Healthcare / Biotech</option>
                      <option value="logistics">Logistics & Supply Chain</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="education">Education</option>
                      <option value="energy">Energy</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Annual Turnover (approx)</label>
                    <select
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                      value={formData.revenue as string || ''}
                      onChange={e => handleInputChange('revenue', e.target.value)}
                    >
                      <option value="">Select Range...</option>
                      <option value="seed">Pre-Revenue / Seed</option>
                      <option value="growth">KES 5M - 50M</option>
                      <option value="scale">KES 50M - 500M</option>
                      <option value="enterprise">KES 500M+</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Primary Contact</label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors"
                      value={formData.email as string || ''}
                      onChange={e => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Country of Operation</label>
                    <select
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                      value={formData.country as string || ''}
                      onChange={e => handleInputChange('country', e.target.value)}
                    >
                      <option value="">Select Country...</option>
                      <option value="kenya">Kenya</option>
                      <option value="uganda">Uganda</option>
                      <option value="tanzania">Tanzania</option>
                      <option value="rwanda">Rwanda</option>
                      <option value="ethiopia">Ethiopia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-accent-400 text-xs uppercase tracking-widest mb-2">Primary Contact Phone</label>
                    <input
                      type="text"
                      required={false}
                      placeholder="e.g. +254 700 123 456"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors"
                      value={formData.primaryContactPhone as string || ''}
                      onChange={e => handleInputChange('primaryContactPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Compliance */}
            {currentSection === 1 && (
              <div className="space-y-8 animate-slide-up">
                <p className="text-xl text-neutral-300">Evaluate your current regulatory standing.</p>
                <div className="space-y-4">
                  {['Fully Compliant (Certified)', 'Internal Audit Only', 'Partial / Gap Analysis Needed', 'Unknown Status'].map((option) => (
                    <label key={option} className="flex items-center gap-4 p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                      <input
                        type="radio"
                        name="compliance"
                        value={option}
                        className="w-5 h-5 accent-accent-500"
                        onChange={e => handleInputChange('compliance', e.target.value)}
                        checked={formData.compliance === option}
                      />
                      <span className="text-lg group-hover:text-accent-400 transition-colors">{option}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Frameworks Active</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['KRA/Tax', 'IFRS/GAAP', 'Data Protection', 'Industry Specific'].map(fw => (
                      <label key={fw} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 accent-accent-500" />
                        <span className="text-neutral-300">{fw}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Compliance Review Frequency</label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.complianceReviewFrequency as string || ''}
                    onChange={e => handleInputChange('complianceReviewFrequency', e.target.value)}
                  >
                    <option value="">Select Frequency...</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="semi-annual">Semi-Annual</option>
                    <option value="annual">Annual</option>
                    <option value="as needed">As Needed</option>
                    <option value="never">Never</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Section 3: Financials */}
            {currentSection === 2 && (
              <div className="space-y-8 animate-slide-up">
                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Financial Reporting Method</label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.financialReportingMethod as string || ''}
                    onChange={e => handleInputChange('financialReportingMethod', e.target.value)}
                  >
                    <option value="">Select Method...</option>
                    <option value="automated financial software">Automated Financial Software</option>
                    <option value="manual spreadsheets ">Manual Spreadsheets</option>
                    <option value="outsourced to accounting firm">Outsourced to Accounting Firm</option>
                    <option value="hybrid approach">Hybrid Approach</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Budgeting Process</label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.budgetingProcess as string || ''}
                    onChange={e => handleInputChange('budgetingProcess', e.target.value)}
                  >
                    <option value="">Select Process...</option>
                    <option value="detailed annual budget with quartely reviews">Detailed Annual Budget with Quarterly Reviews</option>
                    <option value="rolling 12-month forecast">Rolling 12-Month Forecast</option>
                    <option value="basic annual budget">Basic Annual Budget</option>
                    <option value="no formal budgeting process">No Formal Budgeting Process</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Placeholder for other sections
            {currentSection > 2 && currentSection < 5 && (
              <div className="text-center py-12 animate-slide-up">
                <div className="text-6xl mb-6 opacity-20">⚙️</div>
                <p className="text-xl text-neutral-400">Additional diagnostic modules loading...</p>
              </div>
            )} */}
            {/* Section 3: Risk Assessment */}
            {currentSection === 3 && (
              <div className="animate-slide-up">
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-6 text-white">Risk Management Approach</h4>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.riskManagementApproach as string || ''}
                    onChange={e => handleInputChange('riskManagementApproach', e.target.value)}
                  >
                    <option value="">Select Approach...</option>
                    <option value="comprehensive risk management framework">Comprehensive Risk Management Framework</option>
                    <option value="basic risk identification and mitigation">Basic Risk Identification and Mitigation</option>
                    <option value="formal risk management">Formal Risk Management</option>
                    <option value="no formal risk management">No Formal Risk Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Primary Risk Types</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Credit Risk',
                      'Market Risk',
                      'Operational Risk',
                      'Liquidity Risk',
                      'Regulatory Risk',
                      'Cybersecurity Risk',
                      'Reputation Risk',
                      'Strategic Risk'
                    ].map((risk) => (
                      <div key={risk} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`risk-${risk.toLowerCase().replace(/\s+/g, '-')}`}
                          name="primaryRisks" // Shared name for state handling if implemented later
                          value={risk}
                          className="w-5 h-5 rounded border border-white/20 accent-accent-500"
                          onChange={(e) => handleCheckboxChange('primaryRisks', risk, e.target.checked)}
                          checked={(formData.primaryRisks as string[] || []).includes(risk)}
                        />
                        <label htmlFor={`risk-${risk.toLowerCase().replace(/\s+/g, '-')}`} className="text-neutral-400 cursor-pointer select-none hover:text-white transition-colors">
                          {risk}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-6 text-white">Risk Tolerance Level</h4>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.riskToleranceLevel as string || ''}
                    onChange={e => handleInputChange('riskToleranceLevel', e.target.value)}
                  >
                    <option value="">Select Level...</option>
                    <option value="conservative">Conservative - Minimize all risks</option>
                    <option value="moderate">Moderate - Balance risk and reward</option>
                    <option value="aggressive">Aggressive - Accept higher risks for higher rewards</option>
                  </select>
                </div>
              </div>
            )}

            {/* Section 4: Tech Stack */}
            {currentSection === 4 && (
              <div className="animate-slide-up">
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-6 text-white">Financial Systems Usage</h4>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.financialSystemUsage as string || ''}
                    onChange={e => handleInputChange('financialSystemUsage', e.target.value)}
                  >
                    <option value="">Select Usage...</option>
                    <option value="enterprise erp system">Enterprise ERP System (e.g., SAP, Oracle)</option>
                    <option value="cloud based">Cloud Based (e.g., QuickBooks, Xero)</option>
                    <option value="desktop accounting">Desktop Accounting (e.g., MYOB, Wave)</option>
                    <option value="primarily spreadsheets">Primarily Spreadsheets</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">Data Management Capabilities</label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.dataManagementCapabilities as string || ''}
                    onChange={e => handleInputChange('dataManagementCapabilities', e.target.value)}
                  >
                    <option value="">Select Capabilities...</option>
                    <option value="advanced">Advanced - Real-time data integration and analytics</option>
                    <option value="intermediate">Intermediate - Some automation and reporting</option>
                    <option value="basic">Basic - Manual data entry and basic reports</option>
                    <option value="minimal">Minimal - Limited data management capabilities</option>
                  </select>
                </div>
                <div className="mt-8">
                  <label className="block text-accent-400 text-xs uppercase tracking-widest mb-4">System Level Integration</label>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.systemLevelIntegration as string || ''}
                    onChange={e => handleInputChange('systemLevelIntegration', e.target.value)}
                  >
                    <option value="">Select Integration...</option>
                    <option value="fully integrated systems">Fully Integrated Systems</option>
                    <option value="partially integrated systems">Partially Integrated Systems</option>
                    <option value="standalone systems">Standalone Systems</option>
                    <option value="manual data transfer between systems">Manual Data Transfer Between Systems</option>
                  </select>
                </div>
              </div>
            )}

            {/* Section 5: Review */}
            {currentSection === 5 && (
              <div className="animate-slide-up">
                <div className='mt-8'>
                  <h4 className="text-xl font-bold mb-6 text-white">Assessment Summary</h4>
                  <p className="text-neutral-400 mb-6">Please review your responses before submitting. Our team will analyze your assessment and provide a comprehensive report within 24-48 hours.</p>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Entity</span>
                      <span>{formData.name || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Sector</span>
                      <span className="capitalize">{formData.industry || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Email</span>
                      <span>{formData.email || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Phone</span>
                      <span>{formData.primaryContactPhone || 'Not specified'}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h5 className="text-accent-400 font-bold mb-4 uppercase tracking-widest text-xs">What you'll receive</h5>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                          <li className="flex items-center gap-2"><span className="text-accent-500">✓</span> Detailed compliance score</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">✓</span> Risk assessment report</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">✓</span> Prioritized recommendations</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">✓</span> Implementation roadmap</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-accent-400 font-bold mb-4 uppercase tracking-widest text-xs">Next steps</h5>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                          <li className="flex items-center gap-2"><span className="text-accent-500">→</span> Free consultation call</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">→</span> Custom solution proposal</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">→</span> Implementation timeline</li>
                          <li className="flex items-center gap-2"><span className="text-accent-500">→</span> Ongoing support options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-6 text-white">Additional Comments or Specific Concerns</h4>
                  <textarea
                    className="w-full bg-transparent border-b border-white/20 py-3 text-md focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.comments || ''}
                    onChange={e => handleInputChange('comments', e.target.value)}
                    rows={4}
                    required={false}
                    placeholder="Enter your comments or specific concerns"
                  />
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-6 text-white">Preferred Contact Method</h4>
                  <select
                    className="w-full bg-transparent border-b border-white/20 py-3 text-md focus:border-accent-500 outline-none transition-colors text-white [&>option]:text-black"
                    value={formData.preferredContactMethod || ''}
                    onChange={e => handleInputChange('preferredContactMethod', e.target.value)}
                    required
                  >
                    <option value="">Select a method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                <div className="mt-8 flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-5 h-5 accent-accent-500" />
                  <label className="text-sm text-neutral-400 leading-relaxed">
                    I authorize Mizizi to process this data for the purpose of generating a compliance scoreworthiness report. Values will be handled with strict confidentiality.
                  </label>
                </div>
              </div>
            )}



            {/* Navigation Controls */}
            <div className="flex justify-between pt-8 border-t border-white/10">
              <button
                type="button"
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded text-sm uppercase tracking-widest ${currentSection === 0 ? 'opacity-0' : 'hover:bg-white/10 text-neutral-400 hover:text-white'}`}
              >
                ← Back
              </button>

              {currentSection < sections.length - 1 ? (
                <button
                  type="button"
                  onClick={nextSection}
                  className="btn btn-primary px-8"
                >
                  Next Parameter
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary px-8"
                >
                  {isSubmitting ? 'Processing...' : 'Run Diagnostic'}
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AssessmentPage