import "../styles/doctors.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    college: "King Edward Medical University",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54"
  },
  {
    id: 2,
    name: "Dr. Sara Malik",
    college: "Dow Medical College",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464"
  },
  {
    id: 3,
    name: "Dr. Ali Raza",
    college: "Aga Khan University",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
  },
  
  {
    id: 5,
    name: "Dr. Hassan Ahmed",
    college: "Allama Iqbal Medical College",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    id: 6,
    name: "Dr. Ayesha Siddiq",
    college: "Liaquat University of Medical Sciences",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
  },
  {
    id: 7,
    name: "Dr. Usman Tariq",
    college: "Rawalpindi Medical University",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
  },
  {
    id: 8,
    name: "Dr. Maryam Iqbal",
    college: "Nishtar Medical University",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47"
  },
 
  {
    id: 10,
    name: "Dr. Hina Aslam",
    college: "Islamabad Medical & Dental College",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136"
  },
  {
    id: 11,
    name: "Dr. Salman Farooq",
    college: "Khyber Medical College",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309"
  },
  {
    id: 12,
    name: "Dr. Noor ul Ain",
    college: "Jinnah Sindh Medical University",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde"
  }
];


const Doctors = () => {
  return (
    <div className="doctors-page">
      <h2 className="doctors-title">Our Doctors</h2>

      <div className="doctors-grid">
        {doctorsData.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
