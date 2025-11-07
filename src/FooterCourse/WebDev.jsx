import React, { useState } from 'react';
import './WebDev.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import WebDev1 from '../assets/WebDev/WebDev1.jpg';
import WebDev2 from '../assets/WebDev/WebDev2.jpg';
import WebDev3 from '../assets/WebDev/WebDev3.jpg';
import WebDev4 from '../assets/WebDev/WebDev4.jpg';
import WebDevlogo from '../assets/WebDev/WebDev-logo.png';

const topics = [
  {
    title: 'Introduction to Web Development',
    content:
      'Web Development is the foundation of the internet, involving the creation of websites and web applications. It includes front-end (client-side) and back-end (server-side) development. Technologies like HTML, CSS, JavaScript, and modern frameworks drive dynamic and responsive experiences.',
    image: WebDev1,
  },
  {
    title: 'Front-End Technologies & Frameworks',
    content:
      'Front-end development focuses on user interfaces using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js. These tools help build fast, interactive, and mobile-friendly web apps with reusable components and smooth UI/UX.',
    image: WebDev2,
  },
  {
    title: 'Back-End Development & Databases',
    content:
      'Back-end development handles server logic, APIs, and databases. Popular technologies include Node.js, Python (Django/Flask), PHP, and Java. Databases like MySQL, MongoDB, and PostgreSQL store and manage data efficiently in modern web apps.',
    image: WebDev3,
  },
  {
    title: 'Deployment, DevOps & Web Careers',
    content:
      'Web apps are deployed using services like Netlify, Vercel, and AWS. Version control with Git/GitHub and CI/CD pipelines ensures smooth development workflows. Careers in web development include roles like Front-End Developer, Full Stack Developer, and Web Architect.',
    image: WebDev4,
  },
];


const WebDevHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="WebDev-main">
      <Nar_Header />
      <section className="WebDev">
        <div className="WebDev-hero">
          <div className="WebDev-hero-content-left">
            <h2>Course / WebDevelopment Training in Chennai</h2>
            <h1>WebDevelopment Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led WebDev training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted WebDev courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="WebDev-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="WebDev-star-rating-box">
              <div className="WebDev-stars">⭐⭐⭐⭐⭐</div>
              <div className="WebDev-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="WebDev-hero-box">
            <img src={WebDevlogo}  alt="WebDev Logo" className="WebDev-logo" />
            <div className="WebDev-cert-text">Certification Training</div>
            <div className="WebDev-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="WebDev-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="WebDev-interactive-topics">
        <div className="WebDev-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="WebDev-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`WebDev-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="WebDev-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="WebDev-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>

    </div>
  );
};

export default WebDevHeroSection;
