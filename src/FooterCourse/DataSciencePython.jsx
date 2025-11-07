import React, { useState } from 'react';
import Datascience from '../assets/data-science/ds-Logo.jpg';
import './DataSciencePython.scss';
import Nar_Header from '../components/Nar_Header';

import EnquiryModal from '../components/EnquiryModal';
import dsbg from '../assets/data-science/ds-bg.jpg'; // or .png
import ds1 from "../assets/data-science/ds1.png";
import ds2 from "../assets/data-science/ds2.png";       
import ds3 from "../assets/data-science/ds3.png";
import ds4 from "../assets/data-science/ds4.png";

const topics = [
  {
    title: 'Introduction to Data Science',
    description:
      'Data Science is the process of extracting insights from data using statistical, mathematical, and computational techniques. It blends data analysis, machine learning, and visualization to support decision-making, forecasting, and automation.',
    image: ds1,
  },
  {
    title: 'Core Components & Tools',
    description:
      'Data Science involves data collection, cleaning, exploratory analysis, and model building. Common tools include Python, R, SQL, Pandas, NumPy, Scikit-learn, and Jupyter Notebooks. Visualization tools like Matplotlib, Seaborn, and Tableau present insights effectively.',
    image: ds2,
  },
  {
    title: 'Applications & Benefits',
    description:
      'Data Science drives recommendation engines, fraud detection, customer analytics, and predictive modeling. It enables data-driven decisions across industries like healthcare, finance, marketing, and e-commerce.',
    image: ds3,
  },
  {
    title: 'Careers & Certifications',
    description:
      'Popular roles include Data Scientist, Data Analyst, and Machine Learning Engineer. Top certifications include IBM Data Science, Google Data Analytics, and Microsoft Data Scientist. High demand and competitive salaries make it a top tech career.',
    image: ds4,
  },
];



const DatascienceHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="data-science-main">
        <Nar_Header />
    <section className="data-science">
 
      <div className="data-science-hero">
        <div className="data-science-hero-content-left">
          <h2>Course / data-science Training in Chennai</h2>
          <h1>Data-science Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led data-science training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted data-science courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="data-science-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="data-science-star-rating-box">
            <div className="data-science-stars">⭐⭐⭐⭐⭐</div>
            <div className="data-science-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="data-science-hero-box">
          <img src={Datascience} alt="data-science Logo" className="data-science-logo" />
          <div className="data-science-cert-text">Certification Training</div>
          <div className="data-science-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="data-science-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="data-science-interactive-topics">
      <div className="data-science-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="data-science-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="data-science-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="data-science-right-image" style={{ backgroundImage: `url(${dsbg})` }}>
        <div className="data-science-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default DatascienceHeroSection;
