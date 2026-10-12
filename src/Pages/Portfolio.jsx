const projectCollection = [
  {
    title: 'Harbor Haven',
    category: 'Residential',
    location: 'London',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    description: 'A layered family home combining warm oak, earthen tones, and sculptural lighting.',
  },
  {
    title: 'Casa Aurelia',
    category: 'Villa',
    location: 'Dubai',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'Sun-washed interiors with modern silhouettes and Mediterranean ease.',
  },
  {
    title: 'Saffron House',
    category: 'Hospitality',
    location: 'Paris',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    description: 'An immersive boutique retreat designed for atmosphere and memorable hospitality.',
  },
  {
    title: 'Moss & Pine',
    category: 'Commercial',
    location: 'Copenhagen',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'A wellness studio concept that balances calm, rhythm, and tactile visual interest.',
  },
  {
    title: 'Elm Courtyard',
    category: 'Residential',
    location: 'Amsterdam',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'A light-filled urban home shaped for warm family routines and quiet luxury.',
  },
  {
    title: 'Northline Atelier',
    category: 'Workspace',
    location: 'Berlin',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'A refined studio environment built for creativity, focus, and thoughtful hospitality.',
  },
]

function Portfolio() {
  return (
    <>
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>Spaces with mood, rhythm, and character.</h2>
          </div>
        </div>

        <div className="portfolio-filters" aria-label="Project categories">
          <button type="button" className="filter-chip active">All</button>
          <button type="button" className="filter-chip">Residential</button>
          <button type="button" className="filter-chip">Hospitality</button>
          <button type="button" className="filter-chip">Commercial</button>
        </div>

        <div className="projects-grid portfolio-grid">
          {projectCollection.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-image"
                style={{ backgroundImage: `url('${project.image}')` }}
                aria-label={project.title}
              />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel" aria-labelledby="portfolio-cta-title">
        <div>
          <h2 id="portfolio-cta-title">Your project could be next.</h2>
          <p>We design homes and hospitality spaces that feel effortless, layered, and uniquely yours.</p>
        </div>
        <button type="button" className="secondary-btn">
          Discuss your brief
        </button>
      </section>
    </>
  )
}

export default Portfolio
