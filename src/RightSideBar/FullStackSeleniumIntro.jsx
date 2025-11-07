import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./FullStackSeleniumIntro.scss";
import { CheckCircle2, Code2, ShieldCheck, LayoutDashboard, Globe2, 
            Users, Code, BugPlay, GraduationCap, Rocket,
            Award, Briefcase, TrendingUp,  
            PhoneCall, BookOpenCheck
        } from "lucide-react";


const FullStackSeleniumIntro = () => {
    const [openIndex, setOpenIndex] = useState(null);


    const highlights = [
  "Comprehensive Training in Development + Automation Testing",
  "Expert Trainers with 8+ Years of Industry & Project Experience",
  "Real-Time Projects in Java Development & Selenium Automation",
  "100% Placement Assistance with Resume, Mock Interviews & Referrals",
  "Certification Guidance for Java & Selenium",
  "Flexible Learning Modes – Classroom & Online Options",
  "Interview-Focused Curriculum for Development & QA Roles",
];

const developmentTopics = [
  "Core Java Programming Fundamentals",
  "Object-Oriented Programming with Java",
  "Advanced Java (J2EE, JDBC, Servlets, JSP)",
  "Spring Framework & Spring Boot for Enterprise Applications",
  "REST API Development & Backend Integration",
  "Frontend Basics: HTML, CSS, JavaScript",
  "Full Stack Application Development Projects",
];

const testingTopics = [
  "Java Essentials for Automation",
  "Selenium WebDriver & Test Automation Frameworks",
  "TestNG, Data-Driven Testing & Real-World Scenarios",
  "Building Reusable Automation Frameworks",
  "Introduction to Selenium Grid & Cross-Browser Testing",
  "Project Work on Automated Web Application Testing",
];

const joiners = [
  {
    icon: <GraduationCap size={26} color="#0f766e" />,
    title: "Freshers seeking a versatile IT career in Development & Testing",
  },
  {
    icon: <BugPlay size={26} color="#0f766e" />,
    title: "Manual Testers upgrading to Automation roles",
  },
  {
    icon: <Code size={26} color="#0f766e" />,
    title: "Developers adding Testing skills for better project visibility",
  },
  {
    icon: <Users size={26} color="#0f766e" />,
    title: "Students preparing for Full Stack & QA roles in top companies",
  },
  {
    icon: <Rocket size={26} color="#0f766e" />,
    title: "Anyone aiming to become an in-demand Development & Testing professional",
  },
];

const certifications = [
  "Oracle Certified Java SE Programmer Exams",
  "Selenium with Java Automation Project Certification",
  "Resume Building, LinkedIn Optimization & Career Guidance",
  "Mock Interviews for Developer & Automation roles",
  "Placement Support with MNCs, Startups & Product Companies",
];

const dualSkills = [
  "Companies prefer Full Stack Engineers with Automation knowledge",
  "Saves project time with Development + Testing expertise in one profile",
  "Higher salary potential with diverse skill set",
  "Opportunity to work across Development, QA & DevOps teams",
  "Essential for Agile, Product Development & Continuous Testing environments",
]; 

const faqData = [
  {
    question: "Who can join this Full Stack + Selenium training course?",
    answer:
      "Freshers, manual testers, developers, and anyone looking to gain skills in both development and automation testing can join."
  },
  {
    question: "Is placement support available after training?",
    answer:
      "Yes, Narpavi Technologies provides 100% placement support, including mock interviews, resume building, and job referrals."
  },
  {
    question: "What technologies are covered in this course?",
    answer:
      "The course covers Core Java, Advanced Java, Spring Boot, REST APIs, HTML, CSS, JS for development, and Selenium WebDriver with TestNG for testing."
  }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };


  return (
    <div>
    <div className="mainjavafsselenium">
      <Helmet>
        <title>Java Full Stack + Selenium Training in Chennai | Narpavi Technologies</title>
        <meta name="description" content="Enroll in our Full Stack Java + Selenium Automation course in Chennai. Learn core development and automation testing with real-time projects and placement." />
        <meta name="keywords" content="Java Full Stack Training, Selenium Automation Course Chennai, Automation Testing, Java Selenium Classes, Full Stack Developer Training Chennai" />
        <meta property="og:title" content="Java Full Stack + Selenium Training in Chennai" />
        <meta property="og:description" content="Hands-on Full Stack + Selenium Training with placement in Chennai. Learn Java, Spring Boot, Selenium WebDriver, and get certified." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/fullstack-selenium-course" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/fullstack-selenium-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/fullstack-selenium-course" />

        {/* Organization JSON-LD */}
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

        {/* Course JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Java Full Stack + Selenium Automation Training",
            "description": "Learn Java development and Selenium testing with real-time projects at Narpavi Technologies, Chennai. 100% placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "sameAs": "https://www.narpavitech.in"
            }
          })}
        </script>

        {/* FAQ JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

    <section>
    <section className="fullstack-selenium-intro">
  {/* TITLE & CTA BUTTONS */}
  <div className="intro-header">
    <h1 className="intro-title">
      Java Full Stack + Selenium Automation Training in Chennai
    </h1>
    <div className="cta-buttons">
      <button className="orange-btn">Sign Up For Free</button>
      <button className="outline-btn">Request Demo</button>
    </div>
  </div>

  {/* VIDEO BLOCK */}
  <div className="video-wrapper">
    <video
      className="intro-video"
      src="/Videos/FsSa.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>

  {/* DESCRIPTION BLOCK */}
  <div className="intro-description-block">
    <motion.h2
      className="intro-subtitle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Become a Job-Ready Full Stack Developer & Certified Automation Tester
    </motion.h2>

    <motion.p
      className="intro-description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
    >
      Looking to build a versatile IT career with both Development and Automation Testing skills?
      Join <strong>Narpavi Technologies</strong>, Chennai’s trusted training institute, for our exclusive
      <strong> Java Full Stack + Selenium Automation Training</strong> in Chennai with
      <strong> 100% Placement Support</strong>.
    </motion.p>

    <motion.p
      className="intro-highlight"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      Master Core Java, Advanced Java, Full Stack Development, and Selenium Automation in one integrated
      program designed for job placement in top IT companies.
    </motion.p>
  </div>
</section>

    

    <section className="why-choose-fullstack-selenium">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Narpavi Technologies for Full Stack + Selenium Automation Training?
      </motion.h2>

      <div className="highlight-list">
        {highlights.map((item, idx) => (
          <motion.div
            className="highlight-item"
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <CheckCircle2 className="icon" />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="fullstack-selenium-overview">
      <motion.h2
        className="overview-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Combined Course Overview – Full Stack Java & Selenium Automation
      </motion.h2>

      <motion.p
        className="overview-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        In today’s IT industry, professionals with both <strong>coding</strong> and <strong>testing</strong> knowledge stand out.
        This all-in-one program prepares you for roles in <strong>software development</strong>, <strong>full stack projects</strong>, and
        <strong> automation testing using Java</strong>.
      </motion.p>

      <div className="topics-wrapper">
        <div className="topic-column">
          <h3><Code2 /> Java Development & Full Stack Modules</h3>
          <ul>
            {developmentTopics.map((topic, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="check">•</span> {topic}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="topic-column">
          <h3><ShieldCheck /> Selenium Automation with Java</h3>
          <ul>
            {testingTopics.map((topic, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="check">•</span> {topic}

              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="who-should-join">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who Should Join This Program?
      </motion.h2>

      <motion.p
        className="note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <strong>No prior coding experience required</strong> — we start from the fundamentals.
      </motion.p>

      <div className="cards">
        {joiners.map((item, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="icon">{item.icon}</div>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>

        <section className="cert-skill-grid">
      <h2 className="main-heading">Certifications & Placement Support</h2>

      <div className="grid-container">
        {/* Left Side: Certifications */}
        <div className="left-column">
          <ul className="cert-list">
            {certifications.map((item, i) => (
              <li key={i} className="list-box">
                <Award size={18} /> {item}
              </li>
            ))}
          </ul>
          <p className="highlight">
            <strong>Our successful placements include:</strong> Infosys, Cognizant, Accenture, Capgemini, HCL, and more.
          </p>
        </div>

        {/* Right Side: Dual Skill */}
        <div className="right-column">
          <h3 className="dual-heading">
            Why Dual Skill: <span>Development + Automation is In-Demand</span>
          </h3>
          <ul className="dual-list">
            {dualSkills.map((point, i) => (
              <li key={i} className="list-box">
                <Briefcase size={18} /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Enroll for the Best Java Full Stack + Selenium Automation Training in Chennai
        </motion.h2>

        <p className="cta-subtext">
          Fast-track your IT career with in-demand Development and Testing skills at{" "}
          <strong>Narpavi Technologies</strong>. Gain coding confidence, hands-on automation experience, and placement
          support in top IT companies.
        </p>

        <div className="cta-buttons">
          <a href="tel:+919884481399" className="cta-btn call">
            <PhoneCall size={18} /> +91-9884481399
          </a>
          <a href="#demo-booking" className="cta-btn demo">
            <BookOpenCheck size={18} /> Book Free Demo Class
          </a>
        </div>

        <p className="cta-footer">
          <strong>Master Development & Automation – Become an All-Round IT Professional with Narpavi Technologies!</strong>
        </p>
      </motion.div>
      
    </section>
     <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
     
    </section>
    </div>
    </div>
  );
};

export default FullStackSeleniumIntro;
