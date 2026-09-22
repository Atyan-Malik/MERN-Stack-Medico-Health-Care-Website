
import { useState } from "react";
import "../styles/Appoint.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
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
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to create appointment");
      }

      const data = await res.json();

      console.log("Appointment booked:", data);

      setSuccess("Your appointment has been booked successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      console.error("Error booking appointment:", err);
      setError("Failed to book your appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-header">
          <span className="appointment-label">Schedule Your Visit</span>

          <h2>
            Book an
            <span> Appointment</span>
          </h2>

          <p>
            Choose a convenient date and time, and our healthcare team
            will be ready to assist you.
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="appointment-form-grid">
            <div className="form-group">
              <label htmlFor="appointment-name">Full Name</label>

              <div className="appointment-input">
                <i className="ri-user-line"></i>

                <input
                  id="appointment-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-email">Email Address</label>

              <div className="appointment-input">
                <i className="ri-mail-line"></i>

                <input
                  id="appointment-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-phone">Phone Number</label>

              <div className="appointment-input">
                <i className="ri-phone-line"></i>

                <input
                  id="appointment-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-date">Preferred Date</label>

              <div className="appointment-input">
                <i className="ri-calendar-line"></i>

                <input
                  id="appointment-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-time">Preferred Time</label>

              <div className="appointment-input">
                <i className="ri-time-line"></i>

                <input
                  id="appointment-time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="appointment-message">Message</label>

              <div className="appointment-input textarea-input">
                <i className="ri-message-3-line"></i>

                <textarea
                  id="appointment-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional information"
                  rows="5"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="appointment-submit"
            disabled={loading}
          >
            <span>
              {loading ? "Booking Appointment..." : "Book Appointment"}
            </span>

            <i className="ri-arrow-right-line"></i>
          </button>

          {success && (
            <div className="appointment-message success">
              <i className="ri-checkbox-circle-line"></i>
              <span>{success}</span>
            </div>
          )}

          {error && (
            <div className="appointment-message error">
              <i className="ri-error-warning-line"></i>
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
