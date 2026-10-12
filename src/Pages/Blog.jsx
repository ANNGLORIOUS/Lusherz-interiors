import { Link } from 'react-router-dom'
import { posts } from '../data/siteData.js'

function Blog() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Journal</div>
          <h2>Notes on interiors, living, and material beauty.</h2>
        </div>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-image" style={{ backgroundImage: `url('${post.image}')` }} />
            <div className="blog-body">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <Link to={`/journal/${post.slug}`}>Read article</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
