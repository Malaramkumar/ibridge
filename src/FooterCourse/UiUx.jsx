import React, { useState } from 'react';
import './uiux.scss'; // Updated SCSS file
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import uiux1 from '../assets/uiux/uiux1.jpg';
import uiux2 from '../assets/uiux/uiux2.jpg';
import uiux3 from '../assets/uiux/uiux3.jpg';
import uiux4 from '../assets/uiux/uiux4.jpg';
import uiuxslogo from '../assets/uiux/uiux-logo.png'; // Updated logo import


const topics = [
  {
    title: 'Introduction to UI/UX Design',
    content:
      'UI/UX design focuses on enhancing user satisfaction by improving usability, accessibility, and visual appeal. While UI (User Interface) deals with the look and feel, UX (User Experience) ensures smooth navigation and user engagement in digital products.',
    image: uiux1,
  },
  {
    title: 'Design Tools & Workflow',
    content:
      'Top tools used in UI/UX include Figma, Adobe XD, Sketch, and InVision. Designers follow a workflow involving wireframing, prototyping, and user testing. The design thinking process helps define user needs, ideate solutions, and test interfaces effectively.',
    image: uiux2,
  },
  {
    title: 'Principles & Best Practices',
    content:
      'Effective UI/UX design applies principles like consistency, hierarchy, feedback, and simplicity. Best practices include mobile-first design, accessibility, responsive layouts, and intuitive navigation. User research and A/B testing are vital for improvement.',
    image: uiux3,
  },
  {
    title: 'Careers & Certifications',
    content:
      'UI/UX designers are in demand across startups, agencies, and tech giants. Career paths include UX Designer, UI Designer, Product Designer, and Interaction Designer. Certifications from Google, Coursera, and Nielsen Norman Group enhance job prospects.',
    image: uiux4,
  },
];


const uiuxHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="uiux-main">
      <Nar_Header />
      <section className="uiux">
        <div className="uiux-hero">
          <div className="uiux-hero-content-left">
            <h2>Course / Full Stack Development Training in Chennai</h2>
            <h1>Full Stack Developer Course in Chennai</h1>
            <p>
              Launch your career as a versatile web developer with Narpavi Technologies in Chennai.
              Our hands-on Full Stack Development training teaches you both frontend and backend technologies
              through real-world projects and expert guidance. Suitable for both beginners and professionals.
            </p>
            <h3 className="uiux-dream-job-text">🚀 Become a Full Stack Web Expert</h3>
            <div className="uiux-star-rating-box">
              <div className="uiux-stars">⭐⭐⭐⭐⭐</div>
              <div className="uiux-rating-label">8,273 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="uiux-hero-box">
            <img src={uiuxslogo} alt="Full Stack Logo" className="uiux-logo" />
            <div className="uiux-cert-text">Certification Training</div>
            <div className="uiux-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="uiux-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="uiux-interactive-topics">
        <div className="uiux-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="uiux-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`uiux-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="uiux-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="uiux-right-image">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
      </section>
    </div>
  );
};

export default uiuxHeroSection;
