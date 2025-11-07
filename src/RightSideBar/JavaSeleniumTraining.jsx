import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./JavaSeleniumTraining.scss";

const JavaSeleniumTraining = () => {

  const features = [
    "Learn from Industry Experts with 8+ Years of Java Experience",
    "Real-Time Hands-on Training with Selenium WebDriver ",
    "100% Placement Assistance with Interview Preparation",
    "Build Strong Java Fundamentals for Test Automation Roles",
    "Live Project Experience with Selenium & Java Integration",
    "Flexible Batch Timings - Classroom & Online Training Available",
    "Resume Preparation, Mock Interviews & Certification Support"
  ];

  const javaTopics = [
    "Java Fundamentals for Automation Testing",
    "OOP Concepts & Exception Handling",
    "Collections & File Handling",
    "Working with Data in Automation"
  ];

  const seleniumTopics = [
    "Introduction to Selenium & WebDriver Architecture",
    "Locators, XPath, CSS Selectors for Web Elements",
    "Handling Pop-ups, Alerts, Frames & Windows",
    "TestNG Framework for Test Execution & Reporting",
    "Data-Driven Testing with Excel Integration",
    "Building Automation Frameworks from Scratch",
    "Cross-Browser Testing with Selenium Grid",
    "Introduction to Continuous Integration (Jenkins Basics)"
  ];

  const joinList = [
    "Freshers looking to start a career in Automation Testing",
    "Manual Testers planning to transition into Automation roles",
    "Software Developers wanting to add Selenium skills",
    "QA Professionals upgrading their skill set",
    "Anyone with basic programming interest aiming for Testing Careers",
  ];

  const supportList = [
    " Java & Selenium Project Work for Real-Time Experience",
    " Resume Building & LinkedIn Optimization",
    " Mock Interviews & Technical Assessments",
    " Placement Support with Top IT Companies",
    " Guidance for Global Certifications related to Java & Selenium",
  ];

  const demandList = [
    " Selenium is the industry-leading open-source Automation tool",
    " Java is the most widely used language with Selenium",
    " High demand for Automation Testers with Java-Selenium skills",
    " Helps you build reusable, scalable test frameworks",
    " Essential for Testing roles in Agile, DevOps, and Product teams",
  ];

  const faqs = [
    {
      question: "What is included in the Java with Selenium course?",
      answer: "The course includes Java basics, Selenium WebDriver, frameworks, real-time projects, and placement support."
    },
    {
      question: "Is prior coding knowledge required?",
      answer: "No. Java fundamentals are covered from scratch for automation beginners."
    },
    {
      question: "Will I get placement support?",
      answer: "Yes. The course includes resume help, interview prep, and referrals to hiring companies."
    },
    {
      question: "Are projects part of the training?",
      answer: "Yes. You'll work on real-time Java-Selenium automation projects."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="mainjavaselineum">
      <Helmet>
        <title>Java with Selenium Training in Chennai | 100% Placement - Narpavi</title>
        <meta name="description" content="Join Narpavi Technologies for the best Java with Selenium Automation Training in Chennai. Hands-on training, live projects & placement support." />
        <meta name="keywords" content="Java Selenium Course Chennai, Selenium Training, Automation Testing Training, Selenium Classes Chennai, Java Testing with Placement" />
        <meta property="og:title" content="Java with Selenium Training in Chennai - Narpavi Technologies" />
        <meta property="og:description" content="Master Automation Testing with our Java Selenium training in Chennai. Classroom & online batches, certification & 100% placement support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/java-selenium-course" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/selenium-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/java-selenium-course" />

        {/* Organization Structured Data */}
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

        {/* Course Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Java with Selenium Training in Chennai",
            "description": "Learn Java and Selenium Automation Testing with hands-on training and 100% placement assistance at Narpavi Technologies.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "sameAs": "https://www.narpavitech.in"
            }
          })}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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

      <section className="selenium-section">
        <div className="video-heading">
          <motion.h1 className="main-heading" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Java with Selenium Automation Training in Chennai
            <div className="cta-buttons">
              <button className="orange-btn">Sign Up For Free</button>
              <button className="outline-btn">Request Demo</button>
            </div>
          </motion.h1>
          <video className="bg-video" autoPlay muted loop playsInline>
            <source src="/Videos/java-selenium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>Master Java & Selenium for Automation Testing with 100% Placement Support</h2>
        <p>
          Looking to build a career in Software Testing and Automation? Join{" "}
          <strong>Narpavi Technologies</strong>, Chennai’s trusted IT training institute,
          for the most comprehensive <strong>Java with Selenium Automation Training in Chennai</strong>.
        </p>
        <p>
          Learn to automate web applications using <strong>Selenium WebDriver with Java</strong>, and gain
          real-time testing experience with expert guidance, live projects, and complete placement assistance.
        </p>
      </motion.div>

      <section className="why-selenium-section">
        <div className="container">
          <div className="content-box">
            <div className="content">
              <motion.h2
                className="section-heading"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Narpavi Technologies for Java with Selenium Automation Training?
              </motion.h2>

              <ul className="feature-list">
                {features.map((item, index) => (
                  <motion.li
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                     {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            className="svg-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/testing.svg"
              alt="Software Testing Illustration"
              className="svg-animation"
            />
          </motion.div>
        </div>
      </section>

     <section className="selenium-course-overview">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Course Overview – Java with Selenium Automation Testing
        </motion.h2>

        <motion.p
          className="overview-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our Java with Selenium course is designed to help beginners and experienced professionals master Automation Testing with practical exposure to real-world projects and scenarios.
        </motion.p>

        <div className="topics-grid">
          <motion.div
            className="topic-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Java for Test Automation</h3>
            <ul>
              {javaTopics.map((item, idx) => (
                <li key={idx}> {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="topic-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Selenium WebDriver & Automation Framework</h3>
            <ul>
              {seleniumTopics.map((item, idx) => (
                <li key={idx}> {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
     <section className="selenium-who-should-join">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who Should Join This Program?
        </motion.h2>

        <div className="cards-wrapper">
          {joinList.map((item, idx) => (
            <motion.div
              key={idx}
              className="info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <span className="tick"></span> {item}
            </motion.div>
          ))}

          <motion.div
            className="note-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <strong>Note:</strong> No prior coding experience is mandatory. We cover <strong>Java fundamentals</strong> as part of the course.
          </motion.div>
        </div>
      </div>
    </section>
     <section className="selenium-career-section">
    <div className="career-split-wrapper">
      {/* Left Column */}
      <div className="left-column">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Certification & Career Support
        </motion.h2>

        <motion.ul
          className="support-list"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {supportList.map((item, index) => (
            <motion.li
              key={index}
              className="list-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="placement-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our placement assistance has helped numerous candidates secure roles in
          <strong> Infosys, Cognizant, TCS, HCL, Wipro</strong>, and leading product-based companies.
        </motion.p>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <motion.h3
          className="sub-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Java with Selenium is Essential for Automation Careers
        </motion.h3>

        <motion.ul
          className="demand-list"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {demandList.map((item, index) => (
            <motion.li
              key={index}
              className="list-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  </section>

    <section className="selenium-cta-section">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Enroll for the Best Java with Selenium Automation Training in Chennai</h2>
        <p>
          Ready to advance your career in Software Testing? Gain in-demand Automation skills, hands-on project
          experience, and placement assistance with <strong>Narpavi Technologies</strong>, Chennai’s trusted training provider.
        </p>

        <div className="cta-contact">
          <span>📞 <strong>Talk to Our Automation Expert:</strong> +91-9884481399</span>
          <span>🌐 <strong>Register for a Free Demo Session Now!</strong></span>
        </div>

        <motion.div
          className="cta-highlight"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Master Automation Testing with Java & Selenium – <strong>Become a Certified Automation Engineer</strong> with Narpavi Technologies!
        </motion.div>
      </motion.div>
    </section>
     <section className="faq-section">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFAQ === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
                  <h3 className="faq-question">{faq.question}</h3>
                  {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
    </section>
    </div>
  );
};

export default JavaSeleniumTraining;
