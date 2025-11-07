import React, { useState } from 'react';
import './Fullstack.scss'; // Updated SCSS file
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import fullstack4 from '../assets/fullstack/fullstack4.png';
import fullstack5 from '../assets/fullstack/fullstack5.png';
import fullstack6 from '../assets/fullstack/fullstack6.png';
import fullstack7 from '../assets/fullstack/fullstack7.png';
import fullstackslogo from '../assets/fullstack/fullstacklogo.jpg'; // Updated logo import


const topics = [
  {
    title: "1. Introduction to Full Stack",
    image: fullstack4,
    content: `Full Stack Development refers to building both the frontend and backend of web applications.
A full stack developer handles everything from UI/UX to server logic and databases.
It’s a versatile role blending design, coding, and system architecture.`,
  },
  {
    title: "2. Core Technologies",
    image: fullstack5,
    content: `Frontend includes HTML, CSS, JavaScript, React or Angular.
Backend involves Node.js, Python, Java, or PHP with databases like MongoDB, MySQL, or PostgreSQL.
Version control (Git), APIs, and DevOps tools complete the full stack workflow.`,
  },
  {
    title: "3. Benefits & Applications",
    image: fullstack6,
    content: `Full stack developers can build end-to-end applications independently or in agile teams.
They’re valuable for startups, SaaS platforms, e-commerce, and enterprise systems.
Faster development, reduced costs, and broad skill coverage are key advantages.`,
  },
  {
    title: "4. Career & Certifications",
    image: fullstack7,
    content: `Roles include Full Stack Developer, Software Engineer, or Web Application Developer.
Popular certifications: Meta Full Stack (Coursera), IBM Full Stack, or coding bootcamp diplomas.
Full stack skills are in high demand across industries and tech companies globally.`,
  }
];

const FullStackHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fullstack-main">
      <Nar_Header />
      <section className="fullstack">
        <div className="fullstack-hero">
          <div className="fullstack-hero-content-left">
            <h2>Course / Full Stack Development Training in Chennai</h2>
            <h1>Full Stack Developer Course in Chennai</h1>
            <p>
              Launch your career as a versatile web developer with Narpavi Technologies in Chennai.
              Our hands-on Full Stack Development training teaches you both frontend and backend technologies
              through real-world projects and expert guidance. Suitable for both beginners and professionals.
            </p>
            <h3 className="fullstack-dream-job-text">🚀 Become a Full Stack Web Expert</h3>
            <div className="fullstack-star-rating-box">
              <div className="fullstack-stars">⭐⭐⭐⭐⭐</div>
              <div className="fullstack-rating-label">8,273 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="fullstack-hero-box">
            <img src={fullstackslogo} alt="Full Stack Logo" className="fullstack-logo" />
            <div className="fullstack-cert-text">Certification Training</div>
            <div className="fullstack-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="fullstack-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
       <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="fullstack-interactive-topics">
        <div className="fullstack-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="fullstack-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`fullstack-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="fullstack-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="fullstack-right-image">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
      </section>
    </div>
  );
};

export default FullStackHeroSection;
