import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/assessment', label: 'Assessment' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#1e40af', stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:'#2563eb', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  </linearGradient>
                  
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#f59e0b', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#d97706', stopOpacity:1}} />
                  </linearGradient>
                  
                  <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.1"/>
                  </filter>
                </defs>
                
                <circle cx="16" cy="16" r="15.5" fill="url(#primaryGradient)" filter="url(#softShadow)"/>
                <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                
                <g transform="translate(16, 16)">
                  <circle cx="0" cy="-6" r="2.5" fill="url(#accentGradient)"/>
                  
                  <g stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" fill="none">
                    <path d="M0 -3 Q-4 2 -6 8 Q-7 10 -8 12" opacity="0.9"/>
                    <path d="M0 -3 Q4 2 6 8 Q7 10 8 12" opacity="0.9"/>
                    <path d="M0 -3 Q0 4 0 10" opacity="0.8"/>
                    <path d="M-3 4 Q-5 6 -6 9" strokeWidth="1" opacity="0.7"/>
                    <path d="M3 4 Q5 6 6 9" strokeWidth="1" opacity="0.7"/>
                  </g>
                  
                  <g fill="url(#accentGradient)" opacity="0.8">
                    <circle cx="-4" cy="-8" r="1"/>
                    <circle cx="4" cy="-8" r="1"/>
                    <circle cx="0" cy="-10" r="1.2"/>
                  </g>
                  
                  <g stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7">
                    <path d="M-6 -4 L-4 -6 L-2 -4"/>
                    <path d="M2 -4 L4 -6 L6 -4"/>
                  </g>
                </g>
                
                <circle cx="16" cy="16" r="15.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              </svg>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-neutral-800' : 'text-white'
            }`}>
              Scale With Mizizi
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : isScrolled
                      ? 'text-neutral-700'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/assessment" className="btn btn-primary">
                Get Started
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-neutral-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 font-medium transition-colors hover:text-primary-600 ${
                      location.pathname === link.path ? 'text-primary-600' : 'text-neutral-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4">
                <Link
                  to="/assessment"
                  className="btn btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header