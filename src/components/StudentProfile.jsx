function StudentProfile({ student }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="section-label">PERSONAL INFORMATION</p>
          <h2>Student Profile</h2>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-identity">
          <div className="large-avatar">
            {student.name.charAt(0)}
          </div>

          <div>
            <h3>{student.name}</h3>
            <p>{student.department}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

          <div className="profile-item">
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div className="profile-item">
            <span>College</span>
            <strong>{student.college}</strong>
          </div>

          <div className="profile-item">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
