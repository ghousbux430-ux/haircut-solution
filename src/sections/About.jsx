
import { motion } from 'framer-motion';
import {
  Scissors,
  Sparkles,
  Heart,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import './About.css';

const features = [
  {
    icon: <Scissors size={23} />,
    title: 'Professional Haircuts',
    description: 'Haircuts and styling designed to suit your personal look.'
  },
  {
    icon: <Sparkles size={23} />,
    title: 'Attention to Detail',
    description: 'A focus on neat styling, finishing and grooming.'
  },
  {
    icon: <Heart size={23} />,
    title: 'Customer Focused',
    description: 'A welcoming experience with care for every customer.'
  }
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">
            <Scissors size={17} />
            GET TO KNOW US
          </span>

          <h2 className="section-title">
            More Than Just a <span className="gold-text">Haircut.</span>
          </h2>

          <p className="section-subtitle">
            Your style, your confidence, our commitment.
          </p>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-small-title">
              WELCOME TO HAIRCUT SOLUTION
            </span>

            <h3>
              Your Look Deserves
              <span> The Best Attention.</span>
            </h3>

            <p>
              At Haircut Solution, we believe a great haircut
              is more than just a style. It is about feeling
              confident and looking your best.
            </p>

            <p>
              We focus on professional grooming, personal
              attention and a comfortable experience for
              every customer who walks through our door.
            </p>

            <div className="about-location">
              <MapPin size={20} />
              <div>
                <strong>Find Us in Hyderabad</strong>
                <span>Latifabad Unit 6, Block-B, Shop # 101</span>
              </div>
            </div>

            <a href="#services" className="about-link">
              Explore Our Services
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-features-header">
              <span>THE HAIRCUT SOLUTION EXPERIENCE</span>
              <h3>Style. Precision. Confidence.</h3>
            </div>

            {features.map((feature, index) => (
              <div className="about-feature" key={feature.title}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-info">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>

                <span className="feature-number">
                  0{index + 1}
                </span>
              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
