import { Link } from "react-router-dom";
import "../../styles/dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <img style={{width:80,height:80,cursor:"pointer",marginLeft:55,borderRadius:100}} src="./hero2.jpg" alt="" />
      <h2 className="logo">Medico+</h2>
      <ul>
        <li><Link to="/dashboard"><i style={{color:"white"}} class="ri-dashboard-fill"></i>  Dashboard</Link></li>
        <li><Link to="/appointments"><i style={{color:"white"}} class="ri-calendar-event-line"></i>   Appointments</Link></li>
        <li><Link to="/doctors"><i style={{color:"white"}} class="ri-stethoscope-fill"></i>  Doctors</Link></li>
        <li><Link to="/services"><i style={{color:"white"}} class="ri-service-fill"></i> Services</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
