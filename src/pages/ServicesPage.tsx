import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-accent-500/30">
      {/* Hero - Futuristic Grid */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none"></div>
        <div className="container text-center relative z-10">
          <div className="hero-badge mx-auto bg-white/5 border-white/10 text-accent-300">System Capabilities</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Advanced Financial <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-200 to-accent-600">Architecture.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Comprehensive modules designed to optimize every layer of your business's financial stack.
          </p>
        </div>
      </section>

      {/* Main Service Pillars - Cinematic Stack (No Grids) */}
      <section className="py-20" id="strategic-services">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Core Modules</h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto"></div>
          </div>

          <div className="space-y-40">
            {/* Strategy */}
            <div className="group relative">
              <div className="absolute -left-20 top-0 text-[12rem] font-serif font-bold text-white/5 select-none -translate-y-12">01</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-accent-200 group-hover:to-accent-500 transition-all duration-700">Financial Strategy</h3>
                  <div className="text-accent-400 font-mono text-xl mb-8">/// ARCHITECTURE</div>
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    Custom financial roadmaps designed to align resources with strategic goals. We turn vision into executable data, ensuring every shilling has a purpose.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-accent-500 pb-1 hover:text-accent-400 transition-colors uppercase tracking-widest text-sm">
                    Initialize Strategy <span className="text-xl">→</span>
                  </Link>
                </div>
                <div className="space-y-6">
                  {['Long-term capitalization planning', 'Market entry analysis', 'Business model optimization', 'Scenario Modeling'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border-b border-white/10 group/item hover:border-accent-500/50 transition-colors">
                      <span className="text-accent-500 font-mono">0{i + 1}</span>
                      <span className="text-2xl font-light text-neutral-300 group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cash Flow */}
            <div className="group relative">
              <div className="absolute -right-20 top-0 text-[12rem] font-serif font-bold text-white/5 select-none -translate-y-12 text-right w-full">02</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="lg:order-2">
                  <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-accent-200 group-hover:to-accent-500 transition-all duration-700">Cash Flow Engine.</h3>
                  <div className="text-accent-400 font-mono text-xl mb-8">/// LIQUIDITY</div>
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    Understand, track, and optimize your working capital. Avoid surprises and ensure liquidity for operations with our proprietary tracking systems.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-accent-500 pb-1 hover:text-accent-400 transition-colors uppercase tracking-widest text-sm">
                    Optimize Liquidity <span className="text-xl">→</span>
                  </Link>
                </div>
                <div className="lg:order-1 space-y-6">
                  {['Rolling 13-week forecasts', 'Liquidity gap analysis', 'Receivable optimization', 'Capital Allocation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border-b border-white/10 group/item hover:border-accent-500/50 transition-colors justify-end text-right">
                      <span className="text-2xl font-light text-neutral-300 group-hover/item:text-white transition-colors">{item}</span>
                      <span className="text-accent-500 font-mono">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Budgeting */}
            <div className="group relative">
              <div className="absolute -left-20 top-0 text-[12rem] font-serif font-bold text-white/5 select-none -translate-y-12">03</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-accent-200 group-hover:to-accent-500 transition-all duration-700">Predictive Modeling.</h3>
                  <div className="text-accent-400 font-mono text-xl mb-8">/// FORECASTING</div>
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    Professional predictive models that support better decision-making. We don't just budget for costs; we budget for growth.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-accent-500 pb-1 hover:text-accent-400 transition-colors uppercase tracking-widest text-sm">
                    Build The Model <span className="text-xl">→</span>
                  </Link>
                </div>
                <div className="space-y-6">
                  {['Variance analysis', 'Best/Worst Case Scenarios', 'Departmental allocation', 'Unit Economics'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border-b border-white/10 group/item hover:border-accent-500/50 transition-colors">
                      <span className="text-accent-500 font-mono">0{i + 1}</span>
                      <span className="text-2xl font-light text-neutral-300 group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profitability */}
            <div className="group relative">
              <div className="absolute -right-20 top-0 text-[12rem] font-serif font-bold text-white/5 select-none -translate-y-12 text-right w-full">04</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="lg:order-2">
                  <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-accent-200 group-hover:to-accent-500 transition-all duration-700">Profit Engineering.</h3>
                  <div className="text-accent-400 font-mono text-xl mb-8">/// MARGINS</div>
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    Identify profit leaks, reduce unnecessary expenses, and increase margins through detailed analysis.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-accent-500 pb-1 hover:text-accent-400 transition-colors uppercase tracking-widest text-sm">
                    Maximize Returns <span className="text-xl">→</span>
                  </Link>
                </div>
                <div className="lg:order-1 space-y-6">
                  {['Product/Service margin analysis', 'Cost structure audit', 'Operational Efficiency', 'Pricing Strategy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border-b border-white/10 group/item hover:border-accent-500/50 transition-colors justify-end text-right">
                      <span className="text-2xl font-light text-neutral-300 group-hover/item:text-white transition-colors">{item}</span>
                      <span className="text-accent-500 font-mono">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KPIs */}
            <div className="group relative">
              <div className="absolute -left-20 top-0 text-[12rem] font-serif font-bold text-white/5 select-none -translate-y-12">05</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-accent-200 group-hover:to-accent-500 transition-all duration-700">KPI Intelligence.</h3>
                  <div className="text-accent-400 font-mono text-xl mb-8">/// REPORTING</div>
                  <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    Clear, accurate reports with key performance indicators that show the true health and trajectory of your business in real-time.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-accent-500 pb-1 hover:text-accent-400 transition-colors uppercase tracking-widest text-sm">
                    View Dashboards <span className="text-xl">→</span>
                  </Link>
                </div>
                <div className="space-y-6">
                  {['Custom dashboard design', 'Real-time performance tracking', 'Trend analysis', 'Board Reporting'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border-b border-white/10 group/item hover:border-accent-500/50 transition-colors">
                      <span className="text-accent-500 font-mono">0{i + 1}</span>
                      <span className="text-2xl font-light text-neutral-300 group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping Section - Dark Panel */}
      <section className="py-20 bg-black relative" id="bookkeeping">
        <div className="absolute inset-0 bg-white/5 opacity-10 pattern-dots"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent-500 font-serif text-6xl opacity-50 block mb-6">06</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Virtual Bookkeeping</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                Clean data is the lifeblood of good strategy. Our virtual bookkeeping team ensures your books are audit-ready, 24/7/365.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-2xl text-white font-bold mb-1">Xero</div>
                  <div className="text-xs uppercase text-accent-500 tracking-widest">Certified</div>
                </div>
                <div className="border border-white/10 p-4 rounded-xl">
                  <div className="text-2xl text-white font-bold mb-1">QBO</div>
                  <div className="text-xs uppercase text-accent-500 tracking-widest">Elite Partner</div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-outline-white">Initialize Setup</Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-500/20 blur-xl rounded-full"></div>
              <div className="glass-card p-8 relative">
                <ul className="space-y-6">
                  {[
                    'Daily Transaction Categorization',
                    'Payroll Management',
                    'Accounts Payable/Receivable',
                    'Monthly Financial Statements'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-400 text-sm">✓</div>
                      <span className="text-lg text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Coaching - Holographic */}
      <section className="py-32 relative overflow-hidden" id="coaching">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20"></div>
        <div className="container relative z-10 text-center">
          <div className="inline-block border border-accent-500/50 text-accent-400 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
            Academy Mode
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Career Coaching Program</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
            Train the next generation of financial architects. Build your own virtual agency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {[
              { title: 'The Blueprint', desc: 'Agency setup roadmap.' },
              { title: 'Client Acquisition', desc: 'High-value sales strategies.' },
              { title: 'Tech Stack', desc: 'Automation mastery.' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border hover:border-accent-500 transition-colors">
                <h3 className="text-xl font-serif font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link to="/contact" className="btn btn-primary px-12">Apply for Access</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ServicesPage