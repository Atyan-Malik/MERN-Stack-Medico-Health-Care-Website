
import ServiceCard from "../pages/ServiceCard";
import "../styles/Services.css";

const dummyServices = [
  {
    _id: "service-1",
    title: "General Consultation",
    heading: "General Healthcare",
    subheading:
      "Professional consultation for routine checkups, common health concerns, and personalized medical guidance.",
    price: 1500,
    image: "/ser1.jpg",
  },
  {
    _id: "service-2",
    title: "Emergency Care",
    heading: "Emergency Services",
    subheading:
      "Quick and reliable medical assistance for urgent health conditions and emergency situations.",
    price: 2500,
    image: "/ser2.jpg",
  },
  {
    _id: "service-3",
    title: "Health Checkup",
    heading: "Complete Health Checkup",
    subheading:
      "Comprehensive health screening to monitor your overall wellbeing and identify potential health concerns.",
    price: 2000,
    image: "/ser3.jpg",
  },
  {
    _id: "service-4",
    title: "Specialist Consultation",
    heading: "Specialist Consultation",
    subheading:
      "Get professional advice from experienced specialists with care tailored to your individual needs.",
    price: 3000,
    image: "/ser4.jpg",
  },
  {
    _id: "service-5",
    title: "Diagnostic Services",
    heading: "Medical Diagnostics",
    subheading:
      "Reliable diagnostic services that support accurate medical evaluation and informed treatment decisions.",
    price: 1800,
    image: "/ser5.jpg",
  },
  {
    _id: "service-6",
    title: "Family Healthcare",
    heading: "Family Healthcare",
    subheading:
      "Convenient healthcare services designed to support the health and wellbeing of your entire family.",
    price: 2200,
    image: "/ser6.jpg",
  },
];

const Services = () => {
  /*
  Backend fetching temporarily disabled for frontend hosting.

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        console.log("Services:", data);

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
  */

  return (
    <section className="services-page">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">
            What We Provide
          </span>

          <h2>
            Our Healthcare
            <span> Services</span>
          </h2>

          <p>
            Professional healthcare services designed to provide
            reliable, comfortable, and compassionate care for you
            and your family.
          </p>
        </div>

        <div className="services-grid">
          {dummyServices.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
