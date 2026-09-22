function CourseCard({
  name,
  shortName,
  trainer,
  duration,
  progress,
  courseId,
  icon,
  onIncreaseProgress,
}) {
  const handleIncrease = () => {
    onIncreaseProgress(courseId);
  };

  const isCompleted = progress >= 100;

  return (
    <article className={`course-card course-${courseId}`}>
      <div className="course-top">
        <div className="course-icon">{icon}</div>

        <span className={`course-status ${isCompleted ? "completed" : ""}`}>
          {isCompleted ? "Completed" : "In Progress"}
        </span>
      </div>

      <div className="course-title">
        <span>{shortName || "COURSE"}</span>
        <h3>{name}</h3>
      </div>

      <div className="course-meta">
        <div>
          <span>Trainer</span>
          <strong>{trainer}</strong>
        </div>

        <div>
          <span>Duration</span>
          <strong>{duration}</strong>
        </div>
      </div>

      <div className="course-progress">
        <div className="progress-label">
          <span>Course progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <button
        className="increase-btn"
        onClick={handleIncrease}
        disabled={isCompleted}
      >
        {isCompleted ? "✓ Course Completed" : "+ Increase Progress"}
      </button>
    </article>
  );
}

export default CourseCard;
