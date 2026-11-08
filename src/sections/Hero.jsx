
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Star,
    Scissors
} from 'lucide-react';
import './Hero.css';

const whatsappLink =
    'https://wa.me/923453569117?text=Hello%20Haircut%20Solution!%20I%20want%20to%20book%20an%20appointment.';

function Hero() {
    return (
        <section className="hero" id="home">

            {/* Salon Background Image */}
            <div className="hero-background">
                <img
                    src="/images/salon-persons.png"
                    alt="Haircut Solution barber and customer"
                />
            </div>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>

            {/* Decorative Corners */}
            <div className="hero-decoration hero-decoration-top"></div>
            <div className="hero-decoration hero-decoration-bottom"></div>

            <div className="hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="hero-label">
                        <Scissors size={20} />
                        <span>PREMIUM GROOMING EXPERIENCE</span>
                    </div>

                    <h1>
                        Look Sharp.
                        <br />
                        Feel <span>Confident.</span>
                    </h1>

                    <p className="hero-description">
                        Discover your style with professional haircuts,
                        modern grooming and attention to every detail.
                        Your confidence starts here.
                    </p>

                    <div className="hero-actions">

                        <a
                            href="#appointment"
                            className="hero-btn primary-btn"
                        >
                            Book Appointment
                            <ArrowUpRight size={19} />
                        </a>

                        <a
                            href="#services"
                            className="hero-btn secondary-btn"
                        >
                            Explore Services
                        </a>

                    </div>

                    <div className="hero-rating">

                        <div className="rating-stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={23}
                                    fill="currentColor"
                                />
                            ))}
                        </div>

                        <strong className="rating-score">4.7/5</strong>

                        <span className="rating-divider"></span>

                        <span className="rating-caption">
                            Based on 40 customer reviews
                        </span>

                    </div>

                </motion.div>

            </div>

            {/* Bottom Decorative Caption */}
            <div className="hero-bottom-caption">
                <span></span>
                STYLE <b>•</b> CONFIDENCE
                <span></span>
            </div>

        </section>
    );
}

export default Hero;
