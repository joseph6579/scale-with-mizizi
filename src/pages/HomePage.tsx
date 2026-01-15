import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Sophia",
      role: "Hello Metis",
      text: "Scale With Mizizi transformed our financial chaos into clarity. For the first time, I feel like I'm truly in control of my future."
    },
    {
      name: "Rhod and Audrey",
      role: "Spicey O Foods",
      text: "Their strategic insights helped us optimize our operations and scale faster than we ever imagined."
    },
    {
      name: "Kelvin",
      role: "Nourish Foods",
      text: "A game-changer for our financial planning. The team's expertise is unmatched and the results speak for themselves."
    },
    {
      name: "Nyambura",
      role: "Strabox",
      text: "Professional, insightful, and dedicated to our success. Mizizi is an invaluable partner for our growth."
    },
    {
      name: "Mungai",
      role: "Divine Sounds",
      text: "With their help, we've built a solid financial foundation for sustainable growth. Highly recommended."
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="overflow-x-hidden bg-dark-bg text-white selection:bg-accent-500/30">
      {/* Cinematic Hero - Futuristic Gradient & Particles */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div ref={heroRef} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-dark-bg to-dark-bg z-10"></div>
          {/* Futuristic Mesh Gradient */}
          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent animate-pulse-slow"></div>

          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        </div>

        {/* Content */}
        <div className="container relative z-20 text-center px-4">
          <div className="hero-badge mx-auto backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
            Financial Intelligence
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter animate-slide-up mix-blend-overlay opacity-90">
            FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-200 to-accent-500">READY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 animate-slide-up font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
            Transforming data into your most powerful competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn btn-primary group relative overflow-hidden px-10 py-4">
              <span className="relative z-10">Initiate Strategy</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-pulse">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </div>
      </section>

      {/* Philosophy - Text Reveal Spotlight */}
      <section className="py-40 relative bg-black">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -left-10 -top-10 text-[10rem] font-serif text-white/5 font-bold leading-none select-none">
                01
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 relative z-10 leading-tight">
                Beyond the <br /><span className="text-accent-400 italic">Ledger.</span>
              </h2>
              <div className="space-y-8 text-lg text-neutral-400 border-l border-white/10 pl-8">
                <p className="leading-relaxed">
                  <strong className="text-white block mb-2">The Mizizi Algorithm:</strong>
                  Traditional finance looks backward. We look forward. By integrating predictive analytics with strategic foresight, we turn your financial data into a roadmap for dominance.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white block mb-2">Rooted in Data:</strong>
                  Every decision is calculated. Every risk is quantified. We provide the architecture for sustainable, exponential growth.
                </p>
              </div>
            </div>

            {/* Holographic Stat Cards */}
            <div className="relative perspective-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
              <div className="grid grid-cols-2 gap-6 relative z-10 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="glass-panel p-8 rounded-2xl border-t border-white/20">
                  <div className="text-5xl font-mono text-accent-400 mb-2">100+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Enterprises Scaled</div>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t border-white/20 translate-y-12">
                  <div className="text-5xl font-mono text-primary-400 mb-2">$50M</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Capital Optimized</div>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t border-white/20">
                  <div className="text-5xl font-mono text-white mb-2">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">System Uptime</div>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t border-white/20 translate-y-12">
                  <div className="text-5xl font-mono text-accent-200 mb-2">98%</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise - Hover Reveal List (No Grids) */}
      <section className="py-40 relative overflow-hidden bg-dark-bg">
        <div className="container px-6">
          <div className="mb-20">
            <div className="text-accent-500 font-mono text-sm mb-4">/// CAPABILITIES ///</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">System Architecture</h2>
          </div>

          <div className="relative">
            <div className="space-y-4">
              {[
                { title: 'Outsourced CFO', subtitle: 'Strategic Leadership' },
                { title: 'Virtual Bookkeeping', subtitle: 'Audit-Ready Data' },
                { title: 'Tax Engineering', subtitle: 'Compliance & Optimization' },
                { title: 'Career Coaching', subtitle: 'Academy Access' }
              ].map((item, i) => (
                <Link to="/services" key={i} className="block group relative border-b border-white/10 pb-8 hover:border-accent-500 transition-colors duration-500">
                  <div className="flex items-end justify-between relative z-10">
                    <div>
                      <div className="text-accent-500 font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">/// MODULE 0{i + 1}</div>
                      <h3 className="text-5xl md:text-8xl font-serif font-bold text-neutral-500 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                    </div>
                    <div className="text-right hidden md:block">
                      <div className="text-xl text-neutral-400 group-hover:text-accent-400 transition-colors">{item.subtitle}</div>
                      <div className="text-sm uppercase tracking-widest text-white/20 mt-2 group-hover:text-white transition-colors">Explore →</div>
                    </div>
                  </div>
                  {/* Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-900/0 via-accent-900/0 to-accent-900/0 group-hover:via-accent-900/10 transition-all duration-700 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Spotlight Slider */}
      <section className="h-screen min-h-[800px] flex items-center justify-center bg-black relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black"></div>

        <div className="container text-center relative z-10 px-4">
          <div className="inline-block border border-white/10 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-neutral-500 mb-12">Trust Protocol</div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 min-h-[200px] flex flex-col justify-center">
              <span className="text-accent-500 text-9xl font-serif leading-none opacity-30 select-none block h-16">"</span>
              <p className="text-3xl md:text-5xl font-serif font-bold leading-tight -mt-8 relative z-10 transition-opacity duration-500">
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden border-2 border-accent-500 p-1">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentTestimonial].name)}&background=1a1a1a&color=d4af37`}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="transition-opacity duration-300">
                <div className="text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</div>
                <div className="text-accent-500 uppercase tracking-widest text-sm mt-1">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center gap-12 mt-20">
              <button
                onClick={prevTestimonial}
                className="text-neutral-600 hover:text-white transition-colors text-lg uppercase tracking-widest group"
              >
                <span className="inline-block transition-transform group-hover:-translate-x-2">←</span> Previous
              </button>
              <button
                onClick={nextTestimonial}
                className="text-neutral-600 hover:text-white transition-colors text-lg uppercase tracking-widest group"
              >
                Next <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Holographic */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-900/20 via-black to-black"></div>

        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600">
            Ready to Scale?
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-16 font-light">
            Your vision deserves a financial foundation that can support it. Initialize your growth engine today.
          </p>
          <Link to="/contact" className="btn btn-primary text-lg px-12 py-5 shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.5)] transition-shadow">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage