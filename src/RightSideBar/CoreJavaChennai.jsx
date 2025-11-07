import React from 'react';
import './CoreJavaCourse.scss';
import CoreImage from '../assets/Corelist.svg';
import { motion } from 'framer-motion';
import CareerBenefits from '../assets/careerbenefits.jpg';
import { Helmet } from 'react-helmet';

const CoreJavaCourse = () => {
  const listItems = [
    "Java Fundamentals & Syntax",
    "Object-Oriented Programming Concepts (OOPS)",
    "Classes, Objects, Methods & Constructors",
    "Inheritance, Polymorphism & Encapsulation",
    "Interfaces & Abstract Classes",
    "Exception Handling & Collections Framework",
    "Multithreading & Concurrency Basics",
    "File Handling & Input/Output Streams",
    "Basic JDBC for Database Connectivity",
    "Real-Time Coding, Debugging & Best Practices",
  ];

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 60,
      },
    }),
  };

  return (
    <div>
    <div className="page-wrapper">
      <Helmet>
        <title>Core Java Training in Chennai | Narpavi Technologies</title>
        <meta
          name="description"
          content="Join the best Core Java course in Chennai at Narpavi Technologies. Learn Java from scratch with certification, real-time projects & placement support."
        />
        <meta
          name="keywords"
          content="Core Java Course Chennai, Java Training in Chennai, Java Certification, Java Classes, Java with Placement"
        />
        <meta property="og:title" content="Core Java Training in Chennai with Placement" />
        <meta
          property="og:description"
          content="Kickstart your software career with our hands-on Core Java training in Chennai. Classroom & online options available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/java-core-course" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/java-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/java-core-course" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Core Java Training in Chennai",
            "description": "Learn Core Java from industry experts at Narpavi Technologies. Get hands-on training, certification prep, and placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "sameAs": "https://www.narpavitech.in"
            }
          }
        `}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Narpavi Technologies",
            "url": "https://www.narpavitech.in",
            "logo": "https://www.narpavitech.in/logo.png",
            "sameAs": [
              "https://www.facebook.com/narpavitech",
              "https://www.linkedin.com/company/narpavi-technologies"
            ]
          }
        `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is this Core Java course beginner-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Our course is designed for complete beginners. No prior programming experience is required."
                }
              },
              {
                "@type": "Question",
                "name": "Can I take this course online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer both classroom and online batches with flexible timings to suit your schedule."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get a certificate after completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you will receive a course completion certificate. We also guide you for Oracle Certified Java certifications."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with Java certification preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide complete guidance, mock tests, and study materials to help you pass global Java certification exams like OCA/OCP."
                }
              },
              {
                "@type": "Question",
                "name": "Is placement assistance provided?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer 100% placement support, resume building, mock interviews, and job referrals."
                }
              },
              {
                "@type": "Question",
                "name": "Which companies do you have placement tie-ups with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our students have been placed in top IT companies including TCS, Infosys, Cognizant, HCL, and Accenture."
                }
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <div className="main1">
        <div className="core-java-container">
          {/* Hero Section */}
          <div className="core-java-hero">
            <h1>Core Java Training <br />in Chennai with Placement</h1>
            <div className="cta-buttons">
              <button className="orange-btn">Sign Up For Free</button>
              <button className="outline-btn">Request Demo</button>
            </div>
          </div>

          {/* Video Section */}
          <div className="course-video-wrapper">
            <video autoPlay loop muted playsInline>
              <source src="/Videos/javacore1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Course Content */}
          <div className="core-java-content">
            <div className="java-hero-wrapper">
              <div className="java-hero-image">
                <img src="/Videos/java_BG.gif" alt="Java Animation" />
                <div className="java-hero-textbox">
                  <h2>Industry-Focused Core Java Course in Chennai - Classroom & Online</h2>
                  <p>
                    Looking to build strong programming fundamentals and kick-start your career in software development?
                    Join the Best Core Java Training in Chennai at Narpavi Technologies, designed for beginners and working professionals to master Java from scratch.
                  </p>
                  <p>
                    Our hands-on, job-oriented Core Java course will help you gain real-time coding skills, understand object-oriented programming (OOP) concepts, and prepare for global certifications and placement opportunities in top companies.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-narpavi-section">
              <h2 className="why-title">Why Choose Narpavi Technologies for <br /> Core Java Training in Chennai?</h2>

              <div className="benefits-grid">
                <div className="benefit-card"> Real-Time, Practical Training with Expert Mentors</div>
                <div className="benefit-card"> Learn from Java Certified Trainers with 8+ Years of Industry Experience</div>
                <div className="benefit-card"> 100% Placement Support with Interview Preparation</div>
                <div className="benefit-card"> Globally Recognized Java Certification Guidance</div>
                <div className="benefit-card"> Live Projects & Hands-on Coding Exercises</div>
                <div className="benefit-card"> Flexible Learning Options - Classroom & Online</div>
                <div className="benefit-card"> Free Study Materials & Resume Preparation Assistance</div>
              </div>
            </div>

            <div className="course-overview-section">
              <div className="course-overview-grid">
                <div className="overview-image">
                  <img src={CoreImage} alt="Course Overview" />
                </div>
                <div className="overview-content">
                  <h3>Core Java Training - Course Overview</h3>
                  <ul>
                    {listItems.map((text, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={listVariants}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="who-wrapper">
              <div className="holder">
                <div className="arms">
                  {[...Array(4)].map((_, i) => (
                    <div className="arm" key={i}>
                      {[...Array(40)].map((_, j) => (
                        <div className="a" key={j}></div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="content-card">
                  <h2>Who Can Join This Core Java Course?</h2>
                  <ul>
                    <li>Freshers looking to start a career in software development</li>
                    <li>College students aiming to build programming skills</li>
                    <li>Professionals planning to switch to Java development</li>
                    <li>Anyone passionate about learning coding from scratch</li>
                    <li><strong>No prior programming experience required.</strong> We start from the basics and progress to advanced Core Java concepts.</li>
                  </ul>

                  <h3>Core Java Certification & Placement Assistance</h3>
                  <ul>
                    <li> Oracle Certified Associate (OCA) Java SE 7/8</li>
                    <li> Assistance with certification preparation & mock tests</li>
                    <li> Interview coaching & technical assessments</li>
                    <li> Resume building & job referrals in top IT companies</li>
                    <li>Our placement team has successfully placed students in companies like <strong>TCS, Infosys, Accenture, HCL, Cognizant</strong>, and more.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="career-benefits-section animate slide-left delay-2">
              <div className="career-benefits-grid">
                <div className="career-text">
                  <h3>Why Core Java is Essential for Your IT Career</h3>
                  <ul>
                    <li> Foundation for technologies like J2EE, Spring, Hibernate, Android, Selenium Automation, and more</li>
                    <li> High demand for Java developers across industries</li>
                    <li> One of the most versatile and widely-used programming languages</li>
                    <li> Global certification opportunities to boost your resume</li>
                  </ul>
                </div>
                <div className="career-image">
                  <img src={CareerBenefits} alt="Java Career Benefits" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </div>
  );
};

export default CoreJavaCourse;
