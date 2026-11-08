import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import './Contact.css';

const contactDetails = [
  {
    icon: <Phone />,
    title: 'Call Us',
    detail: '03453569117',
    link: 'tel:03453569117',
  },
  {
    icon: <MessageCircle />,
    title: 'WhatsApp',
    detail: '+92 345 3569117',
    link: 'https://wa.me/923453569117',
  },
  {
    icon: <MapPin />,
    title: 'Visit Us',
    detail: 'Shop #101 Block-B, Latifabad Unit 6, Hyderabad',
    link: 'https://www.google.com/maps/search/?api=1&query=Shop+101+Block+B+Latifabad+Unit+6+Hyderabad+Pakistan',
  },
];

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gold-text">GET IN TOUCH</span>

          <h2 className="section-title">
            Let's <span className="gold-text">Connect</span>
          </h2>

          <p className="section-subtitle">
            Have a question or planning your next haircut?
            Get in touch with Haircut Solution.
          </p>
        </motion.div>

        <div className="contact-grid">
          {contactDetails.map((item, index) => (
            <motion.a
              href={item.link}
              target={index === 2 ? '_blank' : undefined}
              rel={index === 2 ? 'noopener noreferrer' : undefined}
              className="contact-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="contact-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.detail}</p>

              <span className="contact-link">
                Get in touch <ArrowUpRight size={17} />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="contact-bottom">
          <Clock size={20} />
          <p>For appointment inquiries, contact us on WhatsApp.</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;