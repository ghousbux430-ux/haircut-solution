import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Reviews.css';

function Reviews() {
  return (
    <section className="reviews-section section" id="reviews">
      <div className="container">

        <motion.div
          className="reviews-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gold-text">CUSTOMER FEEDBACK</span>

          <h2 className="section-title">
            Trusted by Our <span className="gold-text">Customers</span>
          </h2>

          <p className="section-subtitle">
            We appreciate every customer who chooses Haircut Solution
            for their grooming needs.
          </p>

          <div className="rating-card">
            <h3>4.7</h3>

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={25} fill="currentColor" />
              ))}
            </div>

            <p>Based on 40 customer reviews</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Reviews;