function Header({ student }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark">S</div>

        <div className="brand-text">
          <strong>Student<span>Hub</span></strong>
          <small>Academic Portal</small>
        </div>
      </div>

      <nav className="desktop-nav">
        <a className="active" href="#dashboard">
          Dashboard
        </a>
        <a href="#courses">Courses</a>
        <a href="#progress">Progress</a>
      </nav>

      <div className="header-profile">
        <div className="mini-avatar">
          {student?.name?.charAt(0) || "S"}
        </div>

        <div className="header-profile-info">
          <strong>{student?.name || "Student"}</strong>
          <span>{student?.id || "ST101"}</span>
        </div>

        <span className="online-dot"></span>
      </div>
    </header>
  );
}

export default Header;
