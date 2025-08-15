import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  serviceInterest: string
  message: string
  consent: boolean
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      title: 'Email',
      value: 'info@scalewithmizizi.com',
      note: 'Response within 24 hours',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+254 (0) 700 123 456',
      note: 'Mon-Fri, 8AM-6PM EAT',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 16.92V19.92C22 20.52 21.39 21 20.77 21C9.39 21 0 11.61 0 0.23C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.39 5.08 0.23C5.08 2.23 5.48 4.23 6.28 6.03C6.48 6.43 6.38 6.93 6.08 7.23L4.08 9.23C5.68 12.43 8.57 15.32 11.77 16.92L13.77 14.92C14.07 14.62 14.57 14.52 14.97 14.72C16.77 15.52 18.77 15.92 20.77 15.92C21.39 15.92 22 16.4 22 16.92Z"/>
        </svg>
      )
    },
    {
      title: 'Office',
      value: 'Westlands Business District\nNairobi, Kenya',
      note: 'By appointment only',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: 'Emergency Support',
      value: '+254 (0) 700 123 457',
      note: '24/7 for existing clients',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: 'How quickly can you start working with us?',
      answer: 'We can typically begin initial assessments within 48-72 hours of our first consultation. For urgent compliance matters, we offer expedited services.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across all industries, with particular expertise in financial services, healthcare, technology, manufacturing, and real estate sectors.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We provide scalable solutions for businesses of all sizes, from startups to large enterprises, with pricing models to match.'
    },
    {
      question: 'Is the initial consultation free?',
      answer: 'Yes, we offer a complimentary 30-minute consultation to understand your needs and determine how we can best assist your business.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We maintain SOC 2 compliance, use enterprise-grade encryption, and follow strict data handling protocols to protect your sensitive information.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment arrangements including project-based, retainer, and ongoing advisory agreements to suit your budget and needs.'
    }
  ]

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
              
              <h2 className="text-4xl font-bold mb-6">Message Sent Successfully!</h2>
              <p className="text-xl text-neutral-600 mb-8">
                Thank you for reaching out to Scale With Mizizi
              </p>
              
              <div className="card mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Confirmation Details:</h4>
                    <div className="space-y-2 text-left">
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Reference ID:</strong> #SWM{Date.now().toString().slice(-6)}</div>
                      <div><strong>Expected response:</strong> Within 24 hours</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">What happens next?</h4>
                    <div className="space-y-2 text-left text-sm">
                      <div>1. Immediate email confirmation</div>
                      <div>2. Expert review of your inquiry</div>
                      <div>3. Personal response within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment" className="btn btn-primary">
                  <span>Start Free Assessment</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 12L10 8L6 4"/>
                  </svg>
                </Link>
                <Link to="/" className="btn btn-outline">Return Home</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Start a Conversation</h1>
            <p className="text-xl">
              Connect with our expert team for personalized financial guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Get Expert Guidance</h2>
                <p className="text-neutral-600">
                  Tell us about your needs and we'll connect you with the right specialist within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Service Interest</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="compliance-assessment">Compliance Assessment</option>
                    <option value="strategic-planning">Strategic Financial Planning</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="financial-advisory">Financial Advisory</option>
                    <option value="business-advisory">Business Advisory</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">How can we help you? *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500 mt-1"
                  />
                  <label className="text-sm text-neutral-600">
                    I consent to being contacted by Scale With Mizizi regarding my inquiry and understand that my information will be kept confidential.
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                        <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="text-neutral-600">Multiple ways to reach our expert team</p>
              </div>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{method.title}</h4>
                      <p className="text-neutral-700 whitespace-pre-line">{method.value}</p>
                      <span className="text-sm text-neutral-500">{method.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="card bg-primary-50 border-primary-200">
                <h4 className="text-xl font-bold mb-3">Prefer to Start with an Assessment?</h4>
                <p className="text-neutral-600 mb-6">
                  Get a comprehensive evaluation of your current financial position and compliance status.
                </p>
                <Link to="/assessment" className="btn btn-primary">
                  <span>Start Free Assessment</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 12L10 8L6 4"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage