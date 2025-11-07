import React, { useState } from 'react';
import './Rpro.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Rpro1 from '../assets/Rpro/Rpro1.jpg';
import Rpro2 from '../assets/Rpro/Rpro2.jpg';
import Rpro3 from '../assets/Rpro/Rpro3.jpg';
import Rpro4 from '../assets/Rpro/Rpro4.jpg';
import Rprologo from '../assets/Rpro/Rpro-logo.png';

const topics = [
  {
    title: 'Introduction to R Programming',
    content:
      'R is a powerful language for statistical computing and graphics. It is widely used by statisticians, data analysts, and researchers to perform data analysis and visualization. R provides a rich ecosystem of packages and is open-source.',
    image: Rpro1,
  },
  {
    title: 'Core Concepts & Data Structures',
    content:
      'R supports various data structures such as vectors, matrices, lists, and data frames. Core concepts include variables, loops, functions, and control structures, forming the foundation for data manipulation and analysis in R.',
    image: Rpro2,
  },
  {
    title: 'Data Analysis & Visualization',
    content:
      'R excels in data analysis with packages like dplyr, tidyr, and data.table. For visualization, ggplot2 is the most popular package for creating elegant, customizable graphs. R is also used for statistical modeling and machine learning.',
    image: Rpro3,
  },
  {
    title: 'Careers & R Certifications',
    content:
      'R skills are in demand in roles like Data Analyst, Statistician, and Data Scientist. Certifications include Coursera’s R Programming by Johns Hopkins, and edX’s Data Science R track. R is widely used in academia, healthcare, and finance sectors.',
    image: Rpro4,
  },
];



const RproHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Rpro-main">
      <Nar_Header />
      <section className="Rpro">
        <div className="Rpro-hero">
          <div className="Rpro-hero-content-left">
            <h2>Course / Rproelopment Training in Chennai</h2>
            <h1>Rproelopment Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led Rpro training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted Rpro courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="Rpro-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="Rpro-star-rating-box">
              <div className="Rpro-stars">⭐⭐⭐⭐⭐</div>
              <div className="Rpro-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="Rpro-hero-box">
            <img src={Rprologo}  alt="Rpro Logo" className="Rpro-logo" />
            <div className="Rpro-cert-text">Certification Training</div>
            <div className="Rpro-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="Rpro-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
       <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />
      </section>

      {/* Topics Section */}
      <section className="Rpro-interactive-topics">
        <div className="Rpro-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="Rpro-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`Rpro-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="Rpro-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="Rpro-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>
    </div>
  );
};

export default RproHeroSection;
