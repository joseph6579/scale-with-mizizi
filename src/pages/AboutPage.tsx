import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      title: 'CEO & Founder',
      description: 'Former Big 4 partner with 20+ years in financial consulting. CPA, MBA from Wharton. Specializes in regulatory compliance and strategic planning.',
      credentials: ['CPA', 'MBA', '20+ Years'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      description: 'Technology leader specializing in financial systems and compliance automation. MS Computer Science from Stanford, former fintech executive.',
      credentials: ['MS CS', 'Fintech', '15+ Years'],
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Head of Compliance',
      description: 'Regulatory expert with extensive experience in SEC, FINRA, and international compliance frameworks. JD from Harvard Law School.',
      credentials: ['JD', 'SEC', '18+ Years'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality in every engagement.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      )
    },
    {
      title: 'Integrity',
      description: 'We operate with the highest ethical standards, ensuring transparency and trust in all our client relationships and business practices.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21L12 19L16 21Z"/>
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and innovative approaches to solve complex financial challenges and drive business success.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
        </svg>
      )
    },
    {
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, working collaboratively to achieve sustainable growth and success.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21V13H7V21M7 13L17 13L12 8L7 13Z"/>
        </svg>
      )
    }
  ]

  const certifications = [
    {
      title: 'CPA Certified',
      description: 'All senior consultants are Certified Public Accountants with active licenses',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      )
    },
    {
      title: 'MBA Qualified',
      description: 'Advanced business education from top-tier institutions including Wharton and Stanford',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12H20C20.5304 12 21.0391 11.7893 21.4142 11.4142C21.7893 11.0391 22 10.5304 22 10Z"/>
          <path d="M2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12"/>
        </svg>
      )
    },
    {
      title: 'SOC 2 Compliant',
      description: 'Highest standards for data security, privacy, and operational excellence',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z"/>
        </svg>
      )
    },
    {
      title: 'Industry Awards',
      description: 'Recognized as "Best Financial Consultancy" by Financial Services Review 2023-2024',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9L12 15L18 9"/>
        </svg>
      )
    }
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Founded in Nairobi with a vision to provide world-class financial advisory services to East African businesses'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Expanded across East Africa, serving clients in Kenya, Uganda, Tanzania, and Rwanda'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Launched advanced analytics platform tailored for African regulatory environments'
    },
    {
      year: '2025',
      title: 'Leadership',
      description: 'Recognized as East Africa\'s premier financial consultancy with KES 350B+ in assets under advisory'
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
              <span className="text-2xl">🏢</span>
              <span>About Scale With Mizizi</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Deep-Rooted Financial Excellence Since 2015
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Founded in Nairobi, we've grown from a boutique advisory firm to East Africa's leading provider of comprehensive financial solutions, helping businesses across the region navigate complex regulatory landscapes while optimizing performance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">10+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">500+</div>
                <div className="text-white/80">Client Success Stories</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400">15+</div>
                <div className="text-white/80">Industry Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-6">
                <span>Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Building Financial Excellence</h2>
              <p className="text-xl text-neutral-600 mb-8">
                Founded in 2015, Scale With Mizizi emerged from a vision to bridge the gap between complex financial regulations and practical business solutions.
              </p>
              
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Growth Trajectory</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-neutral-600">10-Year Journey</span>
                </div>
              </div>
              <div className="flex items-end justify-between h-48 gap-4">
                {[20, 40, 70, 100].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-primary-500 to-primary-600 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-sm text-neutral-600 mt-2">
                      {['2018', '2020', '2022', '2025'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Principles That Guide Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our core values shape every interaction, decision, and solution we provide to our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Leaders</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Seasoned professionals with decades of combined experience in financial consulting and strategic planning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                <p className="text-neutral-600 mb-6">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.credentials.map((credential) => (
                    <span key={credential} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-badge mb-6">
              <span>Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Recognition</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our expertise is validated by industry-leading certifications and prestigious awards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{cert.title}</h4>
                <p className="text-neutral-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work with the Best?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join hundreds of satisfied clients across East Africa who trust Scale With Mizizi with their most important financial decisions and regulatory compliance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">Free Assessment</h4>
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Start Here
                </span>
              </div>
              <p className="text-white/90 mb-6">
                Comprehensive evaluation of your current financial position and compliance status.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Detailed analysis report</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Risk assessment</span>
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
                Direct consultation with our leadership team to discuss your specific needs and objectives.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>60-minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Strategic guidance</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>✓</span>
                  <span>Custom solutions</span>
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

export default AboutPage