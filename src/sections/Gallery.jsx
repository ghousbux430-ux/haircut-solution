
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  {
    image: '/images/services/mens-haircut.jpg',
    title: "Modern Haircuts",
  },
  {
    image: '/images/services/beard-trimming.jpg',
    title: "Beard Grooming",
  },
  {
    image: '/images/services/skin-fade.jpg',
    title: "Skin Fade",
  },
  {
    image: '/images/services/hair-styling.jpg',
    title: "Hair Styling",
  },
  {
    image: '/images/services/hair-coloring.jpg',
    title: "Hair Coloring",
  },
  {
    image: '/images/services/facial.jpg',
    title: "Facial Care",
  },
];

function Gallery() {
  return (
    <section className="gallery-section section" id="gallery">
      <div className="container">

        <motion.div
          className="gallery-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gold-text">OUR STYLE COLLECTION</span>
          <h2 className="section-title">
            Style <span className="gold-text">Inspiration</span>
          </h2>
          <p className="section-subtitle">
            Explore different grooming styles and find the look
            that matches your personality.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <motion.div
              className="gallery-item"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
