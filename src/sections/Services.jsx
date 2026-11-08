
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: "Men's Haircut",
    description: "Clean and stylish haircuts to match your personality.",
    image: "/images/services/mens-haircut.jpg",
  },
  {
    title: "Beard Trimming",
    description: "Keep your beard neat, sharp and well-groomed.",
    image: "/images/services/beard-trimming.jpg",
  },
  {
    title: "Hair Styling",
    description: "Professional styling for a polished, confident look.",
    image: "/images/services/hair-styling.jpg",
  },
  {
    title: "Hair Coloring",
    description: "Refresh your look with professional hair coloring.",
    image: "/images/services/hair-coloring.jpg",
  },
  {
    title: "Facial",
    description: "Give your skin a fresh and well-cared-for look.",
    image: "/images/services/facial.jpg",
  },
  {
    title: "Shaving",
    description: "Enjoy a clean and comfortable shaving experience.",
    image: "/images/services/shaving.jpg",
  },
  {
    title: "Skin Fade / Zero Fade",
    description: "Get a sharp fade with clean and precise detailing.",
    image: "/images/services/skin-fade.jpg",
  },
  {
    title: "Mustache Trimming",
    description: "Keep your mustache shaped and looking sharp.",
    image: "/images/services/mustache-trimming.jpg",
  },
];

function Services() {
  return (
    <section className="services-section section" id="services">
      <div className="container">

        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gold-text">WHAT WE OFFER</span>
          <h2 className="section-title">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Professional grooming services designed to keep you
            looking sharp and feeling confident.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>

                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="service-content">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <a href="#appointment" aria-label={`Book ${service.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
