import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle } from 'lucide-react';
import './Appointment.css';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Haircut Solution!

I would like to request an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Please let me know if this time is available. Thank you!`;

    const whatsappURL = `https://wa.me/923453569117?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="appointment-section section" id="appointment">
      <div className="container">

        <motion.div
          className="appointment-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gold-text">BOOK YOUR VISIT</span>

          <h2 className="section-title">
            Make an <span className="gold-text">Appointment</span>
          </h2>

          <p className="section-subtitle">
            Choose your preferred service and send us
            your appointment request through WhatsApp.
          </p>
        </motion.div>

        <motion.form
          className="appointment-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Choose a service</option>
              <option>Men's Haircut</option>
              <option>Beard Trimming</option>
              <option>Hair Styling</option>
              <option>Hair Coloring</option>
              <option>Facial</option>
              <option>Shaving</option>
              <option>Skin Fade / Zero Fade</option>
              <option>Mustache Trimming</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="appointment-button">
            <MessageCircle size={19} />
            Send Appointment Request
          </button>

          <p className="appointment-note">
            <CalendarDays size={16} />
            Your appointment will be confirmed by our team.
          </p>

        </motion.form>

      </div>
    </section>
  );
}

export default Appointment;