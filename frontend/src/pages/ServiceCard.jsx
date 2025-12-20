import { useNavigate } from "react-router-dom";
const ServiceCard = ({ service }) => {
const navigate = useNavigate()


const handleClick=()=>{
  navigate("/Appoint")
}
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} />

      <h3>{service.heading}</h3>
      <p>{service.subheading}</p>

      <span className="price">Starting from ${service.price}</span>

      <button onClick={handleClick}>Book Appointment</button>
    </div>
  );
};

export default ServiceCard;
