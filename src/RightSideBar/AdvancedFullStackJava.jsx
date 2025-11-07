import React, { useEffect, useState } from 'react';
import './AdvancedFullStackJava.scss';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AdvancedFullStackJava = () => {
  const [counters, setCounters] = useState({ projects: 0, trainers: 0, students: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFaq = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const topics = [
    "Java Fundamentals & Syntax",
    "Object-Oriented Programming Concepts (OOPS)",
    "Classes, Objects, Methods & Constructors",
    "Inheritance, Polymorphism & Encapsulation",
    "Interfaces & Abstract Classes",
    "Exception Handling & Collections Framework",
    "Multithreading & Concurrency Basics",
    "File Handling & Input/Output Streams",
    "Basic JDBC for Database Connectivity",
    "Real-Time Coding, Debugging & Best Practices"
  ];

  const backendTopics = [
    "J2EE Architecture & Application Development",
    "Servlet & JSP (Java Server Pages)",
    "JDBC (Java Database Connectivity)",
    "Hibernate ORM Framework",
    "Spring Framework & Spring Boot",
    "RESTful Web Services Development",
    "Microservices Basics",
    "Security & Authentication Concepts"
  ];

  const frontendTopics = [
    "HTML, CSS & Responsive Web Design",
    "JavaScript & jQuery",
    "Introduction to Angular or React (Optional)",
    "Full Integration of Frontend & Backend",
    "Deployment of Java Web Applications"
  ];

  const whoCanJoin = [
    "Students with basic Core Java knowledge",
    "Fresh graduates aiming to become Full Stack Developers",
    "Working professionals seeking to upgrade Java & Web Development skills",
    "Testers or Automation Engineers wanting to enter Development roles",
    "Anyone aiming for Java-based application development careers"
  ];

  const placementSupport = [
    "Oracle Certified Professional Java SE 8 Programmer Exam (OCPJP)",
    "Preparation for Advanced Java & Enterprise Certifications",
    "Resume Building, Mock Interviews & Technical Assessments",
    "Dedicated Placement Support in Top IT Companies"
  ];

  const demandReasons = [
    "End-to-End Development Skills - Backend, Frontend & Database",
    "Ability to work on Complete Application Lifecycle",
    "High Paying Job Roles for Full Stack Java Developers",
    "Versatility to work across industries: Banking, Telecom, E-commerce & more",
    "Java remains one of the most stable & scalable platforms globally"
  ];

  const advancedFaqs = [
    {
      category: "Course Details",
      faqs: [
        {
          question: "Is this Advanced Java course suitable for freshers?",
          answer: "It's best suited for learners with Core Java knowledge. Freshers can still join, but Core Java basics are recommended."
        },
        {
          question: "Do I need prior frontend knowledge?",
          answer: "No. We teach everything from scratch including HTML, CSS, JavaScript, and React basics."
        }
      ]
    },
    {
      category: "Placement & Certification",
      faqs: [
        {
          question: "Do you offer placement support after this course?",
          answer: "Yes. We provide 100% placement assistance including mock interviews, resume support, and job referrals."
        },
        {
          question: "Will I receive a certificate?",
          answer: "Yes. A course completion certificate will be issued. We also help with Oracle certification preparation."
        }
      ]
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": advancedFaqs.flatMap(section =>
      section.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + 1, 12),
        trainers: Math.min(prev.trainers + 1, 8),
        students: Math.min(prev.students + 50, 2000),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="mainadvanced">
      <Helmet>
        <title>Advanced Full Stack Java Training in Chennai | Narpavi Technologies</title>
        <meta
          name="description"
          content="Join the best Advanced Java & Full Stack Java Training in Chennai at Narpavi Technologies. Learn backend, frontend, and full stack projects with 100% placement support."
        />
        <meta
          name="keywords"
          content="Advanced Java Training Chennai, Full Stack Java Course, Java Backend Frontend Training, Java Placement Support, Narpavi Technologies"
        />
        <meta property="og:title" content="Full Stack Java Training in Chennai with Placement" />
        <meta property="og:description" content="Master backend, frontend, and deployment in our Advanced Full Stack Java Course with real-time projects & job support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/fullstack-java-course" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/java-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/fullstack-java-course" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Advanced Full Stack Java Training",
            "description": "Master Java backend and frontend technologies in this advanced full stack Java course in Chennai with placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "sameAs": "https://www.narpavitech.in"
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

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
    <section>
      
        <div className="advanced-java-fullstack">
        <div className="section-header">
            <h1>Advanced Java & Full Stack Java Training in Chennai</h1>
            <div className="cta-buttons">
              <button className="orange-btn">Sign Up For Free</button>
              <button className="outline-btn">Request Demo</button>
            </div>
            <p>Become an Expert Java Developer with Real-Time Projects & Placement Support</p>
            <div className="video-wrapper">
            <video autoPlay loop muted playsInline>
                <source src="/Videos/Advanced.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>

        <section className="java-intro-banner">      
        <div className="intro-content fade-in">
            <h2>Become an Expert Java Developer with Real-Time Projects & Placement Support</h2>
            <p>
            Looking to advance your Java skills and step into full-stack development? <strong>Narpavi Technologies</strong>,
            Chennai’s trusted Java training institute, offers the most comprehensive Advanced Java and Full Stack Java Training in Chennai
            with <strong>100% placement assistance</strong> and globally recognized certification support.
            </p>
            <p>
            Learn from <strong>Java Certified Experts</strong> and work on real-world projects to become job-ready for high-demand Java developer roles.
            </p>
        </div>
        </section>

        <div className="course-overview">
        <div className="overview-flex">
          {/* Left: Course Text */}
          <div className="overview-left">
            <div className="overview-heading">
              <h2>Core Java Training – Course Overview</h2>
              <p>
                Our Core Java course is designed to build a strong foundation in Java programming and object-oriented principles,
                essential for software development roles and advanced technologies like J2EE, Spring, and more.
              </p>
            </div>

            <ul className="topics-list">
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  className="topic-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {topic}
                </motion.li>
              ))}
            </ul>
          </div>
          {/* Right: SVG Image */}
          <div className="overview-right">
            <img src="/images/team-illustration.svg" alt="Java Course Illustration" />
          </div>
        </div>
      </div>

        <section className="fullstack-section">
      <div className="container">
        <h2>Advanced Java & Full Stack Java Course Highlights</h2>
        <p className="intro">
          Our program is designed to take your Core Java knowledge to the next level with enterprise application development,
          covering both backend and frontend technologies essential for modern full-stack development.
        </p>

        <div className="course-modules">
          <div className="module">
            <h3>Backend – Enterprise Java</h3>
            <ul>
              {backendTopics.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="module">
            <h3>Frontend & Full Stack</h3>
            <ul>
              {frontendTopics.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="highlight-box">
          <h3>Full Stack Java Project Implementation</h3>
          <p>
            During the course, you'll work on real-time, industry-relevant projects that simulate real-world enterprise
            applications, giving you hands-on coding, debugging, and deployment experience.
          </p>
        </div>

        <div className="dual-grid">
          <div className="module">
            <h3>Who Should Join?</h3>
            <ul>
              {whoCanJoin.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="module">
            <h3>Certification & Placement Support</h3>
            <ul>
              {placementSupport.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="highlight-box alt">
          <h3>Why Java Full Stack Developers Are in High Demand</h3>
          <ul>
            {demandReasons.map((item, idx) => (
              <li key={idx}> • {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

        <motion.div
        className="call-to-action"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <h2>Get Started with the Best Core Java Training in Chennai</h2>
        <p>
            Build a successful IT career with our expert-led Core Java Course in Chennai at Narpavi Technologies. 
            Gain coding confidence, work on real-world projects, and achieve your certification and placement goals.
        </p>

        <div className="contact-box">
            <h3>Get Started with Narpavi Technologies</h3>
            <p>📞 Talk to our Java Expert Trainer: <a href="tel:+919884481399">+91-9884481399</a></p>
            <p>🌐 Book Your Free Demo Class Today!</p>
            <a className="call-btn" href="tel:+919884481399">📞 Call Now</a>
        </div>
        </motion.div>
    </div>
    
    </section>
     <section>
     {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {advancedFaqs.map((section, secIdx) => (
          <div className="faq-category-block" key={secIdx}>
            <h3 className="faq-category">{section.category}</h3>
            <div className="faq-grid">
              {section.faqs.map((faq, faqIdx) => {
                const currentIndex = `${secIdx}-${faqIdx}`;
                return (
                  <motion.div
                    className="faq-item"
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: faqIdx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4
                      className="faq-question"
                      onClick={() => toggleFaq(currentIndex)}
                    >
                      {faq.question}
                      <span className="arrow">
                        {openFAQ === currentIndex ? '−' : '+'}
                      </span>
                    </h4>
                    {openFAQ === currentIndex && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </section>
    </div>
    </div>
  );
};

export default AdvancedFullStackJava;
