import { Scissors, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">
            <h2>
              <Scissors size={25} />
              Haircut <span>Solution</span>
            </h2>

            <p>
              Look Sharp. Feel Confident.
              Your grooming destination in Hyderabad.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <a href="tel:03453569117">
              <Phone size={17} />
              03453569117
            </a>

            <a
              href="https://wa.me/923453569117"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <p>
              <MapPin size={17} />
              Shop #101 Block-B, Latifabad Unit 6,
              Hyderabad, Pakistan.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Haircut Solution.
            All Rights Reserved.
          </p>

          <a href="#home">Back to Top ↑</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;