
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        <div className="contact-header">
          <span className="contact-label">Get In Touch</span>

          <h2>
            We're here to
            <span> help you.</span>
          </h2>

          <p>
            Have a question or need assistance? Send us a message
            and our team will be happy to help with your healthcare needs.
          </p>
        </div>

        <div className="contact-content">

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <div className="input-wrapper">
                  <i className="ri-user-line"></i>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <div className="input-wrapper">
                  <i className="ri-mail-line"></i>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <div className="input-wrapper">
                <i className="ri-phone-line"></i>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <div className="input-wrapper textarea-wrapper">
                <i className="ri-message-3-line"></i>

                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <i className="ri-arrow-right-line"></i>
            </button>

            {success && (
              <p className="form-message success">
                <i className="ri-checkbox-circle-line"></i>
                {success}
              </p>
            )}

            {error && (
              <p className="form-message error">
                <i className="ri-error-warning-line"></i>
                {error}
              </p>
            )}
          </form>

          <div className="contact-info">
            <div className="info-header">
              <span>Contact Information</span>
              <h3>Let's start a conversation.</h3>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="ri-map-pin-line"></i>
                </div>

                <div>
                  <small>Visit Us</small>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="ri-phone-line"></i>
                </div>

                <div>
                  <small>Call Us</small>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="ri-mail-line"></i>
                </div>

                <div>
                  <small>Email Us</small>
                  <p>support@healthcare.com</p>
                </div>
              </div>
            </div>

            <div className="map">
              <iframe
                title="Medico location"
                src="https://maps.google.com/maps?q=Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
