import React, { useState } from "react";
import './JavaSpringMicroservices.scss';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item"
      initial={false}
      animate={{ height: isOpen ? "auto" : "60px" }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-question">
        <span>{question}</span>
        <span className="toggle">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <motion.div
          className="faq-answer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
};

const JavaSpringMicroservices = () => {
  const overviewItems = [
    "Spring Core & Dependency Injection (IoC)",
    "Spring MVC for Web Applications",
    "Spring Boot for Rapid Application Development",
    "Building RESTful APIs with Spring",
    "Spring Security for Authentication & Authorization",
    "Introduction to Microservices Architecture",
    "Communication Between Microservices (REST/HTTP)",
    "API Gateway & Service Discovery Basics",
    "Microservices Deployment Best Practices",
    "Real-Time Application Development using Spring & Microservices",
  ];

  const joinPoints = [
    "Java Developers looking to advance into Spring & Microservices roles",
    "Backend Developers aiming to build scalable, cloud-ready applications",
    "Full Stack Developers adding Spring to their skill set",
    "Professionals preparing for enterprise Java interviews",
    "Anyone with Core Java knowledge ready to move into advanced frameworks",
  ];

  const certificationItems = [
    "Guidance for Spring Professional Certification",
    "Hands-on project work with real-time coding challenges",
    "Resume Building & LinkedIn Profile Optimization",
    "Mock Interviews, Technical Assessments & Placement Referrals",
    "Opportunity to work on live projects for practical exposure",
  ];

  const demandItems = [
    "Industry standard for building scalable, maintainable applications",
    "Foundation for cloud-native, containerized deployments",
    "Required skill for Java Developer, Spring Boot Developer & Microservices roles",
    "Preferred by companies for building distributed systems and enterprise software",
    "High-paying job opportunities across banking, telecom, e-commerce, and product development sectors",
  ];

  const faqList = [
    {
      question: "What are the prerequisites for Spring & Microservices training?",
      answer: "Basic Core Java knowledge is required. No prior Spring experience is needed.",
    },
    {
      question: "Will I get placement assistance after the course?",
      answer: "Yes, 100% placement support is provided including resume building, mock interviews, and job referrals.",
    },
    {
      question: "Are there real-time projects included in the course?",
      answer: "Absolutely! You'll work on real-world enterprise Java projects using Spring Boot and Microservices architecture.",
    },
    {
      question: "Is certification included?",
      answer: "We guide you toward Spring Professional Certification and issue a course completion certificate from Narpavi Technologies.",
    },
  ];

  return (
    <section>
      <Helmet>
        <title>Spring & Microservices Training in Chennai | Narpavi Technologies</title>
        <meta name="description" content="Master Spring, Spring Boot, and Microservices in Chennai. Hands-on Java backend training with real-time projects, certifications, and 100% placement support." />
        <meta name="keywords" content="Spring Boot Training Chennai, Microservices Training Chennai, Java Spring Course, Backend Java Training, Java Placement Support, Narpavi Technologies" />
        <meta property="og:title" content="Spring & Microservices Training in Chennai | Narpavi Technologies" />
        <meta property="og:description" content="Become a Certified Spring & Microservices Developer with real-time projects and placement support in Chennai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/spring-microservices-training" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/spring-course-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/spring-microservices-training" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Java Spring & Microservices Training in Chennai",
            "description": "Hands-on Spring Boot & Microservices training with project-based learning and placement support at Narpavi Technologies, Chennai.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "url": "https://www.narpavitech.in"
            }
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Narpavi Technologies",
            "url": "https://www.narpavitech.in",
            "logo": "https://www.narpavitech.in/logo.png",
            "sameAs": [
              "https://www.facebook.com/narpavitech",
              "https://www.linkedin.com/company/narpavi-technologies"
            ]
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqList.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="spring-microservices-section">
        <div className="spring-microservices-header">
          <h1>Spring & Microservices Training in Chennai with Placement</h1>
          <div className="cta-buttons">
            <button className="orange-btn">Sign Up For Free</button>
            <button className="outline-btn">Request Demo</button>
          </div>

          <div className="heading-with-video">
            <video
              className="background-video"
              src="/Videos/Microservices.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="container">
            <motion.h2
              className="sub-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Build Scalable, Enterprise-Grade Applications with Spring & Microservices
            </motion.h2>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Looking to upgrade your Java skills for high-demand enterprise development? Join{" "}
              <strong>Narpavi Technologies</strong>, Chennai’s leading software training institute, for an in-depth{" "}
              <strong>Java with Spring & Microservices Training</strong>.
            </motion.p>

            <motion.p
              className="highlight-box"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Learn to develop scalable, secure, and cloud-ready Java applications with{" "}
              <strong>Spring Framework</strong>, <strong>Spring Boot</strong>, and <strong>Microservices</strong> architecture — all with expert-led practical training and <strong>100% placement assistance</strong>.
            </motion.p>
          </div>
        </div>

        <section className="spring-overview-section">
          <div className="overview-container">
            <motion.h2
              className="overview-heading"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Course Overview – Master Java with Spring & Microservices
            </motion.h2>

            <motion.p
              className="overview-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Spring is the most popular Java enterprise framework used by top companies to build secure, scalable, and
              cloud-native applications. Combined with Microservices, it enables distributed, high-performance systems — a
              must-have skill for Java developers today.
            </motion.p>

            <ul className="overview-list">
              {overviewItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="overview-item"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="check">•</span> {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="who-join-section">
          <div className="who-join-container">
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Who Should Join This Program?
            </motion.h2>

            <ul className="join-list">
              {joinPoints.map((item, index) => (
                <motion.li
                  key={index}
                  className="join-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <span className="dot">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cert-support">
          <div className="cert-container">
            <motion.div
              className="cert-left"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Certification & Career Support</h2>
              <ul>
                {certificationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="placement-info">
                Our placement team has successfully placed students in top IT companies across Chennai, including <strong>Infosys, Accenture, Cognizant, HCL</strong>, and more.
              </p>
            </motion.div>

            <motion.div
              className="cert-right"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Why Spring & Microservices are In-Demand</h2>
              <ul>
                {demandItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Enroll for the Best Java with Spring & Microservices Training in Chennai</h2>

          <p>
            Gain in-demand skills, work on real-world projects, and become job-ready with expert guidance from
            <strong> Narpavi Technologies</strong>, Chennai’s trusted Java training institute.
          </p>

          <div className="contact-box">
            <h3>Talk to Our Experts Today</h3>
            <p>📞 <a href="tel:+919884481399">+91-9884481399</a></p>
            <p><a href="#demo-form">Book Your Free Demo Class</a></p>
            <a href="tel:+919884481399" className="call-btn">Talk to Our Expert</a>
          </div>

          <h4 className="tagline">
            Master Spring, Spring Boot & Microservices – <span>Become a Certified, Job-Ready Java Developer!</span>
          </h4>
        </section>
      </section>
        {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          {faqList.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      
    </section>
  );
};

export default JavaSpringMicroservices;
