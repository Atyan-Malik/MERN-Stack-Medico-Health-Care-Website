import { useEffect, useState } from "react";
import ServiceCard from "../pages/ServiceCard"
import "../styles/Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/services");


      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("my data is",data)
      setServices(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  fetchServices();
}, []);


  if (loading) return <h2 className="status">Loading services...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <section className="services-page">
      <div className="services-header">
        <h1>Our Healthcare Services</h1>
        <p>Quality medical services you can trust</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
