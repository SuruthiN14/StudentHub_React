import CourseCard from "./CourseCard";

function CourseList({ courses, progress, onIncreaseProgress }) {
  return (
    <section className="section" id="courses">
      <div className="section-heading">
        <div>
          <p className="section-label">LEARNING</p>
          <h2>My Courses</h2>
        </div>

        <span className="course-count">
          {courses.length} active courses
        </span>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            name={course.name}
            shortName={course.shortName}
            trainer={course.trainer}
            duration={course.duration}
            progress={progress[course.id]}
            courseId={course.id}
            icon={course.icon}
            onIncreaseProgress={onIncreaseProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
