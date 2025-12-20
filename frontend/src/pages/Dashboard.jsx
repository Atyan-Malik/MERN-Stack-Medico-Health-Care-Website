import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import Navbar from "../components/dashboard/Navbar.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Failed to fetch appointments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Stats
  const totalAppointments = appointments.length;

  const todayAppointments = appointments.filter(
    (a) => new Date(a.date).toDateString() === new Date().toDateString()
  );

  const pendingAppointments = appointments.filter(
    (a) => a.status === "pending"
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        {/* Stats Cards */}
        <div className="stats">
          <StatCard
            title="Total Appointments"
            value={totalAppointments}
            icon={<i style={{ fontSize: 40 }} class="ri-user-line"></i>}
          />
          <StatCard
            title="Doctors"
            value="10"
            icon={<i style={{ fontSize: 40 }} class="ri-stethoscope-fill"></i>}
          />
          <StatCard
            title="Today Appointments"
            value={todayAppointments.length}
            icon={
              <i style={{ fontSize: 40 }} class="ri-calendar-event-fill"></i>
            }
          />
          <StatCard
            title="Pending"
            value={pendingAppointments.length}
            icon={<i style={{ fontSize: 40 }} class="ri-pass-pending-fill"></i>}
          />
        </div>

        {/* Appointment Table */}
        <div className="table-section">
          <h3>Recent Appointments</h3>

          {loading ? (
            <p>Loading appointments...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice(0, 6).map((appt) => (
                  <tr key={appt._id}>
                    <td>{appt.name}</td>
                    <td>{appt.phone}</td>
                    <td>{new Date(appt.date).toLocaleDateString()}</td>
                    <td>{appt.time}</td>
                    <td
                      className={`status ${
                        appt.status === "pending" ? "pending" : "done"
                      }`}
                    >
                      {appt.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
