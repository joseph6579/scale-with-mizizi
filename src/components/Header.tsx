import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-panel border-b-white/5' : 'py-8 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent-500/20">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-white tracking-wide">
              MIZIZI
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent-300">
              Scale With Purpose
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-sans tracking-wide transition-colors duration-300 hover:text-accent-400 ${location.pathname === link.path ? 'text-accent-400' : 'text-neutral-300'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/assessment"
            className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-primary-900 transition-all duration-300"
          >
            Free Assessment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg text-white/80 hover:text-accent-400 font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/assessment"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header