import BookingForm from '../Components/BookingForm.jsx'

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

          <BookingForm />
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
