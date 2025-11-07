import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { syllabusData } from "../Data/syllabusData";

const CourseSyllabus = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = syllabusData.find((c) => c.id === courseId.toLowerCase());

  if (!course) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Course Not Found</h2>
        <button onClick={() => navigate("/resources")}>← Back to Course List</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate("/resources")}>← Back</button>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <hr />
      {course.syllabus.map((unit, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem" }}>
          <h3>{unit.unit}</h3>
          <ul>
            {unit.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseSyllabus;
