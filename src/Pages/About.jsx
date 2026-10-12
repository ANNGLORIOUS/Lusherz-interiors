const values = [
  {
    title: 'Intentional living',
    description: 'We shape rooms around the rituals of everyday life, ensuring beauty and function coexist naturally.',
  },
  {
    title: 'Material honesty',
    description: 'Natural textures, soft undertones, and tactile finishes create warmth that lasts beyond trends.',
  },
  {
    title: 'Personal clarity',
    description: 'Every selection is guided by your story, not a template, so the outcome feels deeply personal.',
  },
]

const teamMembers = [
  { name: 'Amelia Hart', role: 'Creative Director' },
  { name: 'Rafael Quinn', role: 'Interior Architect' },
  { name: 'Sana Idris', role: 'Styling Lead' },
]

function About() {
  return (
    <>
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Our story</div>
            <h2>Quiet luxury, deeply personal.</h2>
          </div>
        </div>

        <div className="story-grid">
          <div className="story-panel large-panel">
            <p>
              Lusherz Interiors was founded to bring sense, softness, and cultural character into modern living.
              We believe exceptional interiors balance atmosphere with structure — creating rooms that feel composed,
              generous, and unmistakably yours.
            </p>
          </div>
          <div className="story-panel accent-panel">
            <p>
              Our projects span residential homes, boutique hospitality, and private workspaces, always anchored in
              natural materials, warm textures, and layered detailing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="values-title">
        <div className="section-heading">
          <h2 id="values-title">What guides us</h2>
        </div>

        <div className="services-grid">
          {values.map((value) => (
            <article className="service-card" key={value.title}>
              <div className="service-icon" aria-hidden="true">
                ✦
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="team-title">
        <div className="section-heading">
          <h2 id="team-title">Meet the studio</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel" aria-labelledby="about-cta-title">
        <div>
          <h2 id="about-cta-title">Let’s create a home that feels beautifully lived in.</h2>
          <p>From first conversation to final styling, we design with calm direction and enduring elegance.</p>
        </div>
        <button type="button" className="secondary-btn">
          Arrange a consultation
        </button>
      </section>
    </>
  )
}

export default About
