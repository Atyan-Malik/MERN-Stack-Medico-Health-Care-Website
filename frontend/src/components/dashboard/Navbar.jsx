
const Navbar = () => {
  return (
    <div className="admin-navbar">
      <div className="admin-navbar-title">
        <span>ADMIN</span>
        <strong>DASHBOARD</strong>
      </div>

      <div className="admin-nav-right">
        <button className="notification-btn" type="button">
          <i className="ri-notification-line"></i>
          <span className="notification-dot"></span>
        </button>

        <div className="admin-profile">
          <img
            src="./hero2.jpg"
            alt="Admin"
            className="avatar"
          />

          <div className="admin-info">
            <strong>Administrator</strong>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

