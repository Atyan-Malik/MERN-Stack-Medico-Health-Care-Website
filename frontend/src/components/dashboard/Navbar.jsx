const Navbar = () => {
  return (
    <div className="navbar">
      ADMIN DASHBOARD
      <div className="nav-right">
        <span ><i style={{color:"orange"}} class="ri-notification-line"></i></span>
        <img style={{width:50,height:50,cursor:"pointer"}}
        src="./hero2.jpg"
          alt="admin"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
