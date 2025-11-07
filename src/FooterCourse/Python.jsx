import React, { useState } from 'react';

import './Python.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Python1 from '../assets/python/py5.png';
import Python2 from '../assets/python/py6.png';
import Python3 from '../assets/python/py7.png';
import Python4 from '../assets/python/py8.png';
import Pythonlogo from '../assets/python/pylogo.png'; // Updated logo import

const topics = [
  {
    title: 'Introduction to Python',
    description:
      'Python is a powerful, versatile, and easy-to-learn programming language. It is widely used in web development, automation, data science, and artificial intelligence. Its clean syntax makes it perfect for beginners and professionals alike.',
    image: Python1,
  },
  {
    title: 'Core Python Concepts',
    description:
      'Master data types, control structures, functions, modules, and object-oriented programming. These concepts form the foundation of developing Python applications and scripts efficiently.',
     image: Python2,
  },
  {
    title: 'Advanced Python & Libraries',
    description:
      'Explore libraries like NumPy, Pandas, Matplotlib, and more. Build complex applications in machine learning, data analytics, and automation using advanced Python features.',
  image: Python3,
  },
  {
    title: 'Python Career & Certifications',
    description:
      'Python developers are in high demand across industries. With certifications and project experience, you can land roles in software development, data science, automation, and AI/ML.',
    image: Python4,
  },
];



const PythonHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="python-main">
        <Nar_Header />
    <section className="python">
 
      <div className="python-hero">
        <div className="python-hero-content-left">
          <h2>Course / python Training in Chennai</h2>
          <h1>python Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led python training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted python courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="python-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="python-star-rating-box">
            <div className="python-stars">⭐⭐⭐⭐⭐</div>
            <div className="python-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="python-hero-box">
          <img src={Pythonlogo} alt="python Logo" className="python-logo" />
          <div className="python-cert-text">Certification Training</div>
          <div className="python-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="python-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="python-interactive-topics">
      <div className="python-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="python-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="python-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="python-right-image">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </section>
    </div>
  );
};

export default PythonHeroSection;
