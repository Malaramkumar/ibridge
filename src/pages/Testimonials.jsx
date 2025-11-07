import React from 'react';
import './Testimonials.scss';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Anitha S.",
    title: "Placed in Infosys",
    feedback:
      "Narpavi Technologies transformed my confidence. The trainers explained Core Java with real examples and guided me through project work and interview preparation. Highly recommended!",
  },
  {
    name: "Karthik R.",
    title: "Software Developer at ZOHO",
    feedback:
      "The best part of this training was the practical approach. The real-time projects and personal attention helped me crack technical interviews easily. Great experience!",
  },
  {
    name: "Deepika M.",
    title: "Working at CTS",
    feedback:
      "Thanks to Narpavi Technologies, I gained solid Java knowledge. Their placement support and expert trainers made a huge difference in my career journey.",
  },
];

const coursePoints = [
  "Introduction to Java Programming and Environment Setup",
  "Data Types, Variables, and Operators",
  "Control Statements and Looping Mechanisms",
  "Object-Oriented Programming (OOP) Concepts",
  "Classes, Objects, Constructors, and Methods",
  "Inheritance, Polymorphism, Encapsulation & Abstraction",
  "Exception Handling and Error Management",
  "Collections Framework and Generics",
  "Multithreading and Concurrency",
  "Input/Output Streams and File Handling",
  "Database Connectivity (JDBC)",
  "Real-Time Project Implementation",
  "Interview Questions and Coding Exercises",
  "Best Practices and Performance Optimization",
];

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    }
  })
};

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Student Testimonials - Narpavi Technologies Java Training</title>
        <meta
          name="description"
          content="Read success stories from students who completed Core Java training at Narpavi Technologies and landed jobs in top IT companies like Infosys, Zoho, and CTS."
        />
        <meta name="keywords" content="Java Training Chennai, Narpavi Technologies, Student Reviews, Placement Success, Core Java Course" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Student Testimonials - Narpavi Technologies" />
        <meta property="og:description" content="Discover how our Java training helped students get placed in top IT companies with real-time project experience and interview preparation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://narpavitech.in/images/java-course.png" />
        <meta property="og:url" content="https://narpavitech.in/testimonials" />
      </Helmet>

      <section className="testimonials-section" id="testimonial">
        <h2 className="section-title">Student Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, index) => (
            <div className="card" key={index}>
              <div className="profile">
                <div className="avatar">{t.name.charAt(0)}</div>
                <div className="info">
                  <h4>{t.name}</h4>
                  <span>{t.title}</span>
                </div>
              </div>
              <p className="feedback">“{t.feedback}”</p>
            </div>
          ))}
        </div>

        <section className="curriculum-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Core Java Online Training – Course Curriculum
          </motion.h2>

          <motion.p
            className="intro-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            This hands-on curriculum is designed to help both beginners and experienced developers master Java with confidence through practical learning:
          </motion.p>

          <div className="curriculum-grid">
            {coursePoints.map((item, index) => (
              <motion.div
                key={index}
                className="curriculum-card"
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "#ffedd5",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)"
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.p
            className="note-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <strong>Note:</strong> All modules are updated frequently to align with real-world development and the latest Java versions.
          </motion.p>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
