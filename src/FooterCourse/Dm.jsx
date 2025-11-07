import React, { useState } from 'react';
import './Dm.scss'; // Updated SCSS file
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Dm1 from '../assets/Dm/Dm1.jpg';
import Dm2 from '../assets/Dm/Dm2.jpg';
import Dm3 from '../assets/Dm/Dm3.jpg';
import Dm4 from '../assets/Dm/Dm4.jpg';
import Dmslogo from '../assets/Dm/Dm-logo.png'; // Updated logo import


const topics = [
  {
    title: 'Introduction to Digital Marketing',
    content:
      'Digital marketing encompasses marketing efforts using digital channels like search engines, social media, email, and websites. It enables businesses to reach targeted audiences with measurable ROI, making it essential for modern branding and lead generation.',
    image: Dm1,
  },
  {
    title: 'Core Areas & Techniques',
    content:
      'Key areas include SEO (Search Engine Optimization), SEM (Search Engine Marketing), social media marketing, email marketing, and content marketing. Techniques like keyword research, audience targeting, A/B testing, and analytics help optimize campaigns effectively.',
    image: Dm2,
  },
  {
    title: 'Tools & Analytics',
    content:
      'Top tools include Google Analytics, SEMrush, Moz, Mailchimp, and Hootsuite. These platforms enable tracking of campaign performance, keyword ranking, email open rates, and social engagement. Data-driven insights guide marketing strategies and budget allocation.',
    image: Dm3,
  },
  {
    title: 'Career Paths & Certifications',
    content:
      'Digital marketing roles include SEO Specialist, Social Media Manager, Content Strategist, and PPC Analyst. Certifications such as Google Ads, Facebook Blueprint, HubSpot Content Marketing, and Google Analytics boost credibility and employability.',
    image: Dm4,
  },
];


const DmHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Dm-main">
      <Nar_Header />
      <section className="Dm">
        <div className="Dm-hero">
          <div className="Dm-hero-content-left">
            <h2>Course / Digital marketing Training in Chennai</h2>
            <h1>Digital marketing Course in Chennai</h1>
            <p>
              Kickstart your career as a skilled Digital Marketing professional with Narpavi Technologies, Chennai.
              Our hands-on Digital Marketing training covers SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and Analytics — all through real-world projects and expert mentorship.
              Whether you’re a beginner or an experienced professional, our program equips you with the skills to excel in today’s competitive digital landscape.
            </p>
            <h3 className="Dm-dream-job-text">🚀 Become a Full Stack Web Expert</h3>
            <div className="Dm-star-rating-box">
              <div className="Dm-stars">⭐⭐⭐⭐⭐</div>
              <div className="Dm-rating-label">8,273 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="Dm-hero-box">
            <img src={Dmslogo} alt="Full Stack Logo" className="Dm-logo" />
            <div className="Dm-cert-text">Certification Training</div>
            <div className="Dm-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="Dm-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="Dm-interactive-topics">
        <div className="Dm-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="Dm-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`Dm-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="Dm-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="Dm-right-image">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
      </section>
    </div>
  );
};

export default DmHeroSection;
