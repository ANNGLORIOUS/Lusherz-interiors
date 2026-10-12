import { Link, useParams } from 'react-router-dom'
import Gallery from '../Components/Gallery.jsx'
import { projects } from '../data/siteData.js'

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section-shell">
        <div className="empty-state">
          <h2>Project not found</h2>
          <Link to="/portfolio" className="primary-btn">
            Return to portfolio
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-shell">
      <div className="detail-header">
        <div>
          <div className="eyebrow">Project detail</div>
          <h2>{project.title}</h2>
        </div>
        <Link to="/portfolio" className="secondary-btn">
          Back to portfolio
        </Link>
      </div>

      <div className="detail-hero" style={{ backgroundImage: `url('${project.image}')` }} />

      <div className="detail-grid">
        <div>
          <p className="detail-meta">
            {project.category} • {project.location} • {project.year}
          </p>
          <p className="detail-overview">{project.overview}</p>
        </div>

        <aside className="detail-aside">
          <h3>Design goals</h3>
          <ul>
            <li>Natural material palette</li>
            <li>Thoughtful space planning</li>
            <li>Balanced modern restraint</li>
            <li>Layered lighting and texture</li>
          </ul>
        </aside>
      </div>

      <div className="gallery-wrapper">
        <Gallery images={project.gallery} />
      </div>

      <div className="detail-copy">
        <h3>Project story</h3>
        <p>{project.description}</p>
      </div>
    </section>
  )
}

export default ProjectDetails
