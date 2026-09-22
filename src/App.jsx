import { useState } from "react";

import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import CourseList from "./components/CourseList";
import Assignments from "./components/Assignments";
import ProgressCard from "./components/ProgressCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // =====================================================
  // COURSE PROGRESS STATE
  // =====================================================

  const [progress, setProgress] = useState({
    java: 75,
    react: 60,
    sql: 90,
  });

  // Increase course progress by 5%
  const increaseProgress = (course) => {
    setProgress((currentProgress) => ({
      ...currentProgress,
      [course]: Math.min(currentProgress[course] + 5, 100),
    }));
  };

  // Reset all course progress
  const resetProgress = () => {
    setProgress({
      java: 75,
      react: 60,
      sql: 90,
    });
  };

  // =====================================================
  // STUDENT DATA
  // =====================================================

  const student = {
    name: "Suruthi",
    id: "ST101",
    department: "Computer Science",
    college: "Kamaraj Engineering College",
    email: "suruthi@gmail.com",
  };

  // =====================================================
  // COURSE DATA
  // =====================================================

  const courses = [
    {
      id: "java",
      name: "Java Full Stack",
      shortName: "Java",
      trainer: "Bharathi",
      duration: "3 Months",
      icon: "☕",
    },
    {
      id: "react",
      name: "React JS",
      shortName: "React",
      trainer: "Arun",
      duration: "2 Months",
      icon: "⚛",
    },
    {
      id: "sql",
      name: "SQL",
      shortName: "SQL",
      trainer: "Divya",
      duration: "1 Month",
      icon: "◈",
    },
  ];

  // =====================================================
  // CALCULATIONS
  // =====================================================

  const averageProgress = Math.round(
    Object.values(progress).reduce((a, b) => a + b, 0) /
      Object.values(progress).length
  );

  const completedCourses = Object.values(progress).filter(
    (value) => value === 100
  ).length;

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="app">

      {/* =================================================
          HEADER
      ================================================= */}

      <Header student={student} />

      <main className="dashboard">

        {/* =================================================
            WELCOME SECTION
        ================================================= */}

        <section className="welcome-section">
          <div>
            <p className="eyebrow">STUDENT PORTAL</p>

            <h1>
              Welcome back, <span>{student.name}</span>
            </h1>

            <p className="welcome-text">
              Keep learning, keep growing. Here's your academic
              progress at a glance.
            </p>
          </div>

          <div className="student-badge">
            <div className="avatar">
              {student.name.charAt(0)}
            </div>

            <div>
              <strong>{student.name}</strong>
              <span>{student.id}</span>
            </div>
          </div>
        </section>

        {/* =================================================
            STATISTICS
        ================================================= */}

        <section className="stats-grid">

          {/* Total Courses */}
          <div className="stat-card stat-blue">
            <div className="stat-icon">📚</div>

            <div>
              <span>Total Courses</span>
              <strong>{courses.length}</strong>
            </div>
          </div>

          {/* Average Progress */}
          <div className="stat-card stat-orange">
            <div className="stat-icon">📈</div>

            <div>
              <span>Average Progress</span>
              <strong>{averageProgress}%</strong>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="stat-card stat-green">
            <div className="stat-icon">✓</div>

            <div>
              <span>Completed</span>
              <strong>{completedCourses}</strong>
            </div>
          </div>

          {/* Department */}
          <div className="stat-card stat-purple">
            <div className="stat-icon">🎓</div>

            <div>
              <span>Department</span>

              <strong className="department-value">
                CSE
              </strong>
            </div>
          </div>

        </section>

        {/* =================================================
            STUDENT PROFILE
        ================================================= */}

        <StudentProfile student={student} />

        {/* =================================================
            MY COURSES
        ================================================= */}

        <CourseList
          courses={courses}
          progress={progress}
          onIncreaseProgress={increaseProgress}
        />

        {/* =================================================
            ASSIGNMENTS
        ================================================= */}

        <Assignments />

        {/* =================================================
            OVERALL PROGRESS
        ================================================= */}

        <ProgressCard
          progress={progress}
          courses={courses}
        />

        {/* =================================================
            RESET PROGRESS
        ================================================= */}

        <div className="reset-container">
          <button
            className="reset-btn"
            onClick={resetProgress}
          >
            ↻ Reset Progress
          </button>
        </div>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default App;
