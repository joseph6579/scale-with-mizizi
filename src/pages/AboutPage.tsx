import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen pt-40 pb-20">

      {/* Narrative Section */}
      <section className="container mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-accent-500 font-serif text-xl italic mb-6">Est. 2015</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-tight">
            We are the architects of your <span className="text-white relative">financial future.</span>
          </h1>
          <div className="prose prose-lg prose-invert text-neutral-400">
            <p className="text-xl leading-relaxed">
              Scale With Mizizi was born from a simple observation: African businesses have the ambition and the innovation to compete on a global stage, but they often lack the financial infrastructure to sustain that growth.
            </p>
            <p className="text-xl leading-relaxed mt-8">
              "Mizizi" is more than a name. It is our methodology. We dig deep to understand the underlying drivers of your business, ensuring your growth is not just rapid, but rooted in reality.
            </p>
          </div>
        </div>
      </section>

      {/* Values - Horizontal Scroll */}
      <section className="border-y border-white/5 py-24 bg-black/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Precision', desc: 'We measure twice, cut once. Accuracy is our baseline.' },
              { title: 'Integrity', desc: 'Transparency in every number. Trust is our currency.' },
              { title: 'Vision', desc: 'We look beyond the spreadsheet to the story it tells.' }
            ].map((v, i) => (
              <div key={i} className="group">
                <div className="h-px w-full bg-white/20 mb-8 group-hover:bg-accent-500 transition-colors duration-500"></div>
                <h3 className="text-2xl font-serif font-bold mb-4">{v.title}</h3>
                <p className="text-neutral-500 text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA instead of Leadership */}
      <section className="container py-32 flex justify-center">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to plant your roots?</h2>
          <p className="text-xl text-neutral-400 mb-10">Join the next generation of African business leaders.</p>
          <a href="/contact" className="btn btn-primary px-12 py-4 text-lg">Partner With Us</a>
        </div>
      </section>

    </div>
  )
}

export default AboutPage