const servicePackages = [
  {
    title: 'Design Concept',
    description: 'A guided concept phase that brings your vision into clear direction with palettes, layouts, and styling cues.',
    features: ['Space planning', 'Moodboards', 'Material palette', 'Initial styling notes'],
  },
  {
    title: 'Full Interior Design',
    description: 'From layout strategy to procurement and final styling, we design the full experience of the home.',
    features: ['Layout & sourcing', 'Procurement oversight', 'Lighting design', 'Styling + installation'],
  },
  {
    title: 'Turnkey Styling',
    description: 'Ideal for move-ins, refreshes, and seasonal updates that need a polished design finish without full remodel work.',
    features: ['Furniture selection', 'Art & accessories', 'Layering & finishing', 'Final styling day'],
  },
]

function Services() {
  return (
    <>
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">What we do</div>
            <h2>Design services built around your lifestyle.</h2>
          </div>
        </div>

        <div className="services-grid">
          {servicePackages.map((service) => (
            <article className="service-card service-package" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                ✦
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="approach-title">
        <div className="section-heading">
          <h2 id="approach-title">Our delivery approach</h2>
        </div>

        <div className="process-grid">
          <article className="process-step">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>We understand how you live, how you entertain, and what needs to feel effortless day to day.</p>
          </article>
          <article className="process-step">
            <div className="step-number">02</div>
            <h3>Concept</h3>
            <p>Layouts, palettes, and reference boards come together to define the design direction.</p>
          </article>
          <article className="process-step">
            <div className="step-number">03</div>
            <h3>Realisation</h3>
            <p>Selections, procurement, and coordination are managed with care through to installation.</p>
          </article>
          <article className="process-step">
            <div className="step-number">04</div>
            <h3>Styling</h3>
            <p>Final layers of art, lighting, and objects make the space feel rich, calm, and complete.</p>
          </article>
        </div>
      </section>

      <section className="cta-panel" aria-labelledby="services-cta-title">
        <div>
          <h2 id="services-cta-title">Need a tailored approach for your space?</h2>
          <p>We’ll shape a project scope that fits your timeline, ambitions, and sense of home.</p>
        </div>
        <button type="button" className="secondary-btn">
          Request a quote
        </button>
      </section>
    </>
  )
}

export default Services
