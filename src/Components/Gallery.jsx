import PropTypes from 'prop-types'
import { useState } from 'react'

function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="gallery-thumb"
            onClick={() => {
              setActiveImage(image)
              setIsOpen(true)
            }}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img src={image} alt={`Project view ${index + 1}`} />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={() => setIsOpen(false)} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setIsOpen(false)} aria-label="Close gallery">
              ×
            </button>
            <img src={activeImage} alt="Expanded project view" />
          </div>
        </div>
      )}
    </>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Gallery
