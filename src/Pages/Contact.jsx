const contactInfo = [
  { label: 'Email', value: 'hello@lusherzinteriors.com' },
  { label: 'Phone', value: '+44 20 5555 0194' },
  { label: 'Studio', value: '14 Mercer Lane, London' },
]

function Contact() {
  return (
    <>
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2>Let’s plan your next beautiful space.</h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            {contactInfo.map((item) => (
              <div className="info-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <form className="contact-form">
            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>

            <label className="field">
              <span>Project type</span>
              <input type="text" placeholder="Residential, hospitality, commercial..." />
            </label>

            <label className="field">
              <span>Tell us about your project</span>
              <textarea rows="5" placeholder="We’re looking for a warm, modern family home with natural textures and a relaxed luxury feel." />
            </label>

            <button type="submit" className="primary-btn submit-btn">
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="cta-panel" aria-labelledby="contact-cta-title">
        <div>
          <h2 id="contact-cta-title">Booking is open for autumn consultations.</h2>
          <p>We’d love to hear about your project and help shape a tailored design journey.</p>
        </div>
        <button type="button" className="secondary-btn">
          Book a consult
        </button>
      </section>
    </>
  )
}

export default Contact
