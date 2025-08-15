import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class AssessmentPage {
  constructor() {
    this.name = 'AssessmentPage'
    this.currentSection = 0
    this.formData = {}
    this.sections = [
      'Company Information',
      'Regulatory Compliance',
      'Financial Management',
      'Risk Assessment',
      'Technology & Systems',
      'Review & Submit'
    ]
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Compliance Readiness Assessment</h1>
            <p class="text-large">Evaluate your business compliance across East African and international standards</p>
          </div>
        </section>

        <!-- Assessment Form -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="assessment-form">
              <div class="form-header">
                <h2>Financial Compliance Assessment</h2>
                <p>Complete this comprehensive assessment to receive a detailed report on your compliance status and recommendations for improvement.</p>
              </div>
              
              <div class="form-progress">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-small">Progress: ${this.currentSection + 1} of ${this.sections.length}</span>
                  <span class="text-small">${Math.round(((this.currentSection + 1) / this.sections.length) * 100)}% Complete</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${((this.currentSection + 1) / this.sections.length) * 100}%"></div>
                </div>
              </div>

              <form id="assessmentForm">
                ${this.renderCurrentSection()}
              </form>
            </div>
          </div>
        </section>
      </main>

      ${createFooter()}
    `
    
    this.attachEventListeners()
  }

  renderCurrentSection() {
    switch(this.currentSection) {
      case 0:
        return this.renderCompanyInfo()
      case 1:
        return this.renderRegulatoryCompliance()
      case 2:
        return this.renderFinancialManagement()
      case 3:
        return this.renderRiskAssessment()
      case 4:
        return this.renderTechnologySystems()
      case 5:
        return this.renderReviewSubmit()
      default:
        return this.renderCompanyInfo()
    }
  }

  renderCompanyInfo() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">1</div>
          <h3>Company Information</h3>
        </div>
        
        <div class="grid grid-2">
          <div class="form-group">
            <label class="form-label">Company Name *</label>
            <input type="text" class="form-input" name="companyName" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">Industry *</label>
            <select class="form-select" name="industry" required>
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
          
          <div class="form-group">
            <label class="form-label">Company Size *</label>
            <select class="form-select" name="companySize" required>
              <option value="">Select Size</option>
              <option value="startup">Startup (1-10 employees)</option>
              <option value="small">Small (11-50 employees)</option>
              <option value="medium">Medium (51-200 employees)</option>
              <option value="large">Large (201-1000 employees)</option>
              <option value="enterprise">Enterprise (1000+ employees)</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Annual Revenue *</label>
            <select class="form-select" name="annualRevenue" required>
              <option value="">Select Range</option>
              <option value="under-1m">Under $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-25m">$5M - $25M</option>
              <option value="25m-100m">$25M - $100M</option>
              <option value="over-100m">Over $100M</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Primary Contact Email *</label>
          <input type="email" class="form-input" name="contactEmail" required>
        </div>
        
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input type="tel" class="form-input" name="phoneNumber">
        </div>
      </div>
      
      <div class="form-navigation">
        <div></div>
        <button type="button" class="btn btn-primary" onclick="assessmentPage.nextSection()">Next Section</button>
      </div>
    `
  }

  renderRegulatoryCompliance() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">2</div>
          <h3>Regulatory Compliance</h3>
        </div>
        
        <div class="form-group">
          <label class="form-label">Which regulations does your business need to comply with? (Select all that apply)</label>
          <div class="grid grid-2">
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="sox" id="sox">
              <label for="sox">Sarbanes-Oxley Act (SOX)</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="gdpr" id="gdpr">
              <label for="gdpr">GDPR</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="hipaa" id="hipaa">
              <label for="hipaa">HIPAA</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="pci-dss" id="pci-dss">
              <label for="pci-dss">PCI DSS</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="sec" id="sec">
              <label for="sec">SEC Regulations</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="regulations" value="other" id="other-reg">
              <label for="other-reg">Other Industry-Specific</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">How would you rate your current compliance status? *</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="complianceStatus" value="excellent" id="comp-excellent">
              <label for="comp-excellent">
                <strong>Excellent</strong> - Fully compliant with all applicable regulations
              </label>
            </div>
            <div class="radio-option">
              <input type="radio" name="complianceStatus" value="good" id="comp-good">
              <label for="comp-good">
                <strong>Good</strong> - Mostly compliant with minor gaps
              </label>
            </div>
            <div class="radio-option">
              <input type="radio" name="complianceStatus" value="fair" id="comp-fair">
              <label for="comp-fair">
                <strong>Fair</strong> - Some compliance gaps that need attention
              </label>
            </div>
            <div class="radio-option">
              <input type="radio" name="complianceStatus" value="poor" id="comp-poor">
              <label for="comp-poor">
                <strong>Poor</strong> - Significant compliance issues
              </label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">When was your last compliance audit?</label>
          <select class="form-select" name="lastAudit">
            <option value="">Select timeframe</option>
            <option value="within-6-months">Within the last 6 months</option>
            <option value="6-12-months">6-12 months ago</option>
            <option value="1-2-years">1-2 years ago</option>
            <option value="over-2-years">Over 2 years ago</option>
            <option value="never">Never conducted</option>
          </select>
        </div>
      </div>
      
      <div class="form-navigation">
        <button type="button" class="btn btn-outline" onclick="assessmentPage.prevSection()">Previous</button>
        <button type="button" class="btn btn-primary" onclick="assessmentPage.nextSection()">Next Section</button>
      </div>
    `
  }

  renderFinancialManagement() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">3</div>
          <h3>Financial Management</h3>
        </div>
        
        <div class="form-group">
          <label class="form-label">How often do you prepare financial statements? *</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="financialStatements" value="monthly" id="fs-monthly">
              <label for="fs-monthly">Monthly</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financialStatements" value="quarterly" id="fs-quarterly">
              <label for="fs-quarterly">Quarterly</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financialStatements" value="annually" id="fs-annually">
              <label for="fs-annually">Annually</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financialStatements" value="irregular" id="fs-irregular">
              <label for="fs-irregular">Irregularly</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Do you have a dedicated finance team or CFO? *</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="financeTeam" value="cfo-team" id="ft-cfo-team">
              <label for="ft-cfo-team">Yes, CFO and finance team</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financeTeam" value="cfo-only" id="ft-cfo-only">
              <label for="ft-cfo-only">Yes, CFO only</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financeTeam" value="finance-manager" id="ft-finance-manager">
              <label for="ft-finance-manager">Finance manager/controller</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financeTeam" value="outsourced" id="ft-outsourced">
              <label for="ft-outsourced">Outsourced to accounting firm</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="financeTeam" value="none" id="ft-none">
              <label for="ft-none">No dedicated finance personnel</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">What financial management systems do you use?</label>
          <div class="grid grid-2">
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="quickbooks" id="fs-quickbooks">
              <label for="fs-quickbooks">QuickBooks</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="sage" id="fs-sage">
              <label for="fs-sage">Sage</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="netsuite" id="fs-netsuite">
              <label for="fs-netsuite">NetSuite</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="sap" id="fs-sap">
              <label for="fs-sap">SAP</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="excel" id="fs-excel">
              <label for="fs-excel">Excel/Spreadsheets</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="financialSystems" value="other" id="fs-other">
              <label for="fs-other">Other</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">How would you rate your current financial reporting accuracy?</label>
          <select class="form-select" name="reportingAccuracy">
            <option value="">Select rating</option>
            <option value="excellent">Excellent - Always accurate and timely</option>
            <option value="good">Good - Usually accurate with minor issues</option>
            <option value="fair">Fair - Some accuracy concerns</option>
            <option value="poor">Poor - Frequent inaccuracies</option>
          </select>
        </div>
      </div>
      
      <div class="form-navigation">
        <button type="button" class="btn btn-outline" onclick="assessmentPage.prevSection()">Previous</button>
        <button type="button" class="btn btn-primary" onclick="assessmentPage.nextSection()">Next Section</button>
      </div>
    `
  }

  renderRiskAssessment() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">4</div>
          <h3>Risk Assessment</h3>
        </div>
        
        <div class="form-group">
          <label class="form-label">What are your primary business risks? (Select all that apply)</label>
          <div class="grid grid-2">
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="regulatory" id="risk-regulatory">
              <label for="risk-regulatory">Regulatory compliance</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="cybersecurity" id="risk-cyber">
              <label for="risk-cyber">Cybersecurity threats</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="market" id="risk-market">
              <label for="risk-market">Market volatility</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="operational" id="risk-operational">
              <label for="risk-operational">Operational disruptions</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="financial" id="risk-financial">
              <label for="risk-financial">Financial/Credit risks</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="businessRisks" value="reputation" id="risk-reputation">
              <label for="risk-reputation">Reputational risks</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Do you have a formal risk management framework? *</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="riskFramework" value="comprehensive" id="rf-comprehensive">
              <label for="rf-comprehensive">Yes, comprehensive framework with regular reviews</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="riskFramework" value="basic" id="rf-basic">
              <label for="rf-basic">Yes, basic framework in place</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="riskFramework" value="informal" id="rf-informal">
              <label for="rf-informal">Informal risk management processes</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="riskFramework" value="none" id="rf-none">
              <label for="rf-none">No formal risk management</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">How often do you review and update your risk assessments?</label>
          <select class="form-select" name="riskReviewFrequency">
            <option value="">Select frequency</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semi-annually">Semi-annually</option>
            <option value="annually">Annually</option>
            <option value="as-needed">As needed/Ad hoc</option>
            <option value="never">Never</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Do you have adequate insurance coverage for your business risks?</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="insuranceCoverage" value="comprehensive" id="ic-comprehensive">
              <label for="ic-comprehensive">Yes, comprehensive coverage</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="insuranceCoverage" value="adequate" id="ic-adequate">
              <label for="ic-adequate">Yes, adequate coverage</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="insuranceCoverage" value="limited" id="ic-limited">
              <label for="ic-limited">Limited coverage</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="insuranceCoverage" value="unsure" id="ic-unsure">
              <label for="ic-unsure">Unsure about coverage adequacy</label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="form-navigation">
        <button type="button" class="btn btn-outline" onclick="assessmentPage.prevSection()">Previous</button>
        <button type="button" class="btn btn-primary" onclick="assessmentPage.nextSection()">Next Section</button>
      </div>
    `
  }

  renderTechnologySystems() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">5</div>
          <h3>Technology & Systems</h3>
        </div>
        
        <div class="form-group">
          <label class="form-label">How would you rate your current technology infrastructure? *</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="techInfrastructure" value="cutting-edge" id="ti-cutting-edge">
              <label for="ti-cutting-edge">Cutting-edge - Latest technology and systems</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="techInfrastructure" value="modern" id="ti-modern">
              <label for="ti-modern">Modern - Up-to-date systems</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="techInfrastructure" value="adequate" id="ti-adequate">
              <label for="ti-adequate">Adequate - Meets current needs</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="techInfrastructure" value="outdated" id="ti-outdated">
              <label for="ti-outdated">Outdated - Needs significant upgrades</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Do you have automated financial reporting and compliance monitoring?</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="automation" value="fully-automated" id="auto-full">
              <label for="auto-full">Fully automated systems</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="automation" value="partially-automated" id="auto-partial">
              <label for="auto-partial">Partially automated</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="automation" value="minimal-automation" id="auto-minimal">
              <label for="auto-minimal">Minimal automation</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="automation" value="manual" id="auto-manual">
              <label for="auto-manual">Mostly manual processes</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">What cybersecurity measures do you have in place? (Select all that apply)</label>
          <div class="grid grid-2">
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="firewall" id="cyber-firewall">
              <label for="cyber-firewall">Firewall protection</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="antivirus" id="cyber-antivirus">
              <label for="cyber-antivirus">Antivirus software</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="encryption" id="cyber-encryption">
              <label for="cyber-encryption">Data encryption</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="backup" id="cyber-backup">
              <label for="cyber-backup">Regular data backups</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="training" id="cyber-training">
              <label for="cyber-training">Employee security training</label>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" name="cybersecurity" value="monitoring" id="cyber-monitoring">
              <label for="cyber-monitoring">24/7 security monitoring</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">How often do you update your systems and software?</label>
          <select class="form-select" name="updateFrequency">
            <option value="">Select frequency</option>
            <option value="immediately">Immediately when available</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
            <option value="as-needed">Only when necessary</option>
            <option value="rarely">Rarely</option>
          </select>
        </div>
      </div>
      
      <div class="form-navigation">
        <button type="button" class="btn btn-outline" onclick="assessmentPage.prevSection()">Previous</button>
        <button type="button" class="btn btn-primary" onclick="assessmentPage.nextSection()">Review & Submit</button>
      </div>
    `
  }

  renderReviewSubmit() {
    return `
      <div class="form-section">
        <div class="section-title">
          <div class="section-number">6</div>
          <h3>Review & Submit</h3>
        </div>
        
        <div class="card" style="background: var(--neutral-50); margin-bottom: 2rem;">
          <h4>Assessment Summary</h4>
          <p>Please review your responses before submitting. Our team will analyze your assessment and provide a comprehensive report within 24-48 hours.</p>
          
          <div class="grid grid-2" style="margin-top: 1.5rem;">
            <div>
              <strong>What you'll receive:</strong>
              <ul style="margin-top: 0.5rem;">
                <li>Detailed compliance score</li>
                <li>Risk assessment report</li>
                <li>Prioritized recommendations</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>
            <div>
              <strong>Next steps:</strong>
              <ul style="margin-top: 0.5rem;">
                <li>Free consultation call</li>
                <li>Custom solution proposal</li>
                <li>Implementation timeline</li>
                <li>Ongoing support options</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Additional Comments or Specific Concerns</label>
          <textarea class="form-textarea" name="additionalComments" placeholder="Please share any specific challenges, concerns, or areas where you'd like focused attention..."></textarea>
        </div>
        
        <div class="form-group">
          <label class="form-label">Preferred Contact Method</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" name="contactMethod" value="email" id="contact-email">
              <label for="contact-email">Email</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="contactMethod" value="phone" id="contact-phone">
              <label for="contact-phone">Phone</label>
            </div>
            <div class="radio-option">
              <input type="radio" name="contactMethod" value="both" id="contact-both">
              <label for="contact-both">Both email and phone</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-checkbox">
            <input type="checkbox" name="consent" id="consent" required>
            <label for="consent">I consent to Apex Financial Consultancy contacting me about this assessment and related services. I understand that my information will be kept confidential and used solely for providing the requested assessment and consultation services.</label>
          </div>
        </div>
      </div>
      
      <div class="form-navigation">
        <button type="button" class="btn btn-outline" onclick="assessmentPage.prevSection()">Previous</button>
        <button type="submit" class="btn btn-primary" id="submitAssessment">Submit Assessment</button>
      </div>
    `
  }

  attachEventListeners() {
    // Make assessmentPage available globally for button clicks
    window.assessmentPage = this
    
    // Form submission
    const form = document.getElementById('assessmentForm')
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e))
    }
    
    // Radio button styling
    document.addEventListener('change', (e) => {
      if (e.target.type === 'radio') {
        // Remove selected class from all options in the same group
        const groupName = e.target.name
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(radio => {
          radio.closest('.radio-option')?.classList.remove('selected')
        })
        // Add selected class to the chosen option
        e.target.closest('.radio-option')?.classList.add('selected')
      }
    })
  }

  nextSection() {
    if (this.validateCurrentSection()) {
      this.saveCurrentSection()
      if (this.currentSection < this.sections.length - 1) {
        this.currentSection++
        this.render()
      }
    }
  }

  prevSection() {
    this.saveCurrentSection()
    if (this.currentSection > 0) {
      this.currentSection--
      this.render()
    }
  }

  validateCurrentSection() {
    const form = document.getElementById('assessmentForm')
    const requiredFields = form.querySelectorAll('[required]')
    let isValid = true
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--error)'
        isValid = false
      } else {
        field.style.borderColor = 'var(--neutral-300)'
      }
    })
    
    if (!isValid) {
      alert('Please fill in all required fields before proceeding.')
    }
    
    return isValid
  }

  saveCurrentSection() {
    const form = document.getElementById('assessmentForm')
    const formData = new FormData(form)
    
    for (let [key, value] of formData.entries()) {
      if (this.formData[key]) {
        // Handle multiple values (checkboxes)
        if (Array.isArray(this.formData[key])) {
          this.formData[key].push(value)
        } else {
          this.formData[key] = [this.formData[key], value]
        }
      } else {
        this.formData[key] = value
      }
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    if (!this.validateCurrentSection()) {
      return
    }
    
    this.saveCurrentSection()
    
    const submitButton = document.getElementById('submitAssessment')
    submitButton.disabled = true
    submitButton.textContent = 'Submitting...'
    
    try {
      // Simulate API call
      await this.submitAssessment(this.formData)
      
      // Show success message
      document.getElementById('app').innerHTML = `
        ${createHeader()}
        <main style="margin-top: 80px;">
          <section class="section-large text-center">
            <div class="container">
              <div class="card" style="max-width: 600px; margin: 0 auto;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                <h2>Assessment Submitted Successfully!</h2>
                <p class="text-large mb-3">Thank you for completing our comprehensive compliance assessment. Our expert team will analyze your responses and prepare a detailed report.</p>
                
                <div class="bg-neutral-50 p-3 border-radius-8 mb-3">
                  <h4>What happens next?</h4>
                  <ul style="text-align: left; margin-top: 1rem;">
                    <li><strong>Within 24 hours:</strong> You'll receive a preliminary assessment summary</li>
                    <li><strong>Within 48 hours:</strong> Complete detailed report with recommendations</li>
                    <li><strong>Within 72 hours:</strong> Our team will contact you to schedule a consultation</li>
                  </ul>
                </div>
                
                <p class="text-small text-neutral-600 mb-3">We've sent a confirmation email to <strong>${this.formData.contactEmail}</strong></p>
                
                <div class="flex justify-center gap-2" style="flex-wrap: wrap;">
                  <a href="/" class="btn btn-primary" data-link>Return Home</a>
                  <a href="/services" class="btn btn-outline" data-link>Explore Services</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        ${createFooter()}
      `
      
    } catch (error) {
      alert('There was an error submitting your assessment. Please try again.')
      submitButton.disabled = false
      submitButton.textContent = 'Submit Assessment'
    }
  }

  async submitAssessment(data) {
    // Simulate API call - in real implementation, this would send to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Assessment data:', data)
        // Here you would typically send the data to your email service
        // or save it to a database
        resolve()
      }, 2000)
    })
  }

  destroy() {
    // Clean up global reference
    if (window.assessmentPage === this) {
      delete window.assessmentPage
    }
  }
}