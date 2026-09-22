import { useState } from "react";

function Assignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React JS Assignment 1",
      course: "React JS",
      dueDate: "Sep 25, 2026",
      status: "Pending",
      marks: null,
    },
    {
      id: 2,
      title: "Java Full Stack Quiz",
      course: "Java Full Stack",
      dueDate: "Sep 28, 2026",
      status: "Submitted",
      marks: 85,
    },
    {
      id: 3,
      title: "SQL Assessment",
      course: "SQL",
      dueDate: "Oct 02, 2026",
      status: "Pending",
      marks: null,
    },
  ]);

  const submitAssignment = (id) => {
    setAssignments((current) =>
      current.map((assignment) =>
        assignment.id === id
          ? {
              ...assignment,
              status: "Submitted",
            }
          : assignment
      )
    );
  };

  return (
    <section className="section" id="assignments">
      <div className="section-heading">
        <div>
          <p className="section-label">ACADEMICS</p>
          <h2>Assignments</h2>
        </div>

        <span className="course-count">
          {assignments.length} assignments
        </span>
      </div>

      <div className="assignments-grid">
        {assignments.map((assignment) => (
          <div className="assignment-card" key={assignment.id}>
            <div className="assignment-header">
              <div>
                <span className="assignment-course">
                  {assignment.course}
                </span>

                <h3>{assignment.title}</h3>
              </div>

              <span
                className={`assignment-status ${
                  assignment.status === "Submitted"
                    ? "submitted"
                    : "pending"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <div className="assignment-info">
              <div>
                <span>Due Date</span>
                <strong>{assignment.dueDate}</strong>
              </div>

              <div>
                <span>Marks</span>
                <strong>
                  {assignment.marks !== null
                    ? `${assignment.marks}/100`
                    : "—"}
                </strong>
              </div>
            </div>

            <button
              className="submit-assignment-btn"
              onClick={() => submitAssignment(assignment.id)}
              disabled={assignment.status === "Submitted"}
            >
              {assignment.status === "Submitted"
                ? "✓ Submitted"
                : "Submit Assignment"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Assignments;
