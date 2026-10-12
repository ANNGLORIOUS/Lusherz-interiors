import { Link } from 'react-router-dom'
import { projects } from '../data/siteData.js'

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
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
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
                <Link to={`/portfolio/${project.slug}`} className="link-btn project-link">
                  View project <span aria-hidden="true">→</span>
                </Link>
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
        <Link to="/contact" className="secondary-btn">
          Discuss your brief
        </Link>
      </section>
    </>
  )
}

export default Portfolio
