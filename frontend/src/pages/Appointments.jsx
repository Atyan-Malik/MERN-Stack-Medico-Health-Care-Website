import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import "../styles/appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments", err);
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

        <h2 className="page-title">All Appointments</h2>

        {loading ? (
          <p>Loading appointments...</p>
        ) : (
          <div className="appointments-grid">
            {appointments.map((appt) => (
              <div className="appointment-card" key={appt._id}>
                <div className="card-header">
                  <h3>{appt.name}</h3>
                  <span
                    className={`badge ${
                      appt.status === "pending" ? "pending" : "done"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>

                <p><strong><i style={{color:"navy"}} class="ri-phone-line"></i>Phone:</strong> {appt.phone}</p>
                <p><strong><i style={{color:"navy"}} class="ri-calendar-fill"></i>Date:</strong> {new Date(appt.date).toLocaleDateString()}</p>
                <p><strong><i style={{color:"navy"}} class="ri-time-line"></i> Time:</strong> {appt.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
