import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './JavaObjectivesWithEnquiry.scss';

const JavaObjectivesWithEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    batch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! 🚀');
    // Add form submission logic here
  };

  const objectives = [
    "Build a strong foundation in Java syntax, control structures, and logic.",
    "Understand core programming concepts like data types, variables, and operators.",
    "Master OOP principles: classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
    "Integrate Java with databases using transactions, queries, and exception handling.",
    "Work with Java frameworks like Spring and Spring Boot across core modules and web development.",
    "Use Java Collections for efficient data management with core interfaces and classes.",
    "Learn Hibernate ORM with annotations, HQL, and database mapping techniques."
  ];

  return (
    <>
      <Helmet>
        <title>Java Course Objectives | Narpavi Technologies</title>
        <meta
          name="description"
          content="Explore our Java training objectives that cover OOP, Spring Boot, Hibernate, and more. Enquire now to join top Java classes in Chennai at Narpavi Technologies."
        />
        <meta
          name="keywords"
          content="Java Course Objectives, Java Training Chennai, Spring Boot, Hibernate, OOPs Concepts, Narpavi Technologies"
        />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://www.narpavitech.in/java-course-objectives" />
      </Helmet>

      <section className="java-objectives-enquiry">
        {/* Left: Java Objectives */}
        <div className="objectives">
          <h2> Java Course Objectives</h2>
          <ul>
            {objectives.map((obj, index) => (
              <li key={index}> {obj}</li>
            ))}
          </ul>
        </div>

        {/* Right: Enquiry Form */}
        <div className="enquiry-form">
          <h3>For Course Enquiry</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No*"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="">Select Course</option>
              <option value="Java Training">Java Training</option>
              <option value="Python Training">Python Training</option>
              <option value="AWS Training">AWS Training</option>
              <option value="Full-Stack Developer Training">Full-Stack Developer Training</option>
              <option value="Data Science Training">Data Science Training</option>
              <option value="DevOps Training">DevOps Training</option>
              <option value=".NET Training">.NET Training</option>
              <option value="Android Training">Android Training</option>
              <option value="Web Development Training">Web Development Training</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="R Language Training">R Language Training</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="VmWare Training">VmWare Training</option>
              <option value="Digital Marketing Training">Digital Marketing Training</option>
              <option value="UI / UX Training">UI / UX Training</option>
            </select>

            <select name="batch" value={formData.batch} onChange={handleChange} required>
              <option value="">Select Batch</option>
              <option value="Immediately">Immediately</option>
              <option value="In a Week">In a Week</option>
              <option value="In a Month">In a Month</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default JavaObjectivesWithEnquiry;
