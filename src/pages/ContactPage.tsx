import React, { useState } from 'react'
import { MapPinIcon, MailIcon } from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you. We will be in touch shortly.")
  }

  return (
    <div className="bg-dark-bg min-h-screen pt-40 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <div className="section-badge mb-8">Get In Touch</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10">Let's talk business.</h1>
            <p className="text-xl text-neutral-400 mb-12">
              Ready to take your financial strategy to the next level? Fill out the form or reach us directly.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent-500"><MailIcon /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-neutral-500">info@scalewithmizizi.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent-500"><MapPinIcon /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Location</h4>
                  <p className="text-neutral-500">Westlands, Nairobi, Kenya<br />Virtual Services Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 bg-white/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm text-neutral-400 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-accent-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-accent-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-accent-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-4">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage