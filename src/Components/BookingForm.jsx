import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  projectType: '',
  timeline: '',
  brief: '',
}

function validate(values) {
  const nextErrors = {}

  if (!values.name.trim()) nextErrors.name = 'Please share your name.'
  if (!values.email.trim()) {
    nextErrors.email = 'Please add your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType.trim()) nextErrors.projectType = 'Tell us what kind of project this is.'
  if (!values.timeline.trim()) nextErrors.timeline = 'Please choose a rough timeline.'
  if (!values.brief.trim() || values.brief.trim().length < 20) {
    nextErrors.brief = 'A short project brief helps us prepare the right consultation.'
  }

  return nextErrors
}

function BookingForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <small>{errors.name}</small>}
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Project type</span>
          <input
            type="text"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            placeholder="Residential, hospitality, commercial..."
          />
          {errors.projectType && <small>{errors.projectType}</small>}
        </label>

        <label className="field">
          <span>Timeline</span>
          <input
            type="text"
            name="timeline"
            value={values.timeline}
            onChange={handleChange}
            placeholder="e.g. Q4 2025"
          />
          {errors.timeline && <small>{errors.timeline}</small>}
        </label>
      </div>

      <label className="field">
        <span>Project brief</span>
        <textarea
          name="brief"
          rows="5"
          value={values.brief}
          onChange={handleChange}
          placeholder="Tell us about the space, style direction, and goals."
        />
        {errors.brief && <small>{errors.brief}</small>}
      </label>

      <button type="submit" className="primary-btn submit-btn">
        Send inquiry
      </button>

      {submitted && <p className="form-success">Thanks! Your consultation request has been received.</p>}
    </form>
  )
}

export default BookingForm
