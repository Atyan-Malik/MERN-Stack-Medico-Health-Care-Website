
import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import "../styles/appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/appointments");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="page-title">
          <span className="page-label">Management</span>
          <h2>All Appointments</h2>
          <p>View and manage all patient appointment requests.</p>
        </div>

        {loading ? (
          <div className="appointments-status">
            <div className="appointments-spinner"></div>
            <p>Loading appointments...</p>
          </div>
        ) : error ? (
          <div className="appointments-status error">
            <i className="ri-error-warning-line"></i>
            <p>{error}</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="appointments-status empty">
            <i className="ri-calendar-line"></i>
            <h3>No Appointments Found</h3>
            <p>New appointments will appear here.</p>
          </div>
        ) : (
          <div className="appointments-grid">
            {appointments.map((appt) => (
              <div className="appointment-card" key={appt._id}>
                <div className="card-header">
                  <div className="patient-info">
                    <div className="patient-icon">
                      <i className="ri-user-line"></i>
                    </div>

                    <div>
                      <h3>{appt.name}</h3>
                      <span>Patient</span>
                    </div>
                  </div>

                  <span
                    className={`badge ${
                      appt.status === "pending" ? "pending" : "done"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>

                <div className="appointment-details">
                  <p>
                    <i className="ri-phone-line"></i>
                    <strong>Phone</strong>
                    <span>{appt.phone}</span>
                  </p>

                  <p>
                    <i className="ri-calendar-fill"></i>
                    <strong>Date</strong>
                    <span>
                      {new Date(appt.date).toLocaleDateString()}
                    </span>
                  </p>

                  <p>
                    <i className="ri-time-line"></i>
                    <strong>Time</strong>
                    <span>{appt.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
