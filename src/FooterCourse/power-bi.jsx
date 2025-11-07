import React, { useState } from 'react';
import Powerbi from '../assets/Power-bi/Power-bi.png';
import './Power-bi.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import pbi1 from '../assets/Power-bi/powerbi1.png';
import pbi2 from '../assets/Power-bi/powerbi2.png'; 
import pbi3 from '../assets/Power-bi/powerbi3.png';
import pbi4 from '../assets/Power-bi/powerbi4.png';
import PowerbiBg from '../assets/Power-bi/powerbiBG.jpg'; // or .

const topics = [
  {
    title: 'Introduction to Power BI',
    description:
      'Power BI is Microsoft’s business analytics platform used to transform raw data into interactive dashboards and reports. It empowers businesses with real-time insights and rich visualizations for effective data storytelling.',
    image: pbi1, // Replace with your actual image path
  },
  {
    title: 'Core Features & Components',
    description:
      'Power BI consists of Desktop, Service, and Mobile components. It enables data modeling, DAX formulas, and access to various data sources. Users can build visuals, apply filters, and schedule automated data refreshes.',
    image: pbi2,
  },
  {
    title: 'Use Cases & Benefits',
    description:
      'Power BI drives fast, informed decision-making across domains like sales, finance, customer insights, and KPI monitoring. It seamlessly integrates with Excel, SQL Server, Azure, and other Microsoft technologies.',
    image: pbi3,
  },
  {
    title: 'Careers & Certifications',
    description:
      'Popular Power BI roles include Business Intelligence Analyst, Data Analyst, and Reporting Specialist. The Microsoft Power BI Data Analyst Associate (PL-300) certification enhances career prospects in industries like healthcare, retail, and finance.',
    image: pbi4,
  },
];



const PowerbiHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Power-bi-main">
        <Nar_Header />
    <section className="Power-bi">
 
      <div className="Power-bi-hero">
        <div className="Power-bi-hero-content-left">
          <h2>Course / Power-bi Training in Chennai</h2>
          <h1>Power-bi Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led Power-bi training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted Power-bi courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="Power-bi-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="Power-bi-star-rating-box">
            <div className="Power-bi-stars">⭐⭐⭐⭐⭐</div>
            <div className="Power-bi-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="Power-bi-hero-box">
          <img src={Powerbi} alt="Power-bi Logo" className="Power-bi-logo" />
          <div className="Power-bi-cert-text">Certification Training</div>
          <div className="Power-bi-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="Power-bi-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="Power-bi-interactive-topics">
      <div className="Power-bi-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="Power-bi-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="Power-bi-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="Power-bi-right-image" style={{ backgroundImage: `url(${PowerbiBg})` }}>
        <div className="Power-bi-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default PowerbiHeroSection;
