import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">Scale With Mizizi</h4>
            <p className="text-neutral-400 mb-6">
              Premier financial advisory services based in Nairobi, Kenya, helping businesses across East Africa achieve sustainable growth through expert guidance and strategic financial planning.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/compliance" className="text-neutral-400 hover:text-white transition-colors">
                  Compliance Assessment
                </Link>
              </li>
              <li>
                <Link to="/strategic-planning" className="text-neutral-400 hover:text-white transition-colors">
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-neutral-400 hover:text-white transition-colors">
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@scalewithmizizi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+254 (0) 700 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Westlands, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            &copy; 2025 Scale With Mizizi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer