function ProgressCard({ progress, courses }) {
  return (
    <section className="section" id="progress">
      <div className="section-heading">
        <div>
          <p className="section-label">PERFORMANCE</p>
          <h2>Overall Progress</h2>
        </div>
      </div>

      <div className="overall-card">
        <div className="overall-intro">
          <div className="overall-circle">
            <span>
              {Math.round(
                Object.values(progress).reduce((a, b) => a + b, 0) /
                  Object.values(progress).length
              )}
              %
            </span>
          </div>

          <div>
            <span className="overall-small">CURRENT AVERAGE</span>
            <h3>You're making great progress!</h3>
            <p>Keep going to complete all your courses.</p>
          </div>
        </div>

        <div className="overall-courses">
          {courses.map((course) => (
            <div className="overall-course" key={course.id}>
              <div className="overall-header">
                <div className="overall-course-name">
                  <span className={`tiny-dot ${course.id}`}></span>
                  <span>{course.name}</span>
                </div>

                <strong>{progress[course.id]}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className={`progress-fill ${course.id}`}
                  style={{ width: `${progress[course.id]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgressCard;
