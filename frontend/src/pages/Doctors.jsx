
import "../styles/doctors.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    college: "King Edward Medical University",
    image:
      "/doc1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sara Malik",
    college: "Dow Medical College",
    image:
      "/ser4.jpg",
  },
  {
    id: 3,
    name: "Dr. Ali Raza",
    college: "Aga Khan University",
    image:
      "doc2.jpg",
  },
  {
    id: 5,
    name: "Dr. Hassan Ahmed",
    college: "Allama Iqbal Medical College",
    image:
      "doc1.jpg",
  },
  {
    id: 6,
    name: "Dr. Ayesha Siddiq",
    college: "Liaquat University of Medical Sciences",
    image:
      "doc3.jpg",
  },
  {
    id: 7,
    name: "Dr. Usman Tariq",
    college: "Rawalpindi Medical University",
    image:
      "ser1.jpg",
  },
  {
    id: 8,
    name: "Dr. Maryam Iqbal",
    college: "Nishtar Medical University",
    image:
      "ser3.jpg",
  },
  {
    id: 10,
    name: "Dr. Hina Aslam",
    college: "Islamabad Medical & Dental College",
    image:
      "ser6.jpg",
  },
 
];

const Doctors = () => {
  return (
    <section className="doctors-page">
      <div className="doctors-container">
        <div className="doctors-header">
          <span className="doctors-label">Meet Our Specialists</span>

          <h2>
            Our Trusted
            <span> Doctors</span>
          </h2>

          <p>
            Meet our experienced healthcare professionals dedicated to
            providing compassionate, reliable, and patient-focused care.
          </p>
        </div>

        <div className="doctors-grid">
          {doctorsData.map((doctor) => (
            <article className="doctor-card" key={doctor.id}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />

                <div className="doctor-overlay">
                  <span>
                    <i className="ri-stethoscope-line"></i>
                    Medical Specialist
                  </span>
                </div>
              </div>

              <div className="doctor-content">
                <h3>{doctor.name}</h3>

                <div className="doctor-college">
                  <i className="ri-hospital-line"></i>
                  <p>{doctor.college}</p>
                </div>

                <div className="doctor-footer">
                  <span>
                    <i className="ri-checkbox-circle-line"></i>
                    Verified Professional
                  </span>

                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;