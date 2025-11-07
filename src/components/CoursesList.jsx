import React from "react";
import { useNavigate } from "react-router-dom";
import { syllabusData } from "../Data/syllabusData";

const CoursesList = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📘 Available Courses</h1>
      <p>Click a course to view its syllabus.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {syllabusData.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/resources/${course.id}`)}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer",
              width: "250px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
