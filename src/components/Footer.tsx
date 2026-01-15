import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'


const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/scale-with-mizizi/', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/mizizi_scale', icon: Twitter },
    { name: 'Instagram', url: 'https://www.instagram.com/scale_with_mizizi/', icon: Instagram },
  ]
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/5">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand - Large Typography */}
          <div className="lg:col-span-5">
            <Link to="/" className="block mb-8">
              <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-white mb-2">MIZIZI</h2>
              <div className="h-1 w-24 bg-accent-500"></div>
            </Link>
            <p className="text-xl text-neutral-400 max-w-sm leading-relaxed mb-12">
              Empowering African businesses with world-class financial strategy and compliance solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider">
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Magazine Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-accent-400 mb-8">Expertise</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">CFO Services</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Bookkeeping</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Tax Compliance</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Career Coaching</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-accent-400 mb-8">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-accent-400 mb-8">Contact</h4>
              <address className="not-italic text-neutral-400 space-y-4">
                <p>Westlands District<br />Nairobi, Kenya</p>
                <p><a href="mailto:info@scalewithmizizi.com" className="hover:text-white underline decoration-1 underline-offset-4">info@scalewithmizizi.com</a></p>
                <p>+254 (0) 700 123 456</p>
              </address>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-800 text-green-400 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Accepting New Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-600">
          <p>&copy; 2026 Scale With Mizizi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer