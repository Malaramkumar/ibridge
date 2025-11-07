import React, { useState } from 'react';
import './InterviewQuestions.scss';
import Nar_Header from '../../components/Nar_Header';

const courses = [
  "Java Training",
  "Python Training",
  "AWS Training",
  "Full-Stack Developer Training",
  "Data Science Training",
  "DevOps Training",
  ".NET Training",
  "Android Training",
  "Web Development training",
  "Cloud Computing",
  "R Language Training",
  "Mobile App Development",
  "VmWare Training",
  "Digital Marketing Training",
  "UI / UX Training"
];

const generateQuestions = (course) => [
  {
    question: `What is ${course} and why is it important?`,
    answer: `${course} provides foundational knowledge and practical experience needed to build strong careers in the domain.`
  },
  {
    question: `What are the prerequisites for learning ${course}?`,
    answer: `Basic understanding of programming, logical thinking, and problem-solving skills are helpful for learning ${course}.`
  },
  {
    question: `What career opportunities does ${course} offer?`,
    answer: `${course} can lead to roles like Developer, Engineer, Analyst, Architect, or Administrator depending on specialization.`
  },
  {
    question: `Is ${course} suitable for beginners?`,
    answer: `Yes, ${course} starts with beginner-level topics and gradually progresses to advanced levels.`
  },
  {
    question: `Does ${course} include hands-on projects?`,
    answer: `Yes, our ${course} includes real-time projects for better understanding and application of concepts.`
  },
  {
    question: `What is the average salary after completing ${course}?`,
    answer: `Average salary ranges from ₹4LPA to ₹15LPA depending on experience and location after completing ${course}.`
  },
  {
    question: `How is this ${course} different from others in the market?`,
    answer: `Our ${course} focuses on practical knowledge, placement support, and updated curriculum designed by industry experts.`
  }
];

const questions = Object.fromEntries(courses.map(course => [course, generateQuestions(course)]));

const InterviewQuestions = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (course, index) => {
    const key = `${course}-${index}`;
    setVisibleAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <Nar_Header />
    <div className="interview-questions-container">
      <h1>💼 Interview Questions by Course</h1>
      {courses.map(course => (
        <div key={course} className="interview-course-section">
          <h2>{course}</h2>
          {questions[course].map((qa, index) => (
            <div
              key={index}
              className="interview-question-item"
              onClick={() => toggleAnswer(course, index)}
            >
              <h3 className="question-title">{qa.question}</h3>
              {visibleAnswers[`${course}-${index}`] && (
                <p className="answer-text">{qa.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    </>
  );
};

export default InterviewQuestions;
