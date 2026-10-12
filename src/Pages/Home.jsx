const stats = [
  { value: '12+', label: 'Years of design' },
  { value: '340', label: 'Projects delivered' },
  { value: '96%', label: 'Client satisfaction' },
]

const services = [
  {
    icon: '✦',
    title: 'Interior Styling',
    description:
      'Complete furnishing plans, mood boards, and material curation for comfortable, elevated living.',
  },
  {
    icon: '⌂',
    title: 'Residential Design',
    description:
      'Tailored spaces that merge lifestyle, architecture, and tactile textures into warm, functional homes.',
  },
  {
    icon: '▣',
    title: 'Commercial Interiors',
    description:
      'Boutique hospitality, wellness, and retail spaces designed to feel immersive and distinctly branded.',
  },
]

const projects = [
  {
    title: 'Harbor Haven',
    type: 'Residential / London',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    description: 'Warm oak, sculptural lighting, and layered textures reimagined for modern family living.',
  },
  {
    title: 'Casa Aurelia',
    type: 'Villa / Dubai',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Relaxed luxury with stone palettes, seamless flow, and a distinctly Mediterranean rhythm.',
  },
  {
    title: 'Saffron House',
    type: 'Boutique / Paris',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    description: 'Curated hospitality styling that balances texture, narrative, and unforgettable detail.',
  },
]

const process = [
  {
    number: '01',
    title: 'Consult',
    description: 'We understand your goals, daily rhythm, and the emotional story your home should tell.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Moodboards, layouts, and material palettes are shaped around utility and atmosphere.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Trusted artisans and product partners help bring each detail to life with precision.',
  },
  {
    number: '04',
    title: 'Style',
    description: 'Final finishes and artful accessories complete the room with warmth and personality.',
  },
]

const testimonials = [
  {
    quote:
      'Lusherz transformed our home into a place that finally felt like us. Every room has flow, warmth, and intention.',
    name: 'Nadia R.',
    role: 'Residential client',
  },
  {
    quote:
      'Their design team understood the brand instantly and translated it into a hospitality experience guests talk about.',
    name: 'Marco & Sia',
    role: 'Boutique hotel owners',
  },
  {
    quote:
      'From the first concept to the final styling, the process felt seamless and deeply personal. We loved every step.',
    name: 'Amelia T.',
    role: 'Private villa owner',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Thoughtful interiors</div>
          <h1>
            Curated homes with <span className="text-accent">lasting soul</span>
          </h1>
          <p className="hero-text">
            We design warm, elevated spaces for living beautifully — blending modern clarity with tactile comfort,
            personal stories, and timeless materials.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn">
              Start your project
            </button>
            <button type="button" className="secondary-btn">
              View portfolio
            </button>
          </div>
          <div className="hero-meta">
            {stats.map((item) => (
              <div className="hero-meta-item" key={item.label}>
                <span className="meta-value">{item.value}</span>
                <span className="meta-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured interior room">
          <div className="hero-image-main" />
          <div className="hero-card">
            <div className="card-badge">Design direction</div>
            <h3>Quiet luxury</h3>
            <p>Refined layers of stone, linen, and natural light to make every day feel intentional.</p>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="partners-title">
        <div className="section-heading">
          <h2 id="partners-title">Trusted by design-led brands and homeowners</h2>
        </div>
        <div className="logo-band" aria-label="Client partners">
          <div className="logo-pill">Aster</div>
          <div className="logo-pill">Natura</div>
          <div className="logo-pill">Maison</div>
          <div className="logo-pill">Veloura</div>
          <div className="logo-pill">North</div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="services-title">
        <div className="section-heading">
          <h2 id="services-title">Designed for how you live</h2>
          <p className="section-note">
            From first concept sketches to final styling, every layer is considered to create a home that feels both elevated and effortless.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button type="button" className="link-btn">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <h2 id="portfolio-title">Selected projects</h2>
          <p className="section-note">
            Spaces built around story, function, and atmosphere — carefully composed for the way life unfolds.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-image"
                style={{ backgroundImage: `url('${project.image}')` }}
                aria-label={project.title}
              />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>2025</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="process-title">
        <div className="section-heading">
          <h2 id="process-title">Our process</h2>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="reviews-title">
        <div className="section-heading">
          <h2 id="reviews-title">Loved by clients</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>“{testimonial.quote}”</p>
              <div className="client">
                <div className="client-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel" aria-labelledby="cta-title">
        <div>
          <h2 id="cta-title">Ready to shape a home you love coming back to?</h2>
          <p>
            Let’s craft a space that feels intentional, effortless, and deeply personal — from concept to styling.
          </p>
        </div>
        <button type="button" className="secondary-btn">
          Book a discovery call
        </button>
      </section>
    </>
  )
}

export default Home

