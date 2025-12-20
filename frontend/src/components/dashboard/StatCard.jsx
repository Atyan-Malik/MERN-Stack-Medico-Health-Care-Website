const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
      <span className="icon">{icon}</span>
    </div>
  );
};

export default StatCard;
