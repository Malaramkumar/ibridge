import React, { useState } from 'react';
import './MobileApp.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import MobileApp1 from '../assets/MobileApp/Mobile1.jpg';
import MobileApp2 from '../assets/MobileApp/Mobile2.jpg';
import MobileApp3 from '../assets/MobileApp/Mobile3.jpg';
import MobileApp4 from '../assets/MobileApp/Mobile4.jpg';
import MobileApplogo from '../assets/MobileApp/MobileApp-Logo.png';

const topics = [
  {
    title: 'Introduction to Web Development',
    content:
      'Web Development is the foundation of the internet, involving the creation of websites and web applications. It includes front-end (client-side) and back-end (server-side) development. Technologies like HTML, CSS, JavaScript, and modern frameworks drive dynamic and responsive experiences.',
    image: MobileApp1,
  },
  {
    title: 'Front-End Technologies & Frameworks',
    content:
      'Front-end development focuses on user interfaces using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js. These tools help build fast, interactive, and mobile-friendly web apps with reusable components and smooth UI/UX.',
    image: MobileApp2,
  },
  {
    title: 'Back-End Development & Databases',
    content:
      'Back-end development handles server logic, APIs, and databases. Popular technologies include Node.js, Python (Django/Flask), PHP, and Java. Databases like MySQL, MongoDB, and PostgreSQL store and manage data efficiently in modern web apps.',
    image: MobileApp3,
  },
  {
    title: 'Deployment, DevOps & Web Careers',
    content:
      'Web apps are deployed using services like Netlify, Vercel, and AWS. Version control with Git/GitHub and CI/CD pipelines ensures smooth development workflows. Careers in web development include roles like Front-End Developer, Full Stack Developer, and Web Architect.',
    image: MobileApp4,
  },
];


const MobileAppHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="MobileApp-main">
      <Nar_Header />
      <section className="MobileApp">
        <div className="MobileApp-hero">
          <div className="MobileApp-hero-content-left">
            <h2>Course / Mobile App development Training in Chennai</h2>
            <h1>Mobile App Development Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led MobileApp training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted MobileApp courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="MobileApp-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="MobileApp-star-rating-box">
              <div className="MobileApp-stars">⭐⭐⭐⭐⭐</div>
              <div className="MobileApp-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="MobileApp-hero-box">
            <img src={MobileApplogo}  alt="MobileApp Logo" className="MobileApp-logo" />
            <div className="MobileApp-cert-text">Certification Training</div>
            <div className="MobileApp-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="MobileApp-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="MobileApp-interactive-topics">
        <div className="MobileApp-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="MobileApp-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`MobileApp-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="MobileApp-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="MobileApp-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>
    </div>
  );
};

export default MobileAppHeroSection;
