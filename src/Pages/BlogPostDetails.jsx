import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/siteData.js'

function BlogPostDetails() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="section-shell">
        <div className="empty-state">
          <h2>Article not found</h2>
          <Link to="/journal" className="primary-btn">
            Back to journal
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-shell">
      <div className="detail-header">
        <div>
          <div className="eyebrow">{post.category}</div>
          <h2>{post.title}</h2>
        </div>
        <Link to="/journal" className="secondary-btn">
          Back to journal
        </Link>
      </div>

      <div className="detail-hero" style={{ backgroundImage: `url('${post.image}')` }} />

      <div className="detail-copy article-copy">
        <p className="post-date">{post.date}</p>
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default BlogPostDetails
